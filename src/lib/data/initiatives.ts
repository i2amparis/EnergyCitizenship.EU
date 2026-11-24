import raw from './raw/initiatives.raw.json';
import {
	activities,
	challenges,
	countries,
	goals,
	impacts,
	technologies,
	type ActivityKey,
	type ChallengeKey,
	type GoalKey,
	type ImpactKey,
	type ScaleKey,
	type TechKey,
	type Term
} from './taxonomy';

type RawInitiative = (typeof raw)[number];

export interface Initiative {
	id: number;
	name: string;
	country: string;
	summary: string;
	activities: ActivityKey[];
	technologies: TechKey[];
	/** Free-text technologies named by the initiative itself */
	techMentions: string[];
	impacts: ImpactKey[];
	goals: GoalKey[];
	challenges: ChallengeKey[];
	scale: ScaleKey;
	location: string;
	goal: string;
	plannedImpacts: string;
	actualImpacts: string;
	challengeText: string;
	start: number | null;
	end: number | null;
	ongoing: boolean;
}

const clean = (s: unknown) =>
	String(s ?? '')
		.replace(/\r/g, '')
		.replace(/[ \t]+/g, ' ')
		.replace(/\n{3,}/g, '\n\n')
		.trim();

/** Split a " | "-separated raw field and map every entry to a controlled term key. */
function toKeys<K extends string>(value: unknown, terms: readonly Term<K>[]): K[] {
	const parts = clean(value)
		.split('|')
		.map((p) => p.trim().toLowerCase())
		.filter(Boolean);
	return terms.filter((t) => parts.includes(t.raw.toLowerCase())).map((t) => t.key);
}

function toScale(location: string): ScaleKey {
	const l = location.toLowerCase();
	if (/\n/.test(location.trim()) || /locations in/.test(l)) return 'multi';
	if (l.includes('whole region') || l.includes('country')) return 'region';
	if (l.includes('>500') || l.includes('large city')) return 'metro';
	if (l.includes('50,000-500,000')) return 'city';
	if (l.includes('10,000-50,000') || l.includes('medium town')) return 'town';
	return 'village';
}

function toYear(v: unknown): number | null {
	const n = Number(String(v).trim());
	return Number.isFinite(n) && n > 1800 ? n : null;
}

function normalise(r: RawInitiative): Initiative {
	const end = clean(r['Project end']);
	const location = clean(r.Location);
	return {
		id: r.id,
		name: clean(r.Name).replace(/\.$/, ''),
		country: clean(r.Country),
		summary: clean(r['Short description']),
		activities: toKeys(r.Activities_filter, activities),
		technologies: toKeys(r.Technologies_filter, technologies),
		techMentions: [
			...new Set(
				clean(r.Technologies)
					.split(/[,;]/)
					.map((t) => t.trim().replace(/\.$/, ''))
					.filter(Boolean)
			)
		],
		impacts: toKeys(r.Impacts_filter, impacts),
		goals: toKeys(r.Goals_filter, goals),
		challenges: toKeys(r.Challenges_filter, challenges),
		scale: toScale(location),
		location,
		goal: clean(r.Goal),
		plannedImpacts: clean(r['Planned impacts']),
		actualImpacts: clean(r['Actual impacts']),
		challengeText: clean(r.Challenges),
		start: toYear(r['Project start']),
		end: toYear(end),
		ongoing: /ongoing/i.test(end)
	};
}

export const initiatives: Initiative[] = raw
	.map(normalise)
	.filter((i) => i.country in countries)
	.sort((a, b) => a.id - b.id);

export const initiativeById = new Map(initiatives.map((i) => [i.id, i]));

export const countryNames = [...new Set(initiatives.map((i) => i.country))].sort();

export function byCountry(list: Initiative[] = initiatives) {
	const m = new Map<string, Initiative[]>();
	for (const i of list) m.set(i.country, [...(m.get(i.country) ?? []), i]);
	return m;
}

export const stats = {
	initiatives: initiatives.length,
	countries: countryNames.length,
	earliest: Math.min(...initiatives.map((i) => i.start ?? Infinity)),
	latest: Math.max(...initiatives.map((i) => i.start ?? -Infinity))
};

/** Human-friendly time span for an initiative */
export function period(i: Initiative): string {
	if (!i.start) return i.ongoing ? 'Ongoing' : 'Unknown';
	if (i.ongoing) return `Since ${i.start}`;
	if (i.end && i.end !== i.start) return `${i.start}–${i.end}`;
	return String(i.start);
}
