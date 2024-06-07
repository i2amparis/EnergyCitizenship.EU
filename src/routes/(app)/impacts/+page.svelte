
<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import { test_cards } from "$lib/home-data"

</script>

<section class=" max-w-5xl m-auto items-center justify-center p-5">
    <h2 class="antialiased tracking-normal font-sans text-3xl font-bold leading-[1.3] text-blue-gray-900 lg:text-5xl mt-10 ml-4">Impacts</h2>
    <div class="flex">
        
        <div class="mt-10 grid grid-cols-1 gap-2 lg:grid-cols-2 ">
            {#each test_cards as card_data}
            <ModuleCard
                data={card_data}>
            </ModuleCard>
            {/each}
        </div>
    </div>
</section>
