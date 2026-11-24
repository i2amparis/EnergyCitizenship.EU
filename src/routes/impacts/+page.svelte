<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import ResourceCard from '#lib/components/ResourceCard.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { impactCards } from '#lib/data/content.ts';

	const kinds = ['All', ...new Set(impactCards.map((c) => c.kind))];
	let kind = $state('All');
	const shown = $derived(kind === 'All' ? impactCards : impactCards.filter((c) => c.kind === kind));
</script>

<Seo
	title="Impacts"
	description="Modelling studies and reports evaluating the future impacts of energy citizenship on the European energy transition."
/>

<PageIntro kicker="Impacts & futures" title="What could energy citizenship change?">
	<p>
		An evaluation of the future impacts of energy citizenship on the energy transition: scenario
		modelling, case-study simulations and reports from ENCLUDE and EnergyPROSPECTS.
	</p>
</PageIntro>

<section class="container-page py-12 md:py-16">
	<div class="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
		{#each kinds as k (k)}
			<button
				type="button"
				aria-pressed={kind === k}
				onclick={() => (kind = k)}
				class="rounded-full border px-4 py-2 text-sm font-medium transition
				{kind === k
					? 'border-ink bg-ink text-paper'
					: 'border-line text-ink-soft hover:border-ink-soft hover:text-ink'}"
			>
				{k}
				<span class="ml-1 text-xs opacity-60">
					{k === 'All' ? impactCards.length : impactCards.filter((c) => c.kind === k).length}
				</span>
			</button>
		{/each}
	</div>
	<ul class="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
		{#each shown as card, i (card.href)}
			<li><ResourceCard {card} index={i} /></li>
		{/each}
	</ul>
</section>
