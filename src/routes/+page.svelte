<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import ModeWheel, { modeTone } from '#lib/components/ModeWheel.svelte';
	import EuropeMap from '#lib/components/EuropeMap.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { modes, expressionIndex } from '#lib/data/expressions.ts';
	import { stats } from '#lib/data/initiatives.ts';
	import { pathways } from '#lib/data/content.ts';

	let { data } = $props();

	// Wheel state: autoplay cycles the modes until the visitor takes over
	let mode = $state<number | null>(0);
	let expression = $state<string | null>(null);
	let hoverMode = $state<number | null>(null);
	let hoverExpression = $state<string | null>(null);

	const focusExpr = $derived(
		hoverExpression || expression
			? expressionIndex.get((hoverExpression ?? expression)!)
			: undefined
	);
	const current = $derived(modes[hoverMode ?? focusExpr?.mode ?? mode ?? 0]);

	// Opening of a Greek case-study interview (quotes.Greece[4]), shortened for the home page
	const voice =
		'The most important part of the energy community is being part of a community. It is not about building your own plan, but cooperating with others for joint actions.';
</script>

<Seo
	title=""
	description="What roles can citizens play in the energy system? Explore the expressions of energy citizenship, an atlas of collective energy initiatives across Europe, and research on their impact."
/>

