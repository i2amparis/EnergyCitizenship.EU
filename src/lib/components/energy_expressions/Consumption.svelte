<script>
    import Accordion from "$lib/components/Accordion.svelte"
    import { energy_consumption } from "$lib/about-data";
</script>


<div class=" ml-0 lg:ml-2 pl-2 lg:pl-6 pr-6 pb-6 text-medium bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-lg ">
    <div class="p-6">
        <h3 class="text-lg font-bold"><strong>Energy Consumption</strong></h3>
        <p class="w-80">The traditional role of the citizens in the energy system. It used to be a very passive role in the previous years but more active varieties have emerged.</p>
    </div>
    
    <Accordion
        data={energy_consumption}
    ></Accordion>
</div>