<script lang="ts">
	import mark from '#lib/assets/brand/mark.svg';
	let { compact = false }: { compact?: boolean } = $props();
</script>

<span class="group/logo flex items-center gap-2.5">
	<span
		class="grid size-10 place-items-center rounded-[0.9rem] bg-[#fffdf8] ring-1 ring-line transition duration-500 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover/logo:-rotate-6 group-hover/logo:scale-105"
	>
		<img src={mark} alt="" width="32" height="32" class="size-8" />
	</span>
	{#if !compact}
		<span class="font-display text-[1.15rem] leading-none font-semibold tracking-tight text-ink">
			EnergyCitizenship<span class="text-leaf">.eu</span>
		</span>
	{/if}
</span>