<!-- ───────────────────────────── HERO ───────────────────────────── -->
<section class="hero relative isolate overflow-clip">
	<div
		class="pointer-events-none absolute inset-0 -z-20 opacity-70 [mask-image:radial-gradient(70%_60%_at_70%_40%,black,transparent)]"
	>
		<div class="grain absolute inset-0"></div>
	</div>
	<div
		class="pointer-events-none absolute -top-40 right-[-10%] -z-20 size-[44rem] rounded-full opacity-60 blur-3xl transition-[background] duration-1000"
		style:background="radial-gradient(circle, {modeTone[current.key].soft}, transparent 65%)"
	></div>

	<!-- The statement sits behind the wheel; the verb follows it -->
	<div class="container-page pointer-events-none relative -z-10 pt-8 md:pt-12">
		<h1 class="statement">
			<span class="lead-line">Energy is not only</span>
			<span class="lead-line">something we consume.</span>
			<span class="soft-line">
				<span class="nowrap">It is something</span>
				<span class="nowrap">
					we can <span class="verb-slot">
						{#each modes as m (m.key)}<span
								class="verb"
								class:on={m.key === current.key}
								style:color={modeTone[m.key].stroke}
								aria-hidden={m.key !== current.key}
							>
								{m.verb}.
							</span>{/each}
					</span>
				</span>
			</span>
		</h1>
	</div>

	<div
		class="container-page relative grid items-center gap-x-10 gap-y-8 pb-16 lg:-mt-[2vw] lg:grid-cols-12 lg:pb-24"
	>
		<div class="order-2 max-w-sm lg:order-1 lg:col-span-4 lg:self-center">
			<p class="text-[0.95rem] leading-relaxed text-ink-soft">
				The roles that citizens could, or should, play within the energy system. A concept used by
				activists, academics and, increasingly, policymakers. Here, four Horizon 2020 projects share
				what they found.
			</p>
			<div class="mt-5 flex flex-wrap gap-2">
				<a href="/map" class="btn btn-primary !px-4 !py-2 !text-sm">
					<Icon name="globe" size={16} /> Explore the atlas
				</a>
				<a href="/about" class="btn btn-ghost !px-4 !py-2 !text-sm">
					What is energy citizenship? <Icon name="arrow" size={16} />
				</a>
			</div>
		</div>

		<div class="order-1 lg:order-2 lg:col-span-8">
			<div class="mx-auto max-w-[31rem]">
				<ModeWheel bind:mode bind:expression bind:hoverMode bind:hoverExpression auto />
			</div>
			<div class="mx-auto mt-5 min-h-[5.5rem] max-w-md text-center" aria-live="polite">
				{#if focusExpr}
					<p class="line-clamp-3 text-[0.95rem] leading-relaxed text-ink-soft">
						{focusExpr.description}
					</p>
					<a
						href="/about?e={focusExpr.slug}"
						class="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
					>
						Read about the {focusExpr.name.toLowerCase()}
						<Icon name="arrow" size={15} />
					</a>
				{:else}
					<p class="text-[0.95rem] leading-relaxed text-ink-soft">{current.intro}</p>
					<a
						href="/about?mode={current.key}"
						class="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
					>
						Its {current.expressions.length} expressions <Icon name="arrow" size={15} />
					</a>
				{/if}
			</div>
		</div>
	</div>
</section>

<!-- ───────────────────────────── Pathways ───────────────────────────── -->
<section class="container-page py-20 md:py-28" aria-labelledby="paths-title">
	<div class="grid gap-10 lg:grid-cols-12">
		<div class="lg:col-span-4">
			<p class="kicker">Pathways</p>
			<h2 id="paths-title" class="mt-3 text-3xl leading-tight font-[480] md:text-5xl">
				Four questions, curated for different readers
			</h2>
			<p class="mt-5 text-ink-soft">
				Results from ENCLUDE, DIALOGUES, EC2 and EnergyPROSPECTS, organised around the questions
				people actually ask.
			</p>
		</div>
		<ol class="divide-y divide-line border-y border-line lg:col-span-8">
			{#each pathways as p, i (p.href)}
				<li>
					<a
						href={p.href}
						class="group grid grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-2 py-7 md:gap-x-8"
					>
						<span class="pt-1 font-display text-lg text-muted italic">0{i + 1}</span>
						<div>
							<p class="kicker">{p.kind} · for {p.audiences.join(' & ')}</p>
							<h3
								class="mt-2 text-2xl leading-snug font-[480] transition group-hover:text-teal md:text-3xl"
							>
								{p.question}
							</h3>
							<p class="mt-2 max-w-xl text-[0.95rem] text-ink-soft">{p.description}</p>
						</div>
						<span
							class="mt-1 grid size-11 place-items-center rounded-full border border-line text-ink transition duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-paper"
							aria-hidden="true"
						>
							<Icon name="arrow" size={18} />
						</span>
					</a>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- ───────────────────────────── Atlas teaser ───────────────────────────── -->
<section class="container-page" aria-labelledby="atlas-title">
	<div
		class="relative overflow-hidden rounded-[2rem] bg-teal-strong text-[#eef5f1] dark:bg-surface dark:text-ink"
	>
		<div class="grid items-center lg:grid-cols-2">
			<div class="relative z-10 p-8 sm:p-12 lg:p-16">
				<p class="kicker !text-[#9fd8c5]">The atlas</p>
				<h2 id="atlas-title" class="mt-3 text-3xl leading-tight font-[460] md:text-5xl">
					{stats.initiatives} collective energy initiatives, from a 1923 village cooperative to 2023 pilots
				</h2>
				<p class="mt-5 max-w-md opacity-80">
					Filter by technology, goal, activity or challenge, replay how the movement grew, and hear
					from the people involved.
				</p>
				<a href="/map" class="btn mt-8 bg-[#eef5f1] text-[#12332f] hover:bg-white">
					Open the atlas <Icon name="arrow" size={18} />
				</a>
			</div>
			<a href="/map" class="block p-6 lg:p-10" tabindex="-1" aria-hidden="true">
				<EuropeMap
					geo={data.geo}
					counts={data.counts}
					class="h-auto w-full [--map-land:#24463f] [--map-stroke:#12332f] dark:[--map-land:#1a302b] dark:[--map-stroke:#11221f]"
				/>
			</a>
		</div>
	</div>
</section>

<!-- ───────────────────────────── A voice ───────────────────────────── -->
<section class="container-page py-24 md:py-32">
	<figure class="mx-auto max-w-4xl text-center">
		<Icon name="quote" size={40} class="mx-auto text-leaf" />
		<blockquote
			class="mt-6 font-display text-[clamp(1.6rem,3.6vw,2.8rem)] leading-[1.2] font-[400] text-ink italic"
		>
			“{voice}”
		</blockquote>
		<figcaption class="mt-6 text-sm text-muted">
			Member of a collective energy initiative, Greece · ENCLUDE case-study interview
		</figcaption>
	</figure>
</section>

<style>
	.statement {
		font-size: clamp(2.9rem, 8.4vw, 8.2rem);
		line-height: 0.92;
		letter-spacing: -0.045em;
	}
	.statement > span {
		display: block;
	}
	.lead-line {
		font-weight: 450;
		color: color-mix(in oklab, var(--ink) 88%, transparent);
	}
	.soft-line {
		margin-top: 0.18em;
		font-size: 0.6em;
		font-style: italic;
		font-weight: 380;
		line-height: 1.05;
		color: color-mix(in oklab, var(--ink) 38%, transparent);
	}
	.nowrap {
		display: inline-block;
		white-space: nowrap;
	}
	/* All verbs share one grid cell, so the slot is as wide as the longest
	   and swapping words never reflows the line */
	.verb-slot {
		display: inline-grid;
		vertical-align: baseline;
	}
	.verb {
		grid-area: 1 / 1;
		opacity: 0;
		transform: translateY(0.3em);
		filter: blur(6px);
		transition:
			opacity 0.35s ease,
			transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
			filter 0.35s ease;
	}
	.verb.on {
		opacity: 1;
		transform: none;
		filter: none;
	}
	@media (max-width: 63.99rem) {
		.statement {
			font-size: clamp(2.6rem, 11.5vw, 5.5rem);
		}
	}
</style>
