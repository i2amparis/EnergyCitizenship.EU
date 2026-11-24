<script lang="ts">
	import PageIntro from '#lib/components/PageIntro.svelte';
	import ResourceCard from '#lib/components/ResourceCard.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { resourceCards, audienceLabel, type Audience } from '#lib/data/content.ts';

	const audiences: (Audience | 'all')[] = ['all', 'citizens', 'policymakers'];
	let who = $state<Audience | 'all'>('all');
	const shown = $derived(
		who === 'all'
			? resourceCards
			: resourceCards.filter((c) => c.audiences.includes(who as Audience))
	);
</script>

<Seo
	title="Resources"
	description="Guides, toolkits and policy briefs for organising an energy citizenship initiative, from ENCLUDE, DIALOGUES, EC2 and EnergyPROSPECTS."
/>

<PageIntro kicker="Resources" title="Start an initiative of your own">
	<p>
		A collection of resources for organising an energy citizenship initiative: from a step-by-step
		changemaker’s playbook to a joint policy brief.
	</p>
	{#snippet aside()}
		<a
			href="/map"
			class="group block rounded-3xl border border-line bg-surface p-6 transition hover:border-ink-soft"
		>
			<p class="kicker">Get inspired</p>
			<p class="mt-2 font-display text-xl leading-snug">
				See what 65 initiatives across Europe are already doing
			</p>
			<span class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
				Open the atlas <Icon
					name="arrow"
					size={16}
					class="transition group-hover:translate-x-0.5"
				/>
			</span>
		</a>
	{/snippet}
</PageIntro>

<section class="container-page py-12 md:py-16">
	<div class="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by audience">
		<span class="mr-1 text-sm text-muted">For</span>
		{#each audiences as a (a)}
			<button
				type="button"
				aria-pressed={who === a}
				onclick={() => (who = a)}
				class="rounded-full border px-4 py-2 text-sm font-medium transition
				{who === a
					? 'border-ink bg-ink text-paper'
					: 'border-line text-ink-soft hover:border-ink-soft hover:text-ink'}"
			>
				{a === 'all' ? 'Everyone' : audienceLabel[a]}
			</button>
		{/each}
	</div>
	<ul class="mt-8 grid gap-5 md:grid-cols-2">
		{#each shown as card, i (card.href)}
			<li><ResourceCard {card} index={i} /></li>
		{/each}
	</ul>
</section>
