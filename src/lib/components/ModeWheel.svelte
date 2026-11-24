<script lang="ts" module>
	export const modeTone = {
		access: { stroke: 'var(--coral)', soft: 'var(--coral-soft)' },
		consumption: { stroke: 'var(--sky)', soft: 'var(--sky-soft)' },
		production: { stroke: 'var(--leaf)', soft: 'var(--leaf-soft)' },
		governance: { stroke: 'var(--sun)', soft: 'var(--sun-soft)' }
	} as const;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { expressionIndex, modes } from '#lib/data/expressions.ts';

	/**
	 * The "roulette": four modes on a ring with their fifteen expressions.
	 * It works as a filter: hovering previews, clicking selects a mode or an
	 * expression (both bindable). Nothing navigates or scrolls the page.
	 */
	let {
		mode = $bindable<number | null>(null),
		expression = $bindable<string | null>(null),
		hoverMode = $bindable<number | null>(null),
		hoverExpression = $bindable<string | null>(null),
		auto = false,
		label = 'The four modes of energy citizenship'
	}: {
		mode?: number | null;
		expression?: string | null;
		hoverMode?: number | null;
		hoverExpression?: string | null;
		auto?: boolean;
		label?: string;
	} = $props();

	const C = 200;
	const R = 138;
	const GAP = 7;

	const polar = (deg: number, r = R) => {
		const a = ((deg - 90) * Math.PI) / 180;
		return [C + r * Math.cos(a), C + r * Math.sin(a), Math.cos(a), Math.sin(a)] as const;
	};
	const arc = (from: number, to: number) => {
		const [x1, y1] = polar(from);
		const [x2, y2] = polar(to);
		return `M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`;
	};

	const segments = modes.map((m, i) => {
		const from = i * 90 + GAP / 2;
		const to = (i + 1) * 90 - GAP / 2;
		const n = m.expressions.length;
		const dots = m.expressions.map((e, j) => {
			const [x, y, ux, uy] = polar(from + ((j + 0.5) * (to - from)) / n);
			return { ...e, x, y, ux, uy };
		});
		const [lx, ly] = polar((from + to) / 2, R + 60);
		return { mode: m, path: arc(from, to), dots, label: { x: lx / 4, y: ly / 4 } };
	});

	// What the wheel is "looking at": a hover preview wins over the selection
	const focusExpression = $derived(hoverExpression ?? expression);
	const focusMode = $derived.by((): number | null => {
		if (hoverMode !== null) return hoverMode;
		const fromExpression = focusExpression ? expressionIndex.get(focusExpression)?.mode : undefined;
		return fromExpression ?? mode;
	});
	const focusExpr = $derived(focusExpression ? expressionIndex.get(focusExpression) : undefined);
	const centre = $derived(focusMode === null ? null : modes[focusMode]);
	const tetherDot = $derived(
		focusExpression
			? segments.flatMap((s) => s.dots).find((d) => d.slug === focusExpression)
			: undefined
	);

	function dotState(i: number, slug: string) {
		if (hoverExpression === slug) return 'hover';
		if (expression === slug) return 'selected';
		if (focusMode === null) return 'idle';
		return focusMode === i ? 'in' : 'dim';
	}

	// Autoplay until the visitor interacts, then never again
	let touched = $state(false);
	onMount(() => {
		if (!auto || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const t = setInterval(() => {
			if (touched || hoverMode !== null || hoverExpression !== null) return;
			if (document.visibilityState !== 'visible') return;
			mode = ((mode ?? -1) + 1) % modes.length;
		}, 3600);
		return () => clearInterval(t);
	});

	function pickMode(i: number) {
		touched = true;
		expression = null;
		mode = mode === i ? null : i;
	}
	function pickExpression(slug: string, i: number) {
		touched = true;
		if (expression === slug) expression = null;
		else {
			expression = slug;
			mode = i;
		}
	}
</script>

<div
	class="wheel relative mx-auto aspect-square w-full max-w-[34rem] select-none"
	role="group"
	aria-label={label}
	onpointerleave={() => {
		hoverMode = null;
		hoverExpression = null;
	}}
>
	<!-- ambient glow, tinted by the mode in focus -->
	<div
		class="pointer-events-none absolute inset-[22%] rounded-full blur-2xl transition-[background-color,opacity] duration-300"
		style:background-color={centre ? modeTone[centre.key].soft : 'transparent'}
		style:opacity={centre ? 0.9 : 0}
	></div>

	<svg viewBox="0 0 400 400" class="absolute inset-0 h-full w-full overflow-visible">
		<g class="spin" aria-hidden="true">
			<circle cx={C} cy={C} r={R - 52} fill="none" stroke="var(--line)" stroke-dasharray="2 7" />
			<circle
				cx={C}
				cy={C}
				r={R + 26}
				fill="none"
				stroke="var(--line)"
				stroke-dasharray="1 10"
				opacity="0.7"
			/>
		</g>

		{#if tetherDot}
			{#key tetherDot.slug}
				<line
					x1={C}
					y1={C}
					x2={tetherDot.x}
					y2={tetherDot.y}
					stroke={centre ? modeTone[centre.key].stroke : 'var(--line)'}
					stroke-width="1.5"
					stroke-dasharray="3 5"
					class="tether"
					aria-hidden="true"
				/>
			{/key}
		{/if}

		{#each segments as s, i (s.mode.key)}
			{@const on = focusMode === i}
			<path
				d={s.path}
				fill="none"
				stroke={modeTone[s.mode.key].stroke}
				stroke-linecap="round"
				stroke-width={on ? 30 : focusMode === null ? 22 : 16}
				opacity={on ? 1 : focusMode === null ? 0.55 : 0.25}
				class="arc"
				aria-hidden="true"
			/>
			<!-- wide invisible hit area so the whole band is hoverable -->
			<path
				d={s.path}
				fill="none"
				stroke="transparent"
				stroke-width="58"
				pointer-events="stroke"
				class="cursor-pointer"
				role="presentation"
				onpointerenter={() => (hoverMode = i)}
				onpointerleave={() => (hoverMode = null)}
				onclick={() => pickMode(i)}
			/>
		{/each}
	</svg>

	<!-- mode labels -->
	{#each segments as s, i (s.mode.key)}
		<button
			type="button"
			onclick={() => pickMode(i)}
			onpointerenter={() => (hoverMode = i)}
			onpointerleave={() => (hoverMode = null)}
			onfocus={() => (hoverMode = i)}
			onblur={() => (hoverMode = null)}
			class="absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.12em] whitespace-nowrap uppercase transition duration-150 sm:text-xs
			{mode === i
				? 'bg-ink text-paper'
				: focusMode === i
					? 'bg-surface text-ink shadow-sm'
					: 'text-muted hover:text-ink'}"
			style:left="{s.label.x}%"
			style:top="{s.label.y}%"
			aria-pressed={mode === i}
		>
			{s.mode.key}
		</button>
	{/each}

	<!-- expressions -->
	{#each segments as s, i (s.mode.key)}
		{#each s.dots as d, j (d.slug)}
			{@const st = dotState(i, d.slug)}
			<button
				type="button"
				class="dot absolute grid size-[11%] place-items-center rounded-full bg-[#fffdf8] shadow-sm ring-2"
				data-state={st}
				style:left="{d.x / 4}%"
				style:top="{d.y / 4}%"
				style:--ux={d.ux}
				style:--uy={d.uy}
				style:--tone={modeTone[s.mode.key].stroke}
				style:--delay="{st === 'in' ? j * 20 : 0}ms"
				aria-label="{d.name} ({s.mode.name})"
				aria-pressed={expression === d.slug}
				onpointerenter={() => (hoverExpression = d.slug)}
				onpointerleave={() => (hoverExpression = null)}
				onfocus={() => (hoverExpression = d.slug)}
				onblur={() => (hoverExpression = null)}
				onclick={() => pickExpression(d.slug, i)}
			>
				<img src={d.image} alt="" class="size-[80%] object-contain" draggable="false" />
			</button>
		{/each}
	{/each}

	<!-- centre -->
	<div
		class="pointer-events-none absolute inset-[28%] grid place-items-center text-center"
		aria-live="polite"
	>
		{#key focusExpr?.slug ?? centre?.key ?? 'all'}
			<div class="centre flex flex-col items-center px-3">
				{#if focusExpr}
					{@const tone = modeTone[modes[focusExpr.mode].key]}
					<span
						class="grid size-20 place-items-center rounded-full bg-[#fffdf8] shadow-md sm:size-24"
						style:box-shadow="0 0 0 3px {tone.stroke}"
					>
						<img src={focusExpr.image} alt="" class="size-[82%] object-contain" />
					</span>
					<p class="mt-3 font-display text-xl leading-tight font-medium text-ink sm:text-2xl">
						{focusExpr.name}
					</p>
					<p
						class="mt-1 text-[0.68rem] font-semibold tracking-[0.12em] uppercase"
						style:color={tone.stroke}
					>
						{modes[focusExpr.mode].name}
					</p>
				{:else if centre}
					<span
						class="grid size-20 place-items-center rounded-full sm:size-24"
						style:background={modeTone[centre.key].soft}
					>
						<img src={centre.image} alt="" class="size-[80%] object-contain" />
					</span>
					<p class="mt-3 font-display text-xl leading-tight font-medium text-ink sm:text-2xl">
						{centre.name}
					</p>
					<p class="mt-1 text-xs text-muted sm:text-sm">
						{centre.expressions.length} expressions
					</p>
				{:else}
					<p class="font-display text-5xl font-[420] text-ink">15</p>
					<p class="mt-1 text-sm text-muted">expressions in<br />four modes</p>
				{/if}
			</div>
		{/key}
	</div>
</div>

<style>
	.wheel {
		container-type: inline-size;
	}
	.arc {
		transition:
			stroke-width 0.32s cubic-bezier(0.34, 1.56, 0.64, 1),
			opacity 0.2s ease;
	}
	.spin {
		transform-origin: 200px 200px;
		animation: spin 90s linear infinite;
	}
	.tether {
		animation: tether 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.dot {
		--push: 0cqw;
		--scale: 1;
		--ring: var(--line);
		transform: translate(-50%, -50%)
			translate(calc(var(--ux) * var(--push)), calc(var(--uy) * var(--push))) scale(var(--scale));
		--tw-ring-color: var(--ring);
		transition:
			transform 0.32s cubic-bezier(0.34, 1.56, 0.64, 1) var(--delay),
			opacity 0.18s ease,
			box-shadow 0.2s ease;
		z-index: 1;
		cursor: pointer;
	}
	.dot img {
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.dot[data-state='idle'] {
		--ring: color-mix(in oklab, var(--tone) 50%, var(--line));
	}
	.dot[data-state='in'] {
		--push: 1.6cqw;
		--scale: 1.16;
		--ring: var(--tone);
	}
	.dot[data-state='dim'] {
		--scale: 0.86;
		opacity: 0.45;
	}
	.dot[data-state='selected'] {
		--push: 3.2cqw;
		--scale: 1.42;
		--ring: var(--tone);
		box-shadow:
			0 0 0 5px color-mix(in oklab, var(--tone) 30%, transparent),
			0 12px 24px -10px rgb(var(--shadow) / 0.5);
		z-index: 3;
	}
	.dot[data-state='hover'] {
		--push: 4cqw;
		--scale: 1.5;
		--ring: var(--tone);
		box-shadow: 0 14px 28px -10px rgb(var(--shadow) / 0.55);
		opacity: 1;
		z-index: 4;
	}
	.dot[data-state='hover'] img {
		transform: rotate(-6deg) scale(1.04);
	}
	.dot:focus-visible {
		outline: 3px solid var(--tone);
		outline-offset: 3px;
	}
	.centre {
		animation: centre-in 0.26s cubic-bezier(0.16, 1, 0.3, 1);
	}
	@keyframes centre-in {
		from {
			opacity: 0;
			transform: scale(0.95) translateY(4px);
			filter: blur(2px);
		}
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
	@keyframes tether {
		from {
			opacity: 0;
			stroke-dashoffset: 40;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.spin {
			animation: none;
		}
	}
</style>
