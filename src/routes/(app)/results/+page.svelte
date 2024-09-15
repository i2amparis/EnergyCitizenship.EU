<script>
    import BoilerplateCards from "$lib/components/BoilerplateCards.svelte";

    import { results_cards } from "$lib/results-data";
    
</script>


<section class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300"><span>Results to explore :</span></h2>

      <div class="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          {#each results_cards as card_data}
            <BoilerplateCards data={card_data}></BoilerplateCards>
          {/each}
      </div>

    </div>
  </section>