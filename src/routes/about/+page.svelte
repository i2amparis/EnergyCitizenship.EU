<script lang="ts">
	import { onMount } from 'svelte';
	import { replaceState } from '$app/navigation';
	import Icon from '#lib/components/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import ModeWheel, { modeTone } from '#lib/components/ModeWheel.svelte';
	import {
		expressionCount,
		expressionIndex,
		modeIndex,
		modes,
		perspectives
	} from '#lib/data/expressions.ts';

	let mode = $state<number | null>(null);
	let expression = $state<string | null>(null);
	let hoverMode = $state<number | null>(null);
	let hoverExpression = $state<string | null>(null);
	let ready = $state(false);

	const visible = $derived(mode === null ? modes.map((_, i) => i) : [mode]);

	onMount(() => {
		const url = new URL(location.href);
		// v1 links used #slug anchors: turn them into a selection instead of a jump
		const legacy = url.hash.slice(1);
		const e = url.searchParams.get('e') ?? (expressionIndex.has(legacy) ? legacy : null);
		const m = modeIndex(url.searchParams.get('mode') ?? (modeIndex(legacy) >= 0 ? legacy : null));
		if (e && expressionIndex.has(e)) {
			expression = e;
			mode = expressionIndex.get(e)!.mode;
		} else if (m >= 0) mode = m;
		ready = true;
	});

	// Keep the selection shareable, without scrolling or adding history entries
	$effect(() => {
		if (!ready) return;
		const url = new URL(location.href);
		url.hash = '';
		url.search = '';
		if (expression) url.searchParams.set('e', expression);
		else if (mode !== null) url.searchParams.set('mode', modes[mode].key);
		if (url.href !== location.href) replaceState(url, {});
	});

	function select(slug: string) {
		if (expression === slug) {
			expression = null;
			return;
		}
		expression = slug;
		mode = expressionIndex.get(slug)!.mode;
	}

	function step(dir: 1 | -1) {
		const all = [...expressionIndex.keys()];
		const i = expression ? all.indexOf(expression) : -1;
		select(all[(i + dir + all.length) % all.length]);
	}
</script>

<Seo
	title="What is energy citizenship?"
	description="Four modes and fifteen expressions of energy citizenship, from the energy poor to the citizen-activist: the ENCLUDE typology, with perspectives from EC2, EnergyPROSPECTS and DIALOGUES."
/>

<section class="relative overflow-clip border-b border-line">
	<div
		class="grain pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
	></div>
	<div class="container-page relative grid gap-8 pt-14 pb-12 md:pt-20 lg:grid-cols-12">
		<div class="lg:col-span-7">
			<p class="kicker">About · Expressions of energy citizenship</p>
			<h1 class="mt-4 text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] font-[460]">
				Rights and responsibilities in the energy system
			</h1>
		</div>
		<div class="space-y-4 text-[1.05rem] leading-relaxed text-ink-soft lg:col-span-5 lg:self-end">
			<p>
				Traditionally, citizens were assumed to be only passive consumers of the energy system, but
				there are increasingly more modes of participation: in energy access and production, and in
				the political and governance aspects of energy.
			</p>
			<p>
				In each mode, ENCLUDE researchers identified several expressions of energy citizenship, {expressionCount}
				in total. Use the wheel to explore them.
			</p>
		</div>
	</div>
</section>

