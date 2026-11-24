<script lang="ts">
	import { scaleBand, scaleLinear } from 'd3-scale';
	import { energyMix, fuels, worlds } from '#lib/data/results.ts';

	let { scenario, height = 300 }: { scenario: string; height?: number } = $props();

	const M = { t: 12, r: 12, b: 30, l: 48 };
	let width = $state(640);
	let hover = $state<number | null>(null);

	const data = $derived(energyMix(scenario));
	const world = $derived(worlds.find((w) => w.key === scenario));
	const total = (d: (typeof data)[number]) => d.parts.reduce((n, p) => n + p.value, 0);
	// Shared scale across the three worlds so they can be compared at a glance
	const yMax = $derived(Math.max(...worlds.flatMap((w) => energyMix(w.key).map(total))));
	const x = $derived(
		scaleBand<number>()
			.domain(data.map((d) => d.year))
			.range([M.l, width - M.r])
			.padding(0.32)
	);
	const y = $derived(
		scaleLinear()
			.domain([0, yMax])
			.nice()
			.range([height - M.b, M.t])
	);
	const fmt = (v: number) => v.toLocaleString('en', { maximumFractionDigits: 2 });
</script>

<figure class="my-8 rounded-3xl border border-line bg-surface p-4 sm:p-6">
	<figcaption class="flex flex-wrap items-baseline justify-between gap-2">
		<span class="flex items-center gap-2 font-display text-lg text-ink">
			<span class="size-2.5 rounded-full" style:background={world?.color}></span>{scenario}
		</span>
		<span class="text-xs text-muted">Residential energy mix, ktoe/yr</span>
	</figcaption>
	<ul class="mt-2 flex flex-wrap gap-x-4 gap-y-1">
		{#each fuels as f (f.key)}
			<li class="flex items-center gap-1.5 text-xs text-ink-soft">
				<span class="size-2.5 rounded-sm" style:background={f.color}></span>{f.label}
			</li>
		{/each}
	</ul>

	<div class="relative mt-3" bind:clientWidth={width}>
		<svg
			{width}
			{height}
			role="img"
			aria-label="Residential energy mix under the {scenario} scenario"
			class="block overflow-visible"
		>
			{#each y.ticks(4) as t (t)}
				<g transform="translate(0 {y(t)})">
					<line
						x1={M.l}
						x2={width - M.r}
						stroke="var(--line)"
						stroke-dasharray={t === 0 ? '' : '3 4'}
					/>
					<text
						x={M.l - 8}
						dy="0.32em"
						text-anchor="end"
						class="fill-[var(--muted)] text-[11px] tabular-nums"
					>
						{t}
					</text>
				</g>
			{/each}
			{#each data as d, i (d.year)}
				{@const bw = x.bandwidth()}
				<g
					role="presentation"
					onpointerenter={() => (hover = i)}
					onpointerleave={() => (hover = null)}
					opacity={hover === null || hover === i ? 1 : 0.45}
					class="transition-opacity"
				>
					<rect
						x={(x(d.year) ?? 0) - 4}
						y={M.t}
						width={bw + 8}
						height={height - M.b - M.t}
						fill="transparent"
					/>
					{#each d.parts as p, k (p.key)}
						{@const below = d.parts.slice(0, k).reduce((n, q) => n + q.value, 0)}
						{#if p.value > 0}
							<rect
								x={x(d.year)}
								y={y(below + p.value)}
								width={bw}
								height={Math.max(0, y(below) - y(below + p.value) - 1)}
								rx="3"
								fill={p.color}
							/>
						{/if}
					{/each}
					<text
						x={(x(d.year) ?? 0) + bw / 2}
						y={height - 8}
						text-anchor="middle"
						class="fill-[var(--muted)] text-[11px] tabular-nums"
					>
						{d.year}
					</text>
				</g>
			{/each}
		</svg>

		{#if hover !== null}
			{@const d = data[hover]}
			{@const xx = (x(d.year) ?? 0) + x.bandwidth() / 2}
			<div
				class="pointer-events-none absolute top-2 z-10 min-w-44 rounded-xl bg-ink px-3 py-2 text-xs text-paper shadow-lg"
				style:left="{xx > width / 2 ? xx - 16 : xx + 16}px"
				style:transform={xx > width / 2 ? 'translateX(-100%)' : ''}
			>
				<p class="mb-1 font-semibold">{d.year} · {fmt(total(d))} ktoe</p>
				{#each d.parts.filter((p) => p.value > 0) as p (p.key)}
					<p class="flex justify-between gap-4">
						<span>{p.label}</span><span class="tabular-nums">{fmt(p.value)}</span>
					</p>
				{/each}
				{#if d.savings}<p class="mt-1 flex justify-between gap-4 border-t border-white/20 pt-1">
						<span>Savings</span><span class="tabular-nums">{fmt(d.savings)}</span>
					</p>{/if}
			</div>
		{/if}
	</div>
</figure>
