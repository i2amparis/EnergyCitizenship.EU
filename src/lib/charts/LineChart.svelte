<script lang="ts">
	import { scaleLinear, scalePoint } from 'd3-scale';
	import { line, curveMonotoneX } from 'd3-shape';
	import { SvelteSet } from 'svelte/reactivity';
	import type { Series } from '#lib/data/results.ts';

	let {
		series,
		title,
		unit,
		format = (v: number) => v.toLocaleString('en', { maximumFractionDigits: 1 }),
		height = 300
	}: {
		series: Series[];
		title?: string;
		unit: string;
		format?: (v: number) => string;
		height?: number;
	} = $props();

	const M = { t: 16, r: 18, b: 30, l: 58 };
	let width = $state(640);
	let hover = $state<number | null>(null);
	const hidden = new SvelteSet<string>();

	const years = $derived(series[0]?.points.map((p) => p.year) ?? []);
	const visible = $derived(series.filter((s) => !hidden.has(s.key)));
	const x = $derived(
		scalePoint<number>()
			.domain(years)
			.range([M.l, width - M.r])
	);
	const y = $derived(
		scaleLinear()
			.domain([0, Math.max(1e-9, ...visible.flatMap((s) => s.points.map((p) => p.value))) * 1.06])
			.nice()
			.range([height - M.b, M.t])
	);
	const path = $derived(
		line<{ year: number; value: number }>()
			.x((d) => x(d.year) ?? 0)
			.y((d) => y(d.value))
			.curve(curveMonotoneX)
	);
	const step = $derived(
		Math.ceil(years.length / Math.max(2, Math.floor((width - M.l - M.r) / 64)))
	);
	const xTicks = $derived(years.filter((_, i) => i % step === 0 || i === years.length - 1));
	const compact = (v: number) =>
		Math.abs(v) >= 1e6
			? `${+(v / 1e6).toFixed(1)}M`
			: Math.abs(v) >= 1e3
				? `${+(v / 1e3).toFixed(1)}k`
				: `${+v.toFixed(2)}`;

	function onmove(e: PointerEvent) {
		const svg = e.currentTarget as SVGSVGElement;
		const px = e.clientX - svg.getBoundingClientRect().left;
		let best = 0;
		years.forEach((yr, i) => {
			if (Math.abs((x(yr) ?? 0) - px) < Math.abs((x(years[best]) ?? 0) - px)) best = i;
		});
		hover = best;
	}
</script>

<figure class="not-prose my-8 rounded-3xl border border-line bg-surface p-4 sm:p-6">
	{#if title}<figcaption class="font-display text-lg leading-snug text-ink">
			{title}
		</figcaption>{/if}
	<div class="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5" role="group" aria-label="Series">
		{#each series as s (s.key)}
			<button
				type="button"
				class="flex items-center gap-1.5 text-xs font-medium transition {hidden.has(s.key)
					? 'opacity-35'
					: ''}"
				aria-pressed={!hidden.has(s.key)}
				onclick={() =>
					hidden.has(s.key) ? hidden.delete(s.key) : visible.length > 1 && hidden.add(s.key)}
			>
				<span class="h-1 w-4 rounded-full" style:background={s.color}></span>
				{s.label}
			</button>
		{/each}
		<span class="ml-auto text-xs text-muted">{unit}</span>
	</div>

	<div class="relative mt-3" bind:clientWidth={width}>
		<svg
			{width}
			{height}
			role="img"
			aria-label="{title ?? 'Chart'}: {unit}"
			onpointermove={onmove}
			onpointerleave={() => (hover = null)}
			class="block touch-pan-y overflow-visible"
		>
			{#each y.ticks(5) as t (t)}
				<g transform="translate(0 {y(t)})">
					<line
						x1={M.l}
						x2={width - M.r}
						stroke="var(--line)"
						stroke-dasharray={t === 0 ? '' : '3 4'}
					/>
					<text
						x={M.l - 10}
						dy="0.32em"
						text-anchor="end"
						class="fill-[var(--muted)] text-[11px] tabular-nums"
					>
						{compact(t)}
					</text>
				</g>
			{/each}
			{#each xTicks as t (t)}
				<text
					x={x(t)}
					y={height - 8}
					text-anchor="middle"
					class="fill-[var(--muted)] text-[11px] tabular-nums"
				>
					{t}
				</text>
			{/each}

			{#if hover !== null}
				<line
					x1={x(years[hover])}
					x2={x(years[hover])}
					y1={M.t}
					y2={height - M.b}
					stroke="var(--ink-soft)"
					stroke-opacity="0.4"
				/>
			{/if}

			{#each visible as s (s.key)}
				<path
					d={path(s.points)}
					fill="none"
					stroke={s.color}
					stroke-width="2.5"
					stroke-linejoin="round"
					stroke-linecap="round"
				/>
				{#if hover !== null}
					{@const p = s.points[hover]}
					<circle
						cx={x(p.year)}
						cy={y(p.value)}
						r="4.5"
						fill={s.color}
						stroke="var(--surface)"
						stroke-width="2"
					/>
				{/if}
			{/each}
		</svg>

		{#if hover !== null}
			{@const xx = x(years[hover]) ?? 0}
			<div
				class="pointer-events-none absolute top-2 z-10 min-w-40 rounded-xl bg-ink px-3 py-2 text-xs text-paper shadow-lg"
				style:left="{xx > width / 2 ? xx - 12 : xx + 12}px"
				style:transform={xx > width / 2 ? 'translateX(-100%)' : ''}
			>
				<p class="mb-1 font-semibold">{years[hover]}</p>
				{#each visible as s (s.key)}
					<p class="flex items-center justify-between gap-4">
						<span class="flex items-center gap-1.5">
							<span class="size-2 rounded-full" style:background={s.color}></span>{s.label}
						</span>
						<span class="tabular-nums">{format(s.points[hover].value)}</span>
					</p>
				{/each}
			</div>
		{/if}
	</div>

	<details class="mt-3 text-xs text-muted">
		<summary class="cursor-pointer select-none hover:text-ink">Data table</summary>
		<div class="mt-2 overflow-x-auto">
			<table class="w-full text-left tabular-nums">
				<thead>
					<tr>
						<th class="py-1 pr-3">Year</th>{#each series as s (s.key)}<th class="py-1 pr-3">
								{s.label}
							</th>{/each}
					</tr>
				</thead>
				<tbody>
					{#each years as yr, i (yr)}
						<tr class="border-t border-line">
							<td class="py-1 pr-3">{yr}</td>{#each series as s (s.key)}<td class="py-1 pr-3">
									{format(s.points[i].value)}
								</td>{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</details>
</figure>
