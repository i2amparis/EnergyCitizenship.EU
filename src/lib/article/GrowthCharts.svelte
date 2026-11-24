<script lang="ts">
	import LineChart from '#lib/charts/LineChart.svelte';
	import { animoGrowth, animoRegions, type GrowthStat } from '#lib/data/results.ts';

	const stats: GrowthStat[] = ['Min', 'Average', 'Max'];
	let stat = $state<GrowthStat>('Average');
</script>

<div class="not-prose mt-10">
	<div class="flex flex-wrap items-center justify-between gap-3">
		<p class="text-sm text-muted">Growth from the initial population, by 2030</p>
		<div
			class="inline-flex rounded-full border border-line bg-surface p-1"
			role="radiogroup"
			aria-label="Simulation statistic"
		>
			{#each stats as s (s)}
				<button
					type="button"
					role="radio"
					aria-checked={stat === s}
					onclick={() => (stat = s)}
					class="rounded-full px-4 py-1.5 text-sm font-medium transition {stat === s
						? 'bg-ink text-paper'
						: 'text-ink-soft hover:text-ink'}"
				>
					{s}
				</button>
			{/each}
		</div>
	</div>
	{#each animoRegions as r (r.key)}
		<LineChart
			title="{r.name}, {r.country}"
			series={animoGrowth(r.key, stat)}
			unit="Growth (%)"
			format={(v) => `${v}%`}
			height={240}
		/>
	{/each}
</div>
