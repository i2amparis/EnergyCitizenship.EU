<script lang="ts">
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';
	import Icon from '#lib/components/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import AtlasMap from '#lib/atlas/AtlasMap.svelte';
	import FacetBar from '#lib/atlas/FacetBar.svelte';
	import Timeline from '#lib/atlas/Timeline.svelte';
	import CountryProfile from '#lib/atlas/CountryProfile.svelte';
	import InitiativeCard from '#lib/atlas/InitiativeCard.svelte';
	import { AtlasState, type SortKey } from '#lib/atlas/atlas.svelte.ts';
	import { stats } from '#lib/data/initiatives.ts';
	import { technologies } from '#lib/data/taxonomy.ts';

	const atlas = new AtlasState();
	let synced = $state(false);

	onMount(() => {
		atlas.fromURL(new URL(location.href));
		synced = true;
	});

	// Keep the address bar shareable: every filter lives in the URL
	$effect(() => {
		if (!synced) return;
		const next = atlas.toURL(new URL(location.href));
		if (next.href !== location.href) replaceState(next, {});
	});

	const countriesInScope = $derived(Object.keys(atlas.countryCounts).length);

	function describe(country: string) {
		const list = atlas.inScope.filter((i) => i.country === country);
		const top = technologies
			.map((t) => ({
				t,
				n: list.filter((i) => (i.technologies as string[]).includes(t.key)).length
			}))
			.sort((a, b) => b.n - a.n)[0];
		return top?.n ? `Most often: ${top.t.label}` : '';
	}

	const sorts: { key: SortKey; label: string }[] = [
		{ key: 'country', label: 'Country' },
		{ key: 'newest', label: 'Newest first' },
		{ key: 'oldest', label: 'Oldest first' },
		{ key: 'name', label: 'Name' }
	];
</script>

<Seo
	title="Atlas of citizen energy initiatives"
	description="An interactive atlas of {stats.initiatives} collective energy initiatives in {stats.countries} European countries, surveyed by ENCLUDE. Filter by technology, goal, activity or challenge."
/>

<div class="lg:grid lg:grid-cols-[minmax(25rem,42%)_1fr] xl:grid-cols-[minmax(28rem,38%)_1fr]">
	<!-- Map (top on mobile, sticky right column on desktop) -->
	<div
		class="relative h-[62svh] min-h-[26rem] border-b border-line lg:sticky lg:top-16 lg:order-2 lg:h-[calc(100dvh-4rem)] lg:border-b-0 lg:border-l"
	>
		<AtlasMap {atlas} {describe} />

		<div
			class="pointer-events-none absolute top-4 left-4 z-10 hidden rounded-2xl border border-line bg-surface/90 px-3 py-2.5 backdrop-blur sm:block"
		>
			<p class="text-[0.65rem] font-semibold tracking-wide text-muted uppercase">
				Initiatives per country
			</p>
			<div
				class="mt-1.5 h-2 w-36 rounded-full bg-[linear-gradient(90deg,var(--map-land-active),var(--leaf))]"
			></div>
			<div class="mt-1 flex justify-between text-[0.65rem] text-muted">
				<span>fewer</span><span>more</span>
			</div>
		</div>

		<div class="absolute inset-x-3 bottom-3 z-10 sm:inset-x-4 sm:bottom-4 lg:right-20">
			<Timeline {atlas} />
		</div>
	</div>

	<!-- Explorer column -->
	<div class="lg:order-1">
		<div class="px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-10">
			<p class="kicker">ENCLUDE survey · {stats.earliest}–{stats.latest}</p>
			<h1 class="mt-2 text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-[460]">
				Atlas of citizen energy initiatives
			</h1>
			<p class="mt-3 max-w-xl text-ink-soft">
				Collective energy initiatives across Europe, from cooperatives to pilots. Locations are
				shown by country, because the case studies are anonymised.
			</p>

			<div class="mt-7">
				<FacetBar {atlas} />
			</div>

			{#if atlas.country}
				<div class="mt-6">
					<CountryProfile {atlas} country={atlas.country} />
				</div>
			{/if}

			<div class="mt-8 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-3">
				<p class="text-sm text-ink-soft" aria-live="polite">
					<span class="font-display text-2xl font-medium text-ink tabular-nums">
						{atlas.results.length}
					</span>
					initiative{atlas.results.length === 1 ? '' : 's'}
					{#if atlas.country}in {atlas.country}{:else}in {countriesInScope} countr{countriesInScope ===
						1
							? 'y'
							: 'ies'}{/if}
				</p>
				<label class="flex items-center gap-2 text-sm text-muted">
					Sort
					<select
						bind:value={atlas.sort}
						class="rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink focus:border-teal focus:outline-none"
					>
						{#each sorts as s (s.key)}<option value={s.key}>{s.label}</option>{/each}
					</select>
				</label>
			</div>

			{#if atlas.results.length}
				<ul class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
					{#each atlas.results as item (item.id)}
						<li><InitiativeCard {item} {atlas} /></li>
					{/each}
				</ul>
			{:else}
				<div class="mt-8 rounded-3xl border border-dashed border-line p-10 text-center">
					<p class="font-display text-xl text-ink">No initiative matches these filters</p>
					<p class="mt-2 text-sm text-ink-soft">
						Try removing a filter or moving the timeline forward.
					</p>
					<button
						class="btn btn-ghost mt-5"
						onclick={() => (atlas.clear(), atlas.selectCountry(null))}
					>
						<Icon name="reset" size={16} /> Reset filters
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>
