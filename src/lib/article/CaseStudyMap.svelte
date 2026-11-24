<script lang="ts">
	import type { EuropeSvg } from '#lib/server/geo.ts';
	let { geo }: { geo: EuropeSvg } = $props();
	const highlight = ['Ireland', 'Netherlands', 'North Macedonia'];
</script>

<figure class="my-8 overflow-hidden rounded-3xl border border-line bg-[var(--map-water)]">
	<svg
		viewBox="0 0 {geo.width} {geo.height}"
		class="h-auto w-full"
		role="img"
		aria-label="Locations of the three case studies"
	>
		{#each geo.shapes as s, i (i)}
			<path
				d={s.d}
				fill={highlight.includes(s.name) ? 'var(--map-land-active)' : 'var(--map-land)'}
				stroke="var(--map-stroke)"
			/>
		{/each}
		{#each geo.points as p, i (p.name)}
			<g transform="translate({p.x} {p.y})">
				<circle r="16" fill="var(--sun)" fill-opacity="0.25" />
				<circle r="7" fill="var(--sun)" stroke="var(--surface)" stroke-width="2.5" />
				<text
					x={i === 1 ? 14 : 0}
					y={i === 1 ? -14 : 32}
					text-anchor={i === 1 ? 'start' : 'middle'}
					class="fill-[var(--ink)] text-[17px] font-semibold"
					paint-order="stroke"
					stroke="var(--map-water)"
					stroke-width="5"
				>
					{p.name}
				</text>
			</g>
		{/each}
	</svg>
</figure>
