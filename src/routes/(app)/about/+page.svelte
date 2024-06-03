<script>
  import Accordion from "$lib/components/Accordion.svelte"
  import { energy_access } from "$lib/about-data";
  import { energy_consumption } from "$lib/about-data";
  import { energy_production } from "$lib/about-data"; 
  import { political_governance } from "$lib/about-data";

</script>


<div class="absolute z-[-2] h-full w-full bg-inherit bg-[radial-gradient(100%_50%_at_50%_0%,rgba(18,217,7,0.13)_0,rgba(18,217,7,0)_50%,rgba(18,217,7,0)_100%)]"></div>

<div class="container mt-6 md:mt-24 mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">

    <div class="prose p-6">
        <!-- <div class="h-fit bg-slate-200 shadow-xl rounded-3xl p-8"> -->
        <h2 class="block antialiased tracking-normal font-sans text-3xl font-bold leading-[1.3] text-blue-gray-900 lg:text-5xl">Expressions of energy citizenship</h2>
        <p class="block antialiased font-sans text-md font-normal leading-relaxed text-inherit mt-2 w-full !text-gray-500">Energy citizenship is a term used by activists, academics, and increasingly, policymakers to conceptualise the potential roles that citizens could (or should) play in the energy system. This conceptualisation can be related to both rights and responsibilities that people have related to the energy system.</p> 
        <p class="block antialiased font-sans text-md font-normal leading-relaxed text-inherit mt-2 w-full !text-gray-500">Traditionally, citizens were assumed to be only passive consumers of the system but there are increasingly more modes of participation including in issues related to energy access and production but also in the political and governance aspects of energy. In each of this mode, ENCLUDE researchers have identified multiple expressions of energy citizenship.</p> 
        <!-- </div> -->
    </div>


  <div class=" mx-auto w-fit">
    <div role="tablist" class="tabs tabs-bordered">


      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Energy Access" />
      <div role="tabpanel" class="tab-content p-10">
        <Accordion
          data={energy_access}
        ></Accordion>
      </div>

      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Energy Consumpion" checked />
      <div role="tabpanel" class="tab-content p-10">
        <Accordion
          data={energy_consumption}
        ></Accordion>
      </div>

      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Energy Production" />
      <div role="tabpanel" class="tab-content p-10">
        <Accordion
          data={energy_production}
        ></Accordion>
      </div>

      <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Political & Governance" />
      <div role="tabpanel" class="tab-content p-10">
        <Accordion
          data={political_governance}
        ></Accordion>
      </div>
    </div>
  </div>


  
</div>

