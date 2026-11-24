<script lang="ts">
	import type { Snippet } from 'svelte';
	let {
		kicker,
		title,
		children,
		aside
	}: { kicker: string; title: string; children?: Snippet; aside?: Snippet } = $props();
</script>

<section class="relative overflow-clip border-b border-line">
	<div
		class="grain pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
	></div>
	<div class="container-page relative grid gap-10 pt-16 pb-14 md:pt-24 md:pb-20 lg:grid-cols-12">
		<div class="lg:col-span-8">
			<p class="kicker">{kicker}</p>
			<h1 class="mt-4 text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02] font-[480] text-ink">
				{title}
			</h1>
			{#if children}
				<div class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{@render children()}</div>
			{/if}
		</div>
		{#if aside}
			<div class="lg:col-span-4 lg:self-end">{@render aside()}</div>
		{/if}
	</div>
</section>
