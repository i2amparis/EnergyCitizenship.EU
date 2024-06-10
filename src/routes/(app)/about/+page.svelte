
<script>
  import Accordion from "$lib/components/Accordion.svelte"
  import { energy_access } from "$lib/about-data";
  import { energy_consumption } from "$lib/about-data";
  import { energy_production } from "$lib/about-data"; 
  import { political_governance } from "$lib/about-data";

  import { main_categories } from "$lib/about-data";

</script>

<!-- <div class="absolute z-[-2] h-full w-full bg-inherit bg-[radial-gradient(100%_50%_at_50%_0%,rgba(18,217,7,0.13)_0,rgba(18,217,7,0)_50%,rgba(18,217,7,0)_100%)]"></div> -->

<div class="container p-4 md:p-2 mt-6 md:mt-12 mx-auto flex flex-col xl:flex-row gap-4 mb-12">

  <div class="prose ">
      <h2 class="block antialiased tracking-normal font-sans text-3xl font-bold leading-[1.3] text-blue-gray-900 lg:text-5xl">Expressions of energy citizenship</h2>
      <p class="block antialiased font-sans text-md font-normal leading-relaxed text-inherit mt-2 w-full !text-gray-500">Energy citizenship is a term used by activists, academics, and increasingly, policymakers to conceptualise the potential roles that citizens could (or should) play in the energy system. This conceptualisation can be related to both rights and responsibilities that people have related to the energy system.</p> 
      <p class="block antialiased font-sans text-md font-normal leading-relaxed text-inherit mt-2 w-full !text-gray-500">Traditionally, citizens were assumed to be only passive consumers of the system but there are increasingly more modes of participation including in issues related to energy access and production but also in the political and governance aspects of energy. In each of this mode, ENCLUDE researchers have identified multiple expressions of energy citizenship.</p> 
  </div>

  <div class="md:flex mt-6 xl:mt-4">
      <ul class="flex-column space-y space-y-4 text-md font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          {#each main_categories as category}
              <li class=" min-w-fit">
                  <a href="#" class="inline-flex items-center px-4 py-3 hover:text-gray-900 bg-gray-50 hover:bg-gray-200 rounded-lg active w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" aria-current="page">
                      <img class="w-12 scale-50 min-[370px]:scale-75 sm:scale-90" src={category.imageUrl} alt='temp' />
                      {category.name}
                  </a>
              </li>
          {/each}
      </ul>
      <div class="ml-0 lg:ml-2 pl-0 lg:pl-6 pr-6 pb-6  text-medium  bg-gray-50 dark:text-gray-400 dark:bg-gray-800 rounded-lg ">
          <div class="p-6">
              <h3 class="text-lg font-bold"><strong>Energy Access</strong></h3>
              <p>blah blah </p>
          </div>
          
          <Accordion
              data={energy_access}
          ></Accordion>
      </div>
  </div>
</div>


