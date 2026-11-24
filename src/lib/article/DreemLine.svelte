<script lang="ts">
	import LineChart from '#lib/charts/LineChart.svelte';
	import { dreemLine } from '#lib/data/results.ts';

	let { variable, unit }: { variable: string; unit: string } = $props();

	const meta: Record<string, { title: string; axis: string; format: (v: number) => string }> = {
		'euros/yr': {
			title: 'Total cost of the transition, whole municipality',
			axis: '€ per year',
			format: (v) => `€${Math.round(v).toLocaleString('en')}`
		},
		'euros/household/yr': {
			title: 'Total cost of the transition, per household',
			axis: '€ per household per year',
			format: (v) => `€${Math.round(v).toLocaleString('en')}`
		},
		't CO2/yr': {
			title: 'Residential CO₂ emissions',
			axis: 't CO₂ per year',
			format: (v) => `${Math.round(v).toLocaleString('en')} t`
		}
	};
	const m = $derived(
		meta[unit] ?? { title: variable, axis: unit, format: (v: number) => String(v) }
	);
</script>

<LineChart title={m.title} series={dreemLine(variable)} unit={m.axis} format={m.format} />
