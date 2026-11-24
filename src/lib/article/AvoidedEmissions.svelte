<script lang="ts">
	import LineChart from '#lib/charts/LineChart.svelte';
	import { animoAvoided, animoRegions } from '#lib/data/results.ts';
</script>

{#each animoRegions as r (r.key)}
	<LineChart
		title="{r.name}, {r.country}"
		series={animoAvoided(r.key)}
		unit="CO₂ emissions avoided (t/yr)"
		format={(v) => `${v.toLocaleString('en', { maximumFractionDigits: 1 })} t`}
		height={240}
	/>
{/each}