<section class="container-page py-10 md:py-14" aria-label="Explore the expressions">
	<div class="grid gap-10 lg:grid-cols-12 lg:gap-14">
		<!-- The wheel is the filter; it stays in view while the list changes -->
		<div class="lg:col-span-6">
			<div class="lg:sticky lg:top-24">
				<ModeWheel bind:mode bind:expression bind:hoverMode bind:hoverExpression />
				<p class="mt-4 text-center text-xs text-muted">
					Hover to preview · click a mode or an expression to filter
				</p>
			</div>
		</div>

		<div class="min-w-0 lg:col-span-6">
			<!-- mode filter, synced with the wheel -->
			<div class="flex flex-wrap gap-1.5" role="group" aria-label="Filter by mode">
				<button
					type="button"
					aria-pressed={mode === null}
					onclick={() => ((mode = null), (expression = null))}
					class="rounded-full border px-3.5 py-1.5 text-sm font-medium transition
					{mode === null
						? 'border-ink bg-ink text-paper'
						: 'border-line text-ink-soft hover:border-ink-soft hover:text-ink'}"
				>
					All <span class="opacity-60">{expressionCount}</span>
				</button>
				{#each modes as m, i (m.key)}
					<button
						type="button"
						aria-pressed={mode === i}
						onclick={() => ((mode = mode === i ? null : i), (expression = null))}
						onpointerenter={() => (hoverMode = i)}
						onpointerleave={() => (hoverMode = null)}
						class="flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition
						{mode === i
							? 'border-ink bg-ink text-paper'
							: 'border-line text-ink-soft hover:border-ink-soft hover:text-ink'}"
					>
						<span class="size-2 rounded-full" style:background={modeTone[m.key].stroke}></span>
						{m.key[0].toUpperCase() + m.key.slice(1)}
						<span class="opacity-60">{m.expressions.length}</span>
					</button>
				{/each}
			</div>

			<div class="mt-8 space-y-10">
				{#each visible as mi (modes[mi].key)}
					{@const m = modes[mi]}
					<section class="list-in" aria-labelledby="mode-{m.key}">
						<header class="flex items-start gap-4">
							<span
								class="grid size-14 shrink-0 place-items-center rounded-full"
								style:background={modeTone[m.key].soft}
							>
								<img src={m.image} alt="" class="size-[78%] object-contain" />
							</span>
							<div>
								<h2 id="mode-{m.key}" class="text-2xl leading-tight font-[500]">{m.name}</h2>
								<p class="mt-1 text-[0.95rem] text-ink-soft">{m.intro}</p>
							</div>
						</header>

						<ul class="mt-5 space-y-2.5">
							{#each m.expressions as e, j (e.slug)}
								{@const open = expression ? expression === e.slug : mode !== null}
								{@const active = expression === e.slug}
								<li class="item-in" style:animation-delay="{j * 50}ms">
									<article
										class="rounded-2xl border bg-surface transition duration-300
										{active
											? 'border-[color:var(--tone)] shadow-[0_0_0_3px_color-mix(in_oklab,var(--tone)_25%,transparent)]'
											: hoverExpression === e.slug
												? 'border-ink-soft'
												: 'border-line'}"
										style:--tone={modeTone[m.key].stroke}
										onpointerenter={() => (hoverExpression = e.slug)}
										onpointerleave={() => (hoverExpression = null)}
									>
										<button
											type="button"
											class="flex w-full items-center gap-4 p-4 text-left"
											aria-expanded={open}
											aria-pressed={active}
											onclick={() => select(e.slug)}
										>
											<img
												src={e.image}
												alt=""
												class="size-14 shrink-0 rounded-xl bg-white object-contain p-0.5 transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] {active
													? 'scale-110 -rotate-3'
													: ''}"
												loading="lazy"
											/>
											<span class="flex-1">
												<span class="block font-display text-lg leading-snug text-ink">
													{e.name}
												</span>
												{#if !open}
													<span class="mt-0.5 line-clamp-1 block text-sm text-muted">
														{e.description}
													</span>
												{/if}
											</span>
											<Icon
												name="chevron"
												size={18}
												class="text-muted transition duration-300 {active ? 'rotate-180' : ''}"
											/>
										</button>
										<div class="expand" data-open={open}>
											<div class="overflow-hidden">
												<div
													class="space-y-3 px-4 pb-5 text-[0.95rem] leading-relaxed text-ink-soft sm:pl-[5.5rem]"
												>
													{#each e.description.split('\n\n') as para, k (k)}<p>{para}</p>{/each}
												</div>
											</div>
										</div>
									</article>
								</li>
							{/each}
						</ul>
					</section>
				{/each}
			</div>

			{#if expression}
				<div class="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm">
					<button
						type="button"
						class="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink"
						onclick={() => step(-1)}
					>
						<Icon name="arrow-left" size={16} /> Previous expression
					</button>
					<button
						type="button"
						class="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink"
						onclick={() => step(1)}
					>
						Next expression <Icon name="arrow" size={16} />
					</button>
				</div>
			{/if}
		</div>
	</div>
</section>

<section class="container-page border-t border-line py-20" aria-labelledby="perspectives-title">
	<div class="grid gap-10 lg:grid-cols-12">
		<div class="lg:col-span-4">
			<p class="kicker">Further reading</p>
			<h2 id="perspectives-title" class="mt-3 text-3xl leading-tight font-[480] md:text-4xl">
				One concept, four perspectives
			</h2>
			<p class="mt-4 text-ink-soft">
				ENCLUDE is not the only project that has explored the energy citizenship concept. Each
				project brings its own framing.
			</p>
		</div>
		<ul class="grid gap-3 sm:grid-cols-2 lg:col-span-8">
			{#each perspectives as p (p.project)}
				<li>
					<a
						href={p.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex h-full flex-col justify-between gap-6 rounded-3xl border border-line bg-surface p-6 transition hover:-translate-y-0.5 hover:border-ink-soft"
					>
						<div>
							<p class="kicker">{p.project}</p>
							<p class="mt-2 font-display text-xl leading-snug text-ink">{p.title}</p>
						</div>
						<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
							<Icon name="pdf" size={16} /> Read the report
							<Icon name="external" size={14} class="transition group-hover:translate-x-0.5" />
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	/* smooth height animation without measuring: 0fr → 1fr */
	.expand {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.45s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.expand[data-open='true'] {
		grid-template-rows: 1fr;
	}
	.list-in {
		animation: rise 0.5s cubic-bezier(0.16, 1, 0.3, 1);
	}
	.item-in {
		animation: rise 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
	}
</style>
