

<script>

    import MultiSelect from 'svelte-multiselect';
    import Technologies from './Technologies.svelte';
    import { activities } from '$lib/filters-data.js'
    import { goals } from '$lib/filters-data.js'

    export let data;
    
    let challenges_options = data.getJsonChallenges_filter();
    let impacts_options = data.getJsonImpacts_filter();
    let activities_options = activities.map(x => x["short"]);
    let goals_options = goals.map(x => x["short"]);
    let challenges_value=[];
    let impacts_value=[];
    let activities_value=[];
    let goals_value=[];
    let challenges_searchText = '';
    let impacts_searchText = '';
    let activities_searchText = '';
    let goals_searchText = '';
    let loading = false;

    $: if (challenges_searchText) {
        loading = true;
        setTimeout(async () => {
            loading = false;
        }, 1000);
    }

    $: if (impacts_searchText) {
        loading = true;
        setTimeout(async () => {
            loading = false;
        }, 1000);
    }
    $: if (activities_searchText) {
        loading = true;
        setTimeout(async () => {
            loading = false;
        }, 1000);
    }

    $: if (goals_searchText) {
        loading = true;
        setTimeout(async () => {
            loading = false;
        }, 1000);
    }


	export let selection = {};

    let selection_technologies = [];

    $: selection = {
        "Technologies":selection_technologies,
        "Challenges":challenges_value,
        "Activities":activities_value,
        "Goals":goals_value,
    };
    

    function clearAllFilters() {

        selection_technologies.forEach(x => {
            document.getElementById(x).parentNode.classList.remove('checked');
        })

		selection_technologies = [];
        challenges_value = [];
        impacts_value = [];
        activities_value = [] ;
        goals_value = [];
	}

</script>


<div class="text-2xl  mb-5 flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
    </svg>
    Filters


    <button on:click={clearAllFilters} class="badge border-red-800 border-dashed gap-1 ml-6 sm:flex-wrap hover:bg-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12"></path></svg>
        <p>clear all filters</p>
    </button>
</div>


<ul class="">
    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      <div class="summary head3 mt-5 mb-5">
        Activities
    </div>
    <MultiSelect
      id="Activities"
      bind:options = {activities_options}
      bind:value = {activities_value}
      bind:searchText = {activities_searchText}
      placeholder="Choose Activities"
      {loading}
    />
    </li>
    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
        <div class="summary head3 mt-5 mb-5">
            Technologies
        </div>

        <div class=""> 
            <Technologies bind:selection={selection_technologies} data="all" checkbox={true}/>
        </div>
        
    </li>
    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      <div class="summary head3 pt-2 mb-5">
            Challenges
        </div>
        <MultiSelect
            id="Challenges"
            bind:options = {challenges_options}
            bind:value = {challenges_value}
            bind:searchText = {challenges_searchText}
            placeholder="Choose Challenges"
            {loading}
        />
    </li>
    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
      <div class="summary head3 pt-2 mb-5">
        Impacts
    </div>
    <MultiSelect
      id="Impacts"
      bind:options = {impacts_options}
      bind:value = {impacts_value}
      bind:searchText = {impacts_searchText}
      placeholder="Choose Impacts"
      {loading}
    />
    </li>
    <li class="w-full py-4">
        <div class="summary head3 pt-2 mb-5">
            Goals
        </div>
        <MultiSelect
          id="Goals"
          bind:options = {goals_options}
          bind:value = {goals_value}
          bind:searchText = {goals_searchText}
          placeholder="Choose Goals"
          {loading}
        />
    </li>
  </ul>



<style>

.summary{
    padding-bottom: 4px;
    border-bottom: 1px solid #E5E5E5;
}

.head3 {
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    margin: 0;
}

</style>


