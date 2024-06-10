<script>
  import BoilerplateCards from "$lib/components/BoilerplateCards.svelte";
  import gardenerimg from "$lib/assets/gardener.png"
  import hero_img from "$lib/assets/grass_1280.jpg"
  import ModuleCard from "$lib/components/ModuleCard.svelte";
  
  import { test_cards } from "$lib/home-data"
  import { home_cards } from "$lib/home-data"
  import { home_hero } from "$lib/home-data"

  import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";


  const carouselPhotos = [
    'https://images.unsplash.com/photo-1451847251646-8a6c0dd1510c?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1473073899705-e7b1055a7419?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  let i = 0;
  function next() {
    i = (i+1) % carouselPhotos.length;
  }

  let timer;
  onMount(() => {
    let timer = setInterval(next, 15000);
  });
  onDestroy(() => {
    clearInterval(timer);
  });

  $: src = carouselPhotos[i];


</script>
<!-- <div class="absolute top-0 z-[-2] w-full h-full bg-white-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(120,119,198,0))]"></div> -->


<!-- <div class="absolute -z-10 h-full w-full bg-inherit bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-40 blur-[100px]"></div></div> -->


<!-- <div class="max-w-7xl mx-auto min-h-screen">
  
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

    <div class="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
      {#each home_cards as card_data}
        <BoilerplateCards
          data={card_data}>
        </BoilerplateCards>
      {/each}
    </div>


  </section>
</div> -->



<div class="relative overflow-hidden min-h-screen">
  <div aria-hidden="true" class="absolute inset-0">
    <div class="absolute inset-0 mx-auto  overflow-hidden">
      {#key src}
        <img 
          transition:fade={{ delay:500, duration:800, easing:cubicInOut }}  
          src="{src}" alt="Carousel" class="h-full w-full object-cover object-center">
      {/key}
    </div>
    <!-- <div class="absolute inset-0 bg-white bg-opacity-75"></div> -->
    <div class="absolute inset-0 bg-gradient-to-t from-white via-gray-200 dark:from-gray-900 dark:via-gray-100"></div>
  </div>

  <section aria-labelledby="sale-heading" class="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 id="sale-heading" class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">{home_hero.title}</h2>
      <p class="mx-auto mt-4 max-w-xl text-xl text-gray-600">{home_hero.desc}</p>
      <!-- <a href="#" class="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto">Get access to our one-time sale</a> -->
    </div>
  </section>

  <section aria-labelledby="testimonial-heading" class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900"><span class="has-callout">Features to explore</span></h2>

      <div class="mt-10 grid grid-cols-1 gap-2 lg:grid-cols-2 ">
          {#each test_cards as card_data}
          <ModuleCard
              data={card_data}>
          </ModuleCard>
          {/each}
      </div>


      <!-- <div class="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        <blockquote class="sm:flex lg:block">
          <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Shehab , England</cite>
          </div>
        </blockquote>
        <blockquote class="sm:flex lg:block">
          <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Najib, malaysia</cite>
          </div>
        </blockquote>
        <blockquote class="sm:flex lg:block">
          <svg width="24" height="18" viewBox="0 0 24 18" aria-hidden="true" class="flex-shrink-0 text-gray-300">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
          </svg>
          <div class="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
            <p class="text-lg text-gray-600">Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.</p>
            <cite class="mt-4 block font-semibold not-italic text-gray-900">Yousef, New York</cite>
          </div>
        </blockquote>
      </div> -->


    </div>
  </section>



</div>



<style>

.has-callout mark {
    background-color: inherit;
    color: inherit;
    position: relative;
}

.has-callout mark:after {
  content: "";
  position: absolute;
  bottom: -0.125rem;
  left: -0.5rem;
  right: -0.5rem;
  height: 0.75rem;
  z-index: -1;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>