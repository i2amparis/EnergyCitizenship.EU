

<script>
    import Accordion from "$lib/components/Accordion.svelte"
    import { energy_production } from "$lib/about-data";
</script>


<div class=" ml-0 lg:ml-2 pl-2 lg:pl-6 pr-6 pb-6 text-medium bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-lg ">
    <div class="p-6">
        <h3 class="text-lg font-bold"><strong>Energy Production</strong></h3>
        <p class="w-80">These expressions facilitate citizens in breaking out of their role as consumers, capturing both individual and collective organisation for energy production.</p>
    </div>
    
    <Accordion
        data={energy_production}
    ></Accordion>
</div>