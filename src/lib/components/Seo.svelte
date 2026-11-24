<script lang="ts">
	let { title, description }: { title: string; description: string } = $props();
	const full = $derived(title ? `${title} · EnergyCitizenship.eu` : 'EnergyCitizenship.eu');
</script>

<svelte:head>
	<title>{full}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="EnergyCitizenship.eu" />
	<meta property="og:title" content={full} />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
</svelte:head>
