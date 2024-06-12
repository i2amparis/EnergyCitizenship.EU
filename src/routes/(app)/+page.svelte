<script>
  import ModuleCard from "$lib/components/ModuleCard.svelte";
  
  import { module_cards } from "$lib/home-data"
  import { home_hero } from "$lib/home-data"

  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

    const heroImg = 'https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    //Carousel Logic
    // const carouselPhotos = [
    //   'https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1473073899705-e7b1055a7419?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    // ];

    // let i = 0;
    // function next() {
    //   i = (i+1) % carouselPhotos.length;
    // }

    // let timer;
    // onMount(() => {
    //   let timer = setInterval(next, 15000);
    // });
    // onDestroy(() => {
    //   clearInterval(timer);
    // });

    // $: src = carouselPhotos[i];


</script>
<!-- <div class="absolute top-0 z-[-2] w-full h-full bg-white-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(120,119,198,0))]"></div> -->
<!-- <div class="absolute -z-10 h-full w-full bg-inherit bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-40 blur-[100px]"></div></div> -->


<div class="relative overflow-hidden min-h-screen">
  <div aria-hidden="true" class="absolute inset-0">
    <div class="absolute inset-0 mx-auto  overflow-hidden">
      <!-- {#key src}
        <img 
          transition:fade={{ delay:500, duration:800, easing:cubicInOut }}  
          src="{src}" alt="Carousel" class=" h-full sm:h-screen w-full object-cover object-center">
      {/key} -->
      <img src="{heroImg}" alt="Carousel" class=" h-full sm:h-screen w-full object-cover object-center">
    </div>
    <!-- <div class="absolute inset-0 bg-white bg-opacity-75"></div> -->
    <div class="absolute inset-0 bg-gradient-to-t from-white via-gray-200 dark:from-gray-900 dark:via-gray-100"></div>
  </div>

  <section class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{home_hero.title}</h2>
      <div class="prose mx-auto mt-4 max-w-3xl text-xl text-gray-600">
        <p>Energy citizenship is a term used by activists, academics, and increasingly, policymakers to conceptualise the potential roles that citizens could (or should) play within the energy system. 
          </p>
        <p>
          This website collects research results from four Research and Innovation projects on energy citizenship funded by the Horizon 2020 programme of the European Union.
          Results have been curated into four pathways for different audiences which are presented below.
        </p>
        <p>Explore and let us know your feedback!</p>
      </div>
      
      <!-- <a href="#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto">Get access to our one-time sale</a> -->
    </div>
  </section>

  <section class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900"><span>Pathways to explore :</span></h2>

      <div class="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          {#each module_cards as card_data}
          <ModuleCard
              data={card_data}>
          </ModuleCard>
          {/each}
      </div>

    </div>
  </section>


</div>
