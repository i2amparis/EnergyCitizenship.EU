<script>
    import Accordion from "$lib/components/Accordion.svelte"
    import { political_governance } from "$lib/about-data";
</script>


<div class=" ml-0 lg:ml-2 pl-2 lg:pl-6 pr-6 pb-6 text-medium bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-lg ">
    <div class="p-6">
        <h3 class="text-lg font-bold"><strong>Political Governance</strong></h3>
        <p class="w-80">In these expressions of energy citizenship, the objective is to affect change in decision-making processes (at multiple scales). </p>
    </div>
    
    <Accordion
        data={political_governance}
    ></Accordion>
</div>