
<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import { impact_cards } from "$lib/impact-data"
    import { resources_cards } from "$lib/resources-data"
    
    let selectedBadge = 'All';

    function selectBadge(badge) {
      selectedBadge = badge;
    }
</script>

<div class="relative overflow-hidden min-h-screen">
    <div aria-hidden="true" class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-t from-white via-gray-200 dark:from-gray-700 dark:via-slate-800"></div>
    </div>
    
    <section class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 ">
    <div class="mx-auto max-w-2xl lg:max-w-none mt-6 mb-4">
        <div class="mt-6 mb-4">
          <h2 id="testimonial-heading" class="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200"><span class="has-callout">Impacts</span></h2>
          <p class="text-l tracking-tight text-gray-900 dark:text-slate-300">An evaluation of the future impacts of energy citizenship on the energy transition</p>
          <div class="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 ">
              {#each impact_cards as card_data}
              <ModuleCard
                  data={card_data}>
              </ModuleCard>
              {/each}
          </div>
        </div>
      </div>

    </section>

</div>
