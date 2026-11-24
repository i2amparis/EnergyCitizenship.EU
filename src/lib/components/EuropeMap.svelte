<script lang="ts">
	import type { EuropeSvg } from '#lib/server/geo.ts';

	let {
		geo,
		counts = {},
		highlight,
		labels = true,
		class: klass = ''
	}: {
		geo: EuropeSvg;
		counts?: Record<string, number>;
		highlight?: string;
		labels?: boolean;
		class?: string;
	} = $props();

	const max = $derived(Math.max(1, ...Object.values(counts)));
	const r = (n: number) => 7 + Math.sqrt(n / max) * 22;
</script>

<svg viewBox="0 0 {geo.width} {geo.height}" class={klass} role="img" aria-label="Map of Europe">
	<g>
		{#each geo.shapes as s, i (i)}
			{@const n = counts[s.name] ?? 0}
			<path
				d={s.d}
				fill={highlight === s.name
					? 'var(--leaf)'
					: n
						? `color-mix(in oklab, var(--leaf) ${18 + (n / max) * 50}%, var(--map-land))`
						: 'var(--map-land)'}
				stroke="var(--map-stroke)"
				stroke-width="1"
			/>
		{/each}
	</g>
	{#if labels}
		<g>
			{#each Object.entries(counts) as [name, n] (name)}
				{@const a = geo.anchors[name]}
				{#if a}
					<circle
						cx={a[0]}
						cy={a[1]}
						r={r(n)}
						fill="var(--teal)"
						fill-opacity="0.92"
						stroke="var(--surface)"
						stroke-width="2"
					/>
					<text
						x={a[0]}
						y={a[1]}
						dy="0.35em"
						text-anchor="middle"
						fill="var(--paper)"
						font-size={n > 9 ? 15 : 13}
						font-weight="650"
					>
						{n}
					</text>
				{/if}
			{/each}
		</g>
	{:else if highlight && geo.anchors[highlight]}
		{@const a = geo.anchors[highlight]}
		<circle cx={a[0]} cy={a[1]} r="26" fill="none" stroke="var(--teal)" stroke-width="2.5" />
		<circle cx={a[0]} cy={a[1]} r="7" fill="var(--teal)" />
	{/if}
</svg>
