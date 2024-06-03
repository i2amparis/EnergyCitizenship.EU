<script>
  export let selection = [];
	export let category;
  export let i;
</script>


<div class='max-w-md mx-auto'>
      <div class="relative flex items-start py-4 ml-2">

          <input 
            id="{i}"
            type="checkbox" 
            class="hidden peer" 
            value={category}
            bind:group={selection} 
            >

          <label for="{i}" class="inline-flex items-center justify-between w-auto p-2 font-medium tracking-tight border rounded-lg cursor-pointer bg-brand-light text-brand-black border-primary peer-checked:border-primary-focus peer-checked:bg-primary peer-checked:text-white peer-checked:font-semibold peer-checked:underline peer-checked:decoration-brand-dark decoration-2">
              <div class="flex items-center justify-center w-full">
                  <div class="text-sm text-brand-black">
                    {category}
                  </div>
              </div>
          </label>
      </div>
</div>