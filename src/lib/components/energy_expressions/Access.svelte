<script>
    import Accordion from "$lib/components/Accordion.svelte"
    import { energy_access } from "$lib/about-data";
</script>


<div class=" ml-0 lg:ml-2 pl-2 lg:pl-6 pr-6 pb-6 text-medium bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-lg ">
    <div class="p-6">
        <h3 class="text-lg font-bold"><strong>Energy Access</strong></h3>
        <p class="w-80">This category concerns those on the margins οf the energy system and it is linked to the framing of energy as a resource and as a source of wealth.</p>
    </div>
    
    <Accordion
        data={energy_access}
    ></Accordion>
</div>