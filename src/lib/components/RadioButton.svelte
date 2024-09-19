<script>
    import {backgroundColor} from '$lib/assets/transitions.js'

    export let selected = 'Collective Energy Initiative (CEI) Percentage growth | Average';
  

    const options = [
      { id: 'Collective Energy Initiative (CEI) Percentage growth | Min', label: 'Min' },
      { id: 'Collective Energy Initiative (CEI) Percentage growth | Average', label: 'Average' },
      { id: 'Collective Energy Initiative (CEI) Percentage growth | Max', label: 'Max' },
    ];

    function selectOption(optionId) {
        selected = optionId;
    }
  </script>
  
  <div class="w-full max-w-2xl mx-auto">
    <label class="text-muted" for="variable"> 
      <!-- Check Variable  -->
    </label>

    <div class="flex flex-auto justify-evenly border rounded-md w-full">
      {#each options as option}
        <button
            class={` border-none px-2 py-1 rounded-md w-full transition-colors duration-300 ease-in-out ${
                selected === option.id ? 'bg-[#6495ed] text-white' : ''
                }`}
            on:click={() => selectOption(option.id)}
        >
            <input
                type="radio"
                class="hidden"
                id={option.id}
                name="variable"
                checked={selected === option.id}
            > 
            <label class="cursor-pointer" for={option.id}>{option.label}</label> 
        </button>
        
      {/each}
    </div>
  </div>
  