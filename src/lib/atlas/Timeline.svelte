<script lang="ts">
	import { onDestroy } from 'svelte';
	import Icon from '#lib/components/Icon.svelte';
	import { initiatives } from '#lib/data/initiatives.ts';
	import { YEAR_MAX, YEAR_MIN, type AtlasState } from './atlas.svelte.ts';

	let { atlas }: { atlas: AtlasState } = $props();

	const years = Array.from({ length: YEAR_MAX - YEAR_MIN + 1 }, (_, i) => YEAR_MIN + i);
	// The earliest initiatives (back to 1923) are folded into the first bar
	const bucket = (y: number) => Math.max(YEAR_MIN, y);
	const histogram = $derived.by(() => {
		const all = new Map<number, number>();
		for (const i of initiatives)
			if (i.start) all.set(bucket(i.start), (all.get(bucket(i.start)) ?? 0) + 1);
		return all;
	});
	const peak = $derived(Math.max(...histogram.values()));
	const total = $derived(atlas.inScope.length);

	let playing = $state(false);
	let timer: ReturnType<typeof setInterval> | undefined;

	function play() {
		if (playing) return stop();
		playing = true;
		if (atlas.until >= YEAR_MAX) atlas.until = YEAR_MIN;
		timer = setInterval(() => {
			if (atlas.until >= YEAR_MAX) return stop();
			atlas.until += 1;
		}, 260);
	}
	function stop() {
		playing = false;
		clearInterval(timer);
	}
	onDestroy(stop);
</script>

<div
	class="rounded-2xl border border-line bg-surface/92 p-3 shadow-[0_20px_40px_-28px_rgb(var(--shadow)/0.5)] backdrop-blur-md sm:p-4"
>
	<div class="flex items-center gap-3">
		<button
			type="button"
			onclick={play}
			class="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-paper transition hover:scale-105"
			aria-label={playing ? 'Pause timeline' : 'Play how the movement grew'}
		>
			<Icon name={playing ? 'pause' : 'play'} size={16} stroke={2.4} />
		</button>
		<div class="min-w-0 flex-1">
			<div class="flex items-baseline justify-between gap-2">
				<p class="text-xs font-semibold tracking-wide text-muted uppercase">Started by</p>
				<p class="text-xs text-muted">
					<span class="font-display text-lg font-medium text-ink tabular-nums">{atlas.until}</span>
					· {total} initiative{total === 1 ? '' : 's'}
				</p>
			</div>
			<div class="relative mt-1">
				<div class="flex h-8 items-end gap-px" aria-hidden="true">
					{#each years as y (y)}
						{@const n = histogram.get(y) ?? 0}
						<div
							class="flex-1 rounded-t-[2px] transition-colors duration-300 {y <= atlas.until
								? 'bg-leaf'
								: 'bg-line'}"
							style:height="{n ? 12 + (n / peak) * 88 : 4}%"
						></div>
					{/each}
				</div>
				<input
					type="range"
					min={YEAR_MIN}
					max={YEAR_MAX}
					step="1"
					bind:value={atlas.until}
					oninput={stop}
					aria-label="Show initiatives started up to year"
					aria-valuetext="Up to {atlas.until}"
					class="timeline-range absolute inset-x-0 -bottom-2 w-full"
				/>
			</div>
			<div class="mt-2 flex justify-between text-[0.65rem] text-muted tabular-nums">
				<span>≤{YEAR_MIN}</span><span>2000</span><span>2010</span><span>{YEAR_MAX}</span>
			</div>
		</div>
	</div>
</div>

<style>
	.timeline-range {
		appearance: none;
		background: transparent;
		height: 1.25rem;
		cursor: pointer;
	}
	.timeline-range::-webkit-slider-runnable-track {
		height: 1.25rem;
		background: transparent;
	}
	.timeline-range::-webkit-slider-thumb {
		appearance: none;
		width: 1.1rem;
		height: 1.1rem;
		margin-top: 0.075rem;
		border-radius: 999px;
		background: var(--surface);
		border: 3px solid var(--teal);
		box-shadow: 0 2px 8px rgb(var(--shadow) / 0.35);
	}
	.timeline-range::-moz-range-thumb {
		width: 0.8rem;
		height: 0.8rem;
		border-radius: 999px;
		background: var(--surface);
		border: 3px solid var(--teal);
	}
	.timeline-range::-moz-range-track {
		background: transparent;
	}
</style>
