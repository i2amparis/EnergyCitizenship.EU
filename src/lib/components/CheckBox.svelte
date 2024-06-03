<script>
    export let selection = [];
    // export let category;
    // export let i;
    export let data;

    import Energy from '$lib/components/svgs/EnergyComSVG.svelte'
  </script>
  
  
  {#each data as category}
    <!-- component -->
    <div class='max-w-md mx-auto'>
            <div class="relative flex items-start py-4 ml-2">
    
                <input 
                id="{category}"
                type="checkbox" 
                class="hidden peer" 
                value={category}
                bind:group={selection} 
                >
    
                <label for="{category}" class="inline-flex items-start justify-between min-w-full p-2 font-medium tracking-tight border rounded-md cursor-pointer bg-blend-darken text-brand-black border-primary peer-checked:border-primary-focus peer-checked:bg-primary peer-checked:text-white peer-checked:font-semibold peer-checked:underline peer-checked:decoration-brand-dark decoration-1">
                    <div class="flex items-start justify-center w-full">
                        <div class="text-sm text-brand-black">
                        {category}
                        </div>
                    </div>
                </label>
            </div>
    </div>
  {/each}