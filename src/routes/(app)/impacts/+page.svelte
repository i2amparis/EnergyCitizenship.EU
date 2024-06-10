
<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import { test_cards } from "$lib/home-data"

</script>
<!-- <div class="absolute top-0 z-[-2] w-full h-full bg-white-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(120,119,198,0))]"></div> -->
<section class=" max-w-7xl m-auto items-center justify-center p-5">
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
