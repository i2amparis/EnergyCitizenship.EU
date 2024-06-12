
<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import { module_cards } from "$lib/home-data"

    let src = "https://images.unsplash.com/photo-1549443442-e981d27df640?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

</script>

<div class="relative overflow-hidden min-h-screen">
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 mx-auto  overflow-hidden">
          <img src="{src}" alt="image" class=" h-screen w-full object-cover object-center">
      </div>
      <!-- <div class="absolute inset-0 bg-white bg-opacity-75"></div> -->
      <div class="absolute inset-0 bg-gradient-to-t from-white via-gray-200 dark:from-gray-900 dark:via-gray-100"></div>
    </div>

    <section class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900"><span class="has-callout">Resources</span></h2>
    
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
