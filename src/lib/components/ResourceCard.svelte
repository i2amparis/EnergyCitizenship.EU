<script lang="ts">
	import { audienceLabel, type Card } from '#lib/data/content.ts';
	import Icon from './Icon.svelte';

	let { card, index = 0 }: { card: Card; index?: number } = $props();

	const isExternal = $derived(/^https?:/.test(card.href));
	const linkLabel = $derived(
		card.external === 'pdf'
			? 'Read the PDF'
			: card.external === 'iamparis'
				? 'Open on IAMPARIS'
				: card.external === 'site'
					? 'Visit website'
					: 'Read the study'
	);
	const tone: Record<string, string> = {
		academics: 'bg-sky-soft text-sky',
		policymakers: 'bg-sun-soft text-[color-mix(in_oklab,var(--sun)_60%,var(--ink))]',
		citizens: 'bg-coral-soft text-coral'
	};
</script>

<article
	class="group card relative flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgb(var(--shadow)/0.45)] sm:p-7"
>
	<div class="flex items-center justify-between gap-3">
		<span class="kicker">{String(index + 1).padStart(2, '0')} · {card.kind}</span>
		{#if isExternal}
			<span class="chip" title={card.external === 'pdf' ? 'PDF document' : 'External website'}>
				<Icon name={card.external === 'pdf' ? 'pdf' : 'external'} size={13} />
				{card.external === 'pdf' ? 'PDF' : card.external === 'iamparis' ? 'IAMPARIS' : 'Website'}
			</span>
		{/if}
	</div>

	<h3 class="mt-5 text-xl leading-snug font-medium text-ink sm:text-[1.4rem]">
		<a
			href={card.href}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noopener noreferrer' : undefined}
			class="after:absolute after:inset-0 after:rounded-[1.25rem] focus-visible:outline-none"
		>
			{card.title}
		</a>
	</h3>
	<p class="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{card.description}</p>

	<div class="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-line pt-5">
		<div class="space-y-2">
			<div class="flex flex-wrap gap-1.5">
				{#each card.audiences as a (a)}
					<span class="chip {tone[a]}">{audienceLabel[a]}</span>
				{/each}
			</div>
			<p class="text-xs text-muted">By {card.by.join(', ')}</p>
		</div>
		<span
			class="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition group-hover:gap-2.5"
			aria-hidden="true"
		>
			{linkLabel}
			<Icon name={isExternal ? 'external' : 'arrow'} size={16} />
		</span>
	</div>
</article>
