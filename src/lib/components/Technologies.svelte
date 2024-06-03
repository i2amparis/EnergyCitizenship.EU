<script>

    import { getTechnologies } from '$lib/filters-data.js'
    import { checked } from '$lib/checked.js'

    export let data;
    export let selection = []
    export let checkbox = true;

    $: checkbox_class = checkbox ? 'cursor-pointer ' : "";


    let currentTechnologies = getTechnologies(data)

</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-5" >

    {#each currentTechnologies as tech}
        <label for="{tech.name}"  class="{checkbox_class}">
        {#if checkbox}
            <input 
            id="{tech.name}"
            type="checkbox" 
            class="hidden peer"
            value={tech.name}
            bind:group={selection} 
            use:checked
            >
        {/if}
        
            <div class="lg:flex flex-no-wrap justify-start content-around {tech.disable ? "opacity-40" : "opacity-100"}">
                <img id="{tech.name}_img" class="mask mask-squircle {checkbox ? " sm:hover:bg-slate-400" : ""} w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-slate-200" src={tech.src} alt={tech.name} />
                <div class="p-1 text-sm mt-auto mb-auto ml-auto mr-auto lg:ml-2">{tech.name}</div> 
            </div>
        </label>
    {/each}
    
</div>


<style>

:global(.checked) img {
    
    /* background-color: hsl(var(--p) / var(--tw-bg-opacity)); */
    background-color: rgb(148 163 184 / var(--tw-bg-opacity))
}
</style>