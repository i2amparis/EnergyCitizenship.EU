import { SvelteSet } from 'svelte/reactivity';
import { initiatives, type Initiative } from '#lib/data/initiatives.ts';
import { facetKeys, facets, type FacetKey, type Term } from '#lib/data/taxonomy.ts';

export type SortKey = 'country' | 'newest' | 'oldest' | 'name';

/** URL parameter names for each facet: short, stable and shareable */
const PARAM: Record<FacetKey, string> = {
	technologies: 'tech',
	activities: 'act',
	goals: 'goal',
	impacts: 'impact',
	challenges: 'chal',
	scale: 'scale'
};

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const values = (i: Initiative, f: FacetKey): readonly string[] =>
	f === 'scale' ? [i.scale] : (i[f] as readonly string[]);

const searchIndex = new Map(
	initiatives.map((i) => [
		i.id,
		fold(
			[i.name, i.summary, i.goal, i.country, i.location, i.challengeText, ...i.techMentions].join(
				' '
			)
		)
	])
);

export const YEAR_MIN = 1990;
export const YEAR_MAX = Math.max(...initiatives.map((i) => i.start ?? 0));

/**
 * Single source of truth for the Atlas. The map, the list, the facet counts and the
 * URL all read from it, so a filter always shows up everywhere at once.
 */
export class AtlasState {
	query = $state('');
	country = $state<string | null>(null);
	until = $state(YEAR_MAX);
	sort = $state<SortKey>('country');
	hoverCountry = $state<string | null>(null);
	hoverId = $state<number | null>(null);
	selected: Record<FacetKey, SvelteSet<string>> = Object.fromEntries(
		facetKeys.map((f) => [f, new SvelteSet<string>()])
	) as Record<FacetKey, SvelteSet<string>>;

	#matchesFacets(i: Initiative, except?: FacetKey) {
		for (const f of facetKeys) {
			if (f === except) continue;
			const sel = this.selected[f];
			if (sel.size && !values(i, f).some((v) => sel.has(v))) return false;
		}
		return true;
	}

	#matchesBase(i: Initiative) {
		const q = fold(this.query.trim());
		if (q && !q.split(/\s+/).every((w) => searchIndex.get(i.id)!.includes(w))) return false;
		if (this.until < YEAR_MAX && (i.start === null || i.start > this.until)) return false;
		return true;
	}

	/** Everything except the country selection: drives the map */
	readonly inScope = $derived(
		initiatives.filter((i) => this.#matchesBase(i) && this.#matchesFacets(i))
	);

	/** What the list shows */
	readonly results = $derived.by(() => {
		const list = this.country
			? this.inScope.filter((i) => i.country === this.country)
			: this.inScope;
		const by = {
			country: (a: Initiative, b: Initiative) =>
				a.country.localeCompare(b.country) || (b.start ?? 0) - (a.start ?? 0),
			newest: (a: Initiative, b: Initiative) => (b.start ?? 0) - (a.start ?? 0),
			oldest: (a: Initiative, b: Initiative) => (a.start ?? 9999) - (b.start ?? 9999),
			name: (a: Initiative, b: Initiative) => a.name.localeCompare(b.name)
		}[this.sort];
		return [...list].sort(by);
	});

	readonly countryCounts = $derived.by(() => {
		const m: Record<string, number> = {};
		for (const i of this.inScope) m[i.country] = (m[i.country] ?? 0) + 1;
		return m;
	});

	/** How many results each option would give, given all the other filters */
	readonly facetCounts = $derived.by(() => {
		const out = {} as Record<FacetKey, Record<string, number>>;
		for (const f of facetKeys) {
			const counts: Record<string, number> = {};
			for (const i of initiatives) {
				if (this.country && i.country !== this.country) continue;
				if (!this.#matchesBase(i) || !this.#matchesFacets(i, f)) continue;
				for (const v of values(i, f)) counts[v] = (counts[v] ?? 0) + 1;
			}
			out[f] = counts;
		}
		return out;
	});

	readonly activeCount = $derived(
		facetKeys.reduce((n, f) => n + this.selected[f].size, 0) +
			(this.query.trim() ? 1 : 0) +
			(this.until < YEAR_MAX ? 1 : 0)
	);

	readonly activeTerms = $derived(
		facetKeys.flatMap((f) =>
			[...this.selected[f]].map((key) => ({
				facet: f,
				key,
				label: (facets[f].terms as readonly Term[]).find((t) => t.key === key)?.label ?? key
			}))
		)
	);

	toggle(f: FacetKey, key: string) {
		const s = this.selected[f];
		if (s.has(key)) s.delete(key);
		else s.add(key);
	}

	selectCountry(name: string | null) {
		this.country = this.country === name ? null : name;
	}

	clear() {
		for (const f of facetKeys) this.selected[f].clear();
		this.query = '';
		this.until = YEAR_MAX;
	}

	// ── URL state ───────────────────────────────────────────────────────────────
	fromURL(url: URL) {
		const p = url.searchParams;
		this.query = p.get('q') ?? '';
		const c = p.get('country');
		this.country = c && initiatives.some((i) => i.country === c) ? c : null;
		const u = Number(p.get('until'));
		this.until = u >= YEAR_MIN && u <= YEAR_MAX ? u : YEAR_MAX;
		const s = p.get('sort') as SortKey | null;
		if (s && ['country', 'newest', 'oldest', 'name'].includes(s)) this.sort = s;
		for (const f of facetKeys) {
			const valid = new Set((facets[f].terms as readonly Term[]).map((t) => t.key));
			this.selected[f].clear();
			for (const v of (p.get(PARAM[f]) ?? '').split(',')) if (valid.has(v)) this.selected[f].add(v);
		}
	}

	toURL(base: URL) {
		const url = new URL(base);
		url.search = '';
		const p = url.searchParams;
		if (this.query.trim()) p.set('q', this.query.trim());
		if (this.country) p.set('country', this.country);
		for (const f of facetKeys)
			if (this.selected[f].size) p.set(PARAM[f], [...this.selected[f]].join(','));
		if (this.until < YEAR_MAX) p.set('until', String(this.until));
		if (this.sort !== 'country') p.set('sort', this.sort);
		return url;
	}
}
