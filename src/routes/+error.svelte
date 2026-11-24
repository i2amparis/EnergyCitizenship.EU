<script lang="ts">
	import { page } from '$app/state';
	import Icon from '#lib/components/Icon.svelte';
	import Logo from '#lib/components/Logo.svelte';
</script>

<svelte:head><title>{page.status} · EnergyCitizenship.eu</title></svelte:head>

<section class="container-page grid min-h-[70vh] place-items-center py-24 text-center">
	<div class="max-w-xl">
		<div class="mx-auto w-fit scale-150"><Logo compact /></div>
		<p class="kicker mt-12">Error {page.status}</p>
		<h1 class="mt-3 text-4xl font-[460] md:text-6xl">
			{page.status === 404 ? 'This page went off-grid' : 'Something went wrong'}
		</h1>
		<p class="mt-5 text-lg text-ink-soft">
			{page.status === 404
				? 'The page you are looking for does not exist, or has moved in the new version of the platform.'
				: page.error?.message}
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<a href="/" class="btn btn-primary"><Icon name="arrow-left" size={18} /> Home</a>
			<a href="/map" class="btn btn-ghost">Open the atlas</a>
		</div>
	</div>
</section>
