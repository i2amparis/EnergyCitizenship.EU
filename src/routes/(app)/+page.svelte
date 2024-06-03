<script>
  import BoilerplateCards from "$lib/components/BoilerplateCards.svelte";
  import gardenerimg from "$lib/assets/gardener.png"
  import ModuleCard from "$lib/components/ModuleCard.svelte";

  import { home_cards } from "$lib/home-data"
</script>
<!-- <div class="absolute top-0 z-[-2] w-full h-full bg-white-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(120,119,198,0))]"></div> -->


<div class="absolute -z-10 h-full w-full bg-inherit bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-40 blur-[100px]"></div></div>


<div class="max-w-7xl mx-auto min-h-screen">
  
  <section class="container mx-auto px-8 py-8 lg:py-20">
    <div class="hero">
      <div class="hero-content flex-col lg:flex-row-reverse">
       
        <div class="sm:max-w-sm ">
          <img src="{gardenerimg}" alt="gardener" class="rounded-3xl" />
        </div>
        
        <div>
          <h2 class="antialiased tracking-normal font-sans text-3xl font-bold leading-[1.3] text-blue-gray-900 lg:text-5xl">How to involve citizens in the energy transition?</h2>
          <p class="antialiased font-sans text-xl font-normal leading-relaxed text-inherit mt-2 !text-gray-500 ">ENCLUDE is a Horizon 2020 EU project that aims to help the EU to achieve a just and inclusive decarbonisation by sharing and co-creating new knowledge and practices that maximise the number and diversity of citizens who are willing and able to contribute to the energy transition.</p>
        </div>

      </div>
    </div>

    <!-- <BoilerplateCards></BoilerplateCards> -->
    <div class="flex flex-wrap justify-center mt-10">
      {#each home_cards as card_data}
        <ModuleCard
          data={card_data}
          >
        </ModuleCard>
      {/each}
    </div>


  </section>
</div>



