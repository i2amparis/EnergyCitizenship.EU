<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import EuropeMap from '#lib/components/EuropeMap.svelte';
	import { period } from '#lib/data/initiatives.ts';
	import {
		activities,
		challenges,
		goals,
		impacts,
		scales,
		technologies,
		type Term
	} from '#lib/data/taxonomy.ts';

	let { data } = $props();
	const item = $derived(data.item);

	const pick = (terms: readonly Term[], keys: readonly string[]) =>
		terms.filter((t) => keys.includes(t.key));

	const sections = $derived(
		[
			{ title: 'Goal', body: item.goal, tags: pick(goals, item.goals) },
			{ title: 'Planned impacts', body: item.plannedImpacts, tags: [] as Term[] },
			{ title: 'Actual impacts', body: item.actualImpacts, tags: pick(impacts, item.impacts) },
			{ title: 'Challenges', body: item.challengeText, tags: pick(challenges, item.challenges) }
		].filter((s) => s.body && s.body !== '0')
	);
	const techs = $derived(pick(technologies, item.technologies));
	const acts = $derived(pick(activities, item.activities));
	const scale = $derived(scales.find((s) => s.key === item.scale));
</script>

<Seo
	title={item.name}
	description="{item.summary} A collective energy initiative in {item.country}."
/>

<article class="container-page pt-8 pb-8 md:pt-12">
	<nav aria-label="Breadcrumb" class="text-sm">
		<a href="/map" class="inline-flex items-center gap-1.5 text-ink-soft hover:text-ink">
			<Icon name="arrow-left" size={16} /> Atlas
		</a>
		<span class="mx-2 text-muted">/</span>
		<a href="/map?country={encodeURIComponent(item.country)}" class="text-ink-soft hover:text-ink">
			{item.country}
		</a>
	</nav>

	<header class="mt-8 grid gap-8 lg:grid-cols-12">
		<div class="lg:col-span-8">
			<p class="kicker">Collective energy initiative · {item.country}</p>
			<h1 class="mt-3 text-[clamp(2.1rem,5vw,3.8rem)] leading-[1.04] font-[460] text-ink">
				{item.name}
			</h1>
			<p class="mt-5 max-w-2xl text-xl leading-relaxed text-ink-soft">{item.summary}</p>
			<div class="mt-6 flex flex-wrap gap-2">
				<span class="chip"><Icon name="calendar" size={13} /> {period(item)}</span>
				<span class="chip"><Icon name="users" size={13} /> {scale?.label}</span>
				{#each acts as a (a.key)}<span class="chip !bg-leaf-soft !text-ink">{a.label}</span>{/each}
			</div>
		</div>
	</header>

	<div class="mt-12 grid gap-10 lg:grid-cols-12">
		<div class="space-y-10 lg:col-span-7">
			{#each sections as s (s.title)}
				<section>
					<h2 class="text-2xl font-medium text-ink">{s.title}</h2>
					<p class="mt-3 text-[1.05rem] leading-relaxed whitespace-pre-line text-ink-soft">
						{s.body}
					</p>
					{#if s.tags.length}
						<div class="mt-3 flex flex-wrap gap-1.5">
							{#each s.tags as t (t.key)}<span class="chip">{t.label}</span>{/each}
						</div>
					{/if}
				</section>
			{/each}

			{#if techs.length}
				<section>
					<h2 class="text-2xl font-medium text-ink">Technologies</h2>
					<ul class="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
						{#each techs as t (t.key)}
							<li
								class="flex flex-col items-center gap-2 rounded-2xl border border-line bg-surface p-4 text-center"
							>
								<img src={t.icon} alt="" class="size-14 rounded-xl bg-white p-1" />
								<span class="text-sm text-ink-soft">{t.label}</span>
							</li>
						{/each}
					</ul>
					{#if item.techMentions.length}
						<p class="mt-4 text-sm text-muted">
							In their own words: {item.techMentions.join(', ')}
						</p>
					{/if}
				</section>
			{/if}
		</div>

		<aside class="lg:col-span-5">
			<div class="sticky top-24 space-y-4">
				<div class="card overflow-hidden">
					<EuropeMap
						geo={data.geo}
						highlight={item.country}
						labels={false}
						class="h-auto w-full bg-[var(--map-water)]"
					/>
				</div>
				<dl class="card divide-y divide-line text-sm">
					<div class="flex justify-between gap-4 p-4">
						<dt class="text-muted">Country</dt>
						<dd class="text-right font-medium">{item.country}</dd>
					</div>
					<div class="flex justify-between gap-4 p-4">
						<dt class="text-muted">Period</dt>
						<dd class="text-right font-medium">{period(item)}</dd>
					</div>
					<div class="flex justify-between gap-4 p-4">
						<dt class="text-muted">Setting</dt>
						<dd class="text-right font-medium whitespace-pre-line">{item.location}</dd>
					</div>
				</dl>
			</div>
		</aside>
	</div>
</article>

{#if data.related.length}
	<section class="container-page mt-12" aria-labelledby="related-title">
		<div class="flex items-end justify-between gap-4 border-b border-line pb-4">
			<h2 id="related-title" class="text-2xl font-medium">More in {item.country}</h2>
			<a
				class="text-sm font-semibold text-teal"
				href="/map?country={encodeURIComponent(item.country)}"
			>
				See them on the atlas →
			</a>
		</div>
		<ul class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.related as r (r.id)}
				<li>
					<a
						href="/initiatives/{r.id}"
						class="block h-full rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-ink-soft"
					>
						<p class="text-xs text-muted">{period(r)}</p>
						<p class="mt-1.5 font-display text-lg leading-snug text-ink">{r.name}</p>
						<p class="mt-2 line-clamp-2 text-sm text-ink-soft">{r.summary}</p>
					</a>
				</li>
			{/each}
		</ul>
	</section>
{/if}

<nav class="container-page mt-12 grid gap-3 sm:grid-cols-2" aria-label="Other initiatives">
	{#if data.prev}
		<a
			href="/initiatives/{data.prev.id}"
			class="group rounded-2xl border border-line p-5 hover:border-ink-soft"
		>
			<span class="flex items-center gap-1.5 text-xs text-muted">
				<Icon name="arrow-left" size={14} /> Previous
			</span>
			<span class="mt-1 block font-display text-lg text-ink">{data.prev.name}</span>
		</a>
	{:else}<span></span>{/if}
	{#if data.next}
		<a
			href="/initiatives/{data.next.id}"
			class="group rounded-2xl border border-line p-5 text-right hover:border-ink-soft"
		>
			<span class="flex items-center justify-end gap-1.5 text-xs text-muted">
				Next <Icon name="arrow" size={14} />
			</span>
			<span class="mt-1 block font-display text-lg text-ink">{data.next.name}</span>
		</a>
	{/if}
</nav>
