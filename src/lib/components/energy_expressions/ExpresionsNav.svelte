<script>

    import { main_categories } from "$lib/about-data";

    import Access from "./Access.svelte";
    import Consumption from "./Consumption.svelte";
    import Production from "./Production.svelte";
    import Governance from "./Governance.svelte";

    const expressions_pages = [Access, Consumption, Production, Governance];

    let selectedPage = expressions_pages[0];
    let activeIndex = 0;
    
    // const loadPage = (obj) => selectedPage = obj;

    function loadPage(page, index) {
        selectedPage = page;
        activeIndex = index;
    }

</script>


<div class="md:flex mt-6 xl:mt-4">
    <ul class="flex-column space-y space-y-4 text-md font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        {#each main_categories as category, i}
            <li class=" min-w-fit">
                <!-- <button 
                    on:click={() => loadPage(expressions_pages[i])}
                    class="inline-flex items-center px-4 py-3 hover:text-gray-900 bg-gray-50 hover:bg-gray-200 rounded-lg active w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" aria-current="page">
                    <img class="w-12 scale-50 min-[370px]:scale-75 sm:scale-90" src={category.imageUrl} alt='temp' />
                    {category.name}
                </button> -->
                <button 
                    on:click={() => loadPage(expressions_pages[i], i)}
                    class="inline-flex items-center px-4 py-3 rounded-lg w-full
                    {i === activeIndex 
                        ? 'text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-white' 
                        : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'}" 
                    aria-current="page">
                    <img class="w-12 scale-50 min-[370px]:scale-75 sm:scale-90" src={category.imageUrl} alt='temp' />
                    {category.name}
                </button>
            </li>
        {/each}
    </ul>
    <svelte:component this={selectedPage} />
</div>