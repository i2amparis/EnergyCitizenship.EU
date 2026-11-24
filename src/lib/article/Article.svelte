<script lang="ts" module>
	export interface TocItem {
		id: string;
		text: string;
		level: number;
	}
</script>

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Icon from '#lib/components/Icon.svelte';
	import Seo from '#lib/components/Seo.svelte';

	let {
		title,
		kicker,
		description,
		lead,
		toc,
		models = [],
		children
	}: {
		title: string;
		kicker: string;
		description: string;
		lead?: string;
		toc: TocItem[];
		models?: string[];
		children: Snippet;
	} = $props();

	let current = $state('');
	let progress = $state(0);
	let body: HTMLElement;

	onMount(() => {
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) current = e.target.id;
			},
			{ rootMargin: '-20% 0px -70% 0px' }
		);
		for (const t of toc) {
			const el = document.getElementById(t.id);
			if (el) io.observe(el);
		}
		const onScroll = () => {
			const r = body.getBoundingClientRect();
			progress = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight)));
		};
		addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => {
			io.disconnect();
			removeEventListener('scroll', onScroll);
		};
	});
</script>

<Seo {title} {description} />

<div
	class="fixed inset-x-0 top-16 z-30 h-0.5 origin-left bg-leaf"
	style:transform="scaleX({progress})"
	aria-hidden="true"
></div>

<header class="relative overflow-clip border-b border-line">
	<div
		class="grain pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]"
	></div>
	<div class="container-page relative pt-10 pb-14 md:pt-14 md:pb-20">
		<a
			href="/impacts"
			class="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-ink"
		>
			<Icon name="arrow-left" size={16} /> Impacts
		</a>
		<p class="kicker mt-8">{kicker}</p>
		<h1 class="mt-4 max-w-5xl text-[clamp(2rem,4.6vw,3.8rem)] leading-[1.05] font-[460] text-ink">
			{title}
		</h1>
		{#if lead}<p class="mt-6 max-w-3xl text-xl leading-relaxed text-ink-soft">{lead}</p>{/if}
		<div class="mt-7 flex flex-wrap items-center gap-2 text-sm">
			<span class="chip !bg-leaf-soft !text-ink">ENCLUDE</span>
			{#each models as m (m)}<span class="chip">Model: {m}</span>{/each}
		</div>
	</div>
</header>

<div
	class="container-page grid gap-12 py-12 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[17rem_minmax(0,46rem)] xl:justify-center xl:gap-20"
>
	<aside class="hidden lg:block">
		<nav aria-label="On this page" class="sticky top-28">
			<p class="kicker">On this page</p>
			<ol class="mt-4 space-y-1 border-l border-line text-sm">
				{#each toc as t (t.id)}
					<li>
						<a
							href="#{t.id}"
							class="-ml-px block border-l-2 py-1.5 leading-snug transition
							{t.level === 3 ? 'pl-7 text-[0.8rem]' : 'pl-4'}
							{current === t.id
								? 'border-leaf font-medium text-ink'
								: 'border-transparent text-muted hover:text-ink'}"
						>
							{t.text}
						</a>
					</li>
				{/each}
			</ol>
		</nav>
	</aside>

	<div bind:this={body} class="prose-article min-w-0">
		{@render children()}
	</div>
</div>

<style>
	.prose-article :global(.stories) {
		display: grid;
		gap: 1rem;
		margin-block: 2rem;
	}
	.prose-article :global(.story) {
		display: grid;
		grid-template-columns: 7rem 1fr;
		gap: 1.25rem;
		align-items: start;
		padding: 1.25rem;
		border: 1px solid var(--line);
		border-radius: 1.5rem;
		background: var(--surface);
	}
	.prose-article :global(.story img) {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		background: #fff;
		padding: 0.25rem;
	}
	.prose-article :global(.story h3),
	.prose-article :global(.story h4) {
		margin-top: 0;
	}
	.prose-article :global(.story p) {
		margin-top: 0.5rem;
		font-size: 0.97rem;
	}
	.prose-article :global(.story-group) {
		margin-top: 1.5rem;
		font-size: 0.75rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--muted);
	}
	.prose-article :global(.table-wrap) {
		overflow-x: auto;
		margin-block: 2rem;
		border: 1px solid var(--line);
		border-radius: 1.25rem;
		background: var(--surface);
	}
	.prose-article :global(.table-wrap table) {
		margin: 0;
	}
	.prose-article :global(.table-wrap td),
	.prose-article :global(.table-wrap th) {
		padding: 1rem 1.25rem;
	}
	.prose-article :global(.table-wrap td p) {
		margin: 0;
	}
	.prose-article :global(h2),
	.prose-article :global(h3) {
		scroll-margin-top: 6rem;
	}
	@media (max-width: 30rem) {
		.prose-article :global(.story) {
			grid-template-columns: 1fr;
		}
		.prose-article :global(.story img) {
			max-width: 8rem;
		}
	}
</style>
