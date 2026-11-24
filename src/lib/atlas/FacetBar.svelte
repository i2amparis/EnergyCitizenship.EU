<script lang="ts">
	import { slide } from 'svelte/transition';
	import Icon from '#lib/components/Icon.svelte';
	import { facetKeys, facets, type FacetKey, type Term } from '#lib/data/taxonomy.ts';
	import type { AtlasState } from './atlas.svelte.ts';

	let { atlas }: { atlas: AtlasState } = $props();
	let open = $state<FacetKey | null>(null);
</script>

<div class="space-y-3">
	<label class="relative block">
		<span class="sr-only">Search initiatives</span>
		<Icon
			name="search"
			size={18}
			class="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted"
		/>
		<input
			type="search"
			bind:value={atlas.query}
			placeholder="Search initiatives, places, technologies…"
			class="h-12 w-full rounded-full border border-line bg-surface pr-4 pl-11 text-[0.95rem] text-ink placeholder:text-muted focus:border-teal focus:outline-none"
			autocomplete="off"
		/>
	</label>

	<div
		class="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none]"
		role="toolbar"
		aria-label="Filters"
	>
		{#each facetKeys as f (f)}
			{@const n = atlas.selected[f].size}
			<button
				type="button"
				class="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition
				{open === f
					? 'border-ink bg-ink text-paper'
					: n
						? 'border-teal bg-leaf-soft text-ink'
						: 'border-line bg-surface text-ink-soft hover:border-ink-soft hover:text-ink'}"
				aria-expanded={open === f}
				aria-controls="facet-panel"
				onclick={() => (open = open === f ? null : f)}
			>
				{facets[f].label}
				{#if n}
					<span
						class="grid min-w-5 place-items-center rounded-full bg-teal px-1 text-[0.7rem] text-paper"
					>
						{n}
					</span>
				{/if}
				<Icon name="chevron" size={14} class="transition {open === f ? 'rotate-180' : ''}" />
			</button>
		{/each}
	</div>

	{#if open}
		{@const f = open}
		<div
			id="facet-panel"
			transition:slide={{ duration: 220 }}
			class="rounded-2xl border border-line bg-surface p-3"
			role="group"
			aria-label="{facets[f].label} options"
		>
			<div
				class="grid gap-1.5 {f === 'technologies' ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2'}"
			>
				{#each facets[f].terms as readonly Term[] as t (t.key)}
					{@const on = atlas.selected[f].has(t.key)}
					{@const count = atlas.facetCounts[f][t.key] ?? 0}
					<button
						type="button"
						aria-pressed={on}
						disabled={!on && count === 0}
						onclick={() => atlas.toggle(f, t.key)}
						class="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-left text-sm transition disabled:cursor-not-allowed disabled:opacity-40
						{on ? 'bg-leaf-soft text-ink ring-1 ring-teal' : 'text-ink-soft hover:bg-sunken hover:text-ink'}"
					>
						{#if t.icon}
							<img src={t.icon} alt="" class="size-8 shrink-0 rounded-lg bg-white p-0.5" />
						{:else}
							<span
								class="grid size-5 shrink-0 place-items-center rounded-md border {on
									? 'border-teal bg-teal text-paper'
									: 'border-line'}"
							>
								{#if on}<Icon name="check" size={13} stroke={2.6} />{/if}
							</span>
						{/if}
						<span class="flex-1 leading-tight">{t.label}</span>
						<span class="text-xs text-muted tabular-nums">{count}</span>
					</button>
				{/each}
			</div>
			<p class="mt-2 px-2 text-xs text-muted">
				Options within a group widen the search (any of them); groups narrow it (all of them).
			</p>
		</div>
	{/if}

	{#if atlas.activeTerms.length || atlas.query.trim()}
		<div class="flex flex-wrap items-center gap-1.5">
			{#each atlas.activeTerms as t (t.facet + t.key)}
				<button
					type="button"
					class="chip !bg-leaf-soft !text-ink hover:!bg-coral-soft"
					onclick={() => atlas.toggle(t.facet, t.key)}
					aria-label="Remove filter {t.label}"
				>
					{t.label}
					<Icon name="close" size={12} />
				</button>
			{/each}
			<button
				type="button"
				class="ml-1 text-xs font-semibold text-teal underline-offset-4 hover:underline"
				onclick={() => atlas.clear()}
			>
				Clear all
			</button>
		</div>
	{/if}
</div>
