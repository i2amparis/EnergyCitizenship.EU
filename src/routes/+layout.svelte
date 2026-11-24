<script lang="ts">
	import '../app.css';
	import SiteHeader from '#lib/components/SiteHeader.svelte';
	import SiteFooter from '#lib/components/SiteFooter.svelte';

	let { children } = $props();
</script>

<a
	href="#main"
	class="sr-only z-50 rounded-full bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
>
	Skip to content
</a>

<SiteHeader />

<main id="main" tabindex="-1" class="outline-none">
	{@render children()}
</main>

<SiteFooter />
