<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { period, type Initiative } from '#lib/data/initiatives.ts';
	import { technologies } from '#lib/data/taxonomy.ts';
	import type { AtlasState } from './atlas.svelte.ts';

	let { item, atlas }: { item: Initiative; atlas: AtlasState } = $props();
	const techs = $derived(
		technologies.filter((t) => (item.technologies as string[]).includes(t.key))
	);
	const highlighted = $derived(atlas.hoverCountry === item.country && !atlas.country);
</script>

<article
	class="group relative rounded-2xl border bg-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-ink-soft hover:shadow-[0_18px_40px_-28px_rgb(var(--shadow)/0.5)]
	{highlighted ? 'border-teal' : 'border-line'}"
	onpointerenter={() => (atlas.hoverCountry = item.country)}
	onpointerleave={() => atlas.hoverCountry === item.country && (atlas.hoverCountry = null)}
>
	<div class="flex items-center gap-2 text-xs text-muted">
		<Icon name="pin" size={14} />
		<span class="font-medium text-ink-soft">{item.country}</span>
		<span aria-hidden="true">·</span>
		<span>{period(item)}</span>
	</div>
	<h3 class="mt-2.5 font-display text-lg leading-snug font-medium text-ink">
		<a
			href="/initiatives/{item.id}"
			class="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
			onfocus={() => (atlas.hoverCountry = item.country)}
			onblur={() => (atlas.hoverCountry = null)}
		>
			{item.name}
		</a>
	</h3>
	<p class="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{item.summary}</p>

	{#if techs.length}
		<ul class="mt-4 flex items-center gap-1.5" aria-label="Technologies">
			{#each techs.slice(0, 6) as t (t.key)}
				<li>
					<img
						src={t.icon}
						alt={t.label}
						title={t.label}
						class="size-7 rounded-lg bg-white p-0.5 ring-1 ring-line"
						loading="lazy"
					/>
				</li>
			{/each}
			{#if techs.length > 6}<li class="text-xs text-muted">+{techs.length - 6}</li>{/if}
		</ul>
	{/if}

	<span
		class="absolute top-5 right-5 grid size-8 place-items-center rounded-full text-muted transition group-hover:bg-ink group-hover:text-paper"
		aria-hidden="true"
	>
		<Icon name="arrow" size={16} />
	</span>
</article>
