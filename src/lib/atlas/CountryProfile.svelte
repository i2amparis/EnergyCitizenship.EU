<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '#lib/components/Icon.svelte';
	import { activities, technologies, type Term } from '#lib/data/taxonomy.ts';
	import { quotes } from '#lib/data/quotes.ts';
	import type { Initiative } from '#lib/data/initiatives.ts';
	import type { AtlasState } from './atlas.svelte.ts';

	let { atlas, country }: { atlas: AtlasState; country: string } = $props();

	const list = $derived(atlas.results);
	const voices = $derived(quotes[country] ?? []);
	let q = $state(0);
	$effect(() => {
		void country;
		q = 0;
	});

	function breakdown(terms: readonly Term[], pick: (i: Initiative) => readonly string[]) {
		const rows = terms
			.map((t) => ({ ...t, n: list.filter((i) => pick(i).includes(t.key)).length }))
			.filter((r) => r.n)
			.sort((a, b) => b.n - a.n);
		return rows.slice(0, 5);
	}
	const tech = $derived(breakdown(technologies, (i) => i.technologies));
	const acts = $derived(breakdown(activities, (i) => i.activities));
	const since = $derived(Math.min(...list.map((i) => i.start ?? Infinity)));
</script>

<section
	class="rounded-3xl border border-line bg-surface p-5 sm:p-6"
	aria-labelledby="country-title"
	in:fade={{ duration: 200 }}
>
	<div class="flex items-start justify-between gap-4">
		<div>
			<p class="kicker">Country profile</p>
			<h2 id="country-title" class="mt-1 text-3xl font-medium text-ink">{country}</h2>
			<p class="mt-1 text-sm text-ink-soft">
				{list.length} initiative{list.length === 1 ? '' : 's'}{#if Number.isFinite(since)}, the
					earliest from {since}{/if}
			</p>
		</div>
		<button
			type="button"
			class="grid size-9 shrink-0 place-items-center rounded-full border border-line text-ink-soft hover:bg-sunken hover:text-ink"
			aria-label="Back to all countries"
			onclick={() => atlas.selectCountry(null)}
		>
			<Icon name="close" size={16} />
		</button>
	</div>

	{#if list.length}
		<div class="mt-6 grid gap-6 sm:grid-cols-2">
			{#each [{ title: 'Technologies', rows: tech }, { title: 'Activities', rows: acts }] as block (block.title)}
				<div>
					<h3 class="text-xs font-semibold tracking-wide text-muted uppercase !font-sans">
						{block.title}
					</h3>
					<ul class="mt-3 space-y-2">
						{#each block.rows as r (r.key)}
							<li class="text-sm">
								<div class="flex justify-between gap-2 text-ink-soft">
									<span class="truncate">{r.label}</span>
									<span class="tabular-nums text-muted">{r.n}</span>
								</div>
								<div class="mt-1 h-1.5 overflow-hidden rounded-full bg-sunken">
									<div
										class="h-full rounded-full bg-leaf transition-[width] duration-700"
										style:width="{(r.n / list.length) * 100}%"
									></div>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	{/if}

	{#if voices.length}
		<figure class="mt-6 rounded-2xl bg-sunken p-5">
			<div class="flex items-center justify-between">
				<p class="kicker flex items-center gap-1.5">
					<Icon name="quote" size={14} /> Voices from {country}
				</p>
				{#if voices.length > 1}
					<div class="flex items-center gap-1">
						<span class="mr-1 text-xs text-muted tabular-nums">{q + 1}/{voices.length}</span>
						<button
							class="grid size-7 place-items-center rounded-full hover:bg-surface"
							aria-label="Previous quote"
							onclick={() => (q = (q - 1 + voices.length) % voices.length)}
						>
							<Icon name="arrow-left" size={14} />
						</button>
						<button
							class="grid size-7 place-items-center rounded-full hover:bg-surface"
							aria-label="Next quote"
							onclick={() => (q = (q + 1) % voices.length)}
						>
							<Icon name="arrow" size={14} />
						</button>
					</div>
				{/if}
			</div>
			{#key q}
				<blockquote
					class="mt-3 font-display text-[1.05rem] leading-relaxed text-ink italic"
					in:fade={{ duration: 250 }}
					aria-live="polite"
				>
					“{voices[q].quote}”
				</blockquote>
				<figcaption class="mt-3 flex flex-wrap gap-1.5">
					{#each voices[q].themes as t (t)}<span class="chip">{t}</span>{/each}
				</figcaption>
			{/key}
		</figure>
	{/if}
</section>
