<script>
  import { fly } from "svelte/transition";
  import Filters from "./filters.svelte";
  import Quotes from "./quotes.svelte";

  import { hasQuotes } from "$lib/quotes-data";
  
  import { getTechnologiesFilteredData } from "$lib/filters-data.js";
  import { getChallengesFilteredData } from "$lib/filters-data.js";
  import { getActivitiesFilteredData } from "$lib/filters-data.js";
  import { getGoalsFilteredData } from "$lib/filters-data.js";

  import { DataRetriever } from "$lib/data-retriever.js";
  import { ENCDataRetriever } from "$lib/data_handler/fetch-community-data.js"

  

  import Device from "svelte-device-info";


  export let show = false;
  export let country = "";

  let selection = {};
  let data = new DataRetriever();
  let ENC_data = new ENCDataRetriever();

  // console.log(data)
  // console.log(ENC_data)
  // console.log(ENC_data.getSubsetBasedOnCountry("Greece"))

  let filtered_data;
  let show_filters = false;
  let show_quotes = false;

  $: {
    filtered_data = data.getJsonSubsetBasedOnCountry(country);

    if (selection["Technologies"] && selection["Technologies"].length > 0) {
      filtered_data = getTechnologiesFilteredData(filtered_data, selection);
    }
    if (selection["Challenges"] && selection["Challenges"].length > 0) {
      filtered_data = getChallengesFilteredData(
        filtered_data,
        selection["Challenges"]
      );
    }
    if (selection["Activities"] && selection["Activities"].length > 0) {
      filtered_data = getActivitiesFilteredData(
        filtered_data,
        selection["Activities"]
      );
    }
    if (selection["Goals"] && selection["Goals"].length > 0) {
      filtered_data = getGoalsFilteredData(filtered_data, selection["Goals"]);
    }
  }

  

  // $: if (show_filters) {
  //   show_quotes = false;
  // }

  $: if (show_quotes) {
    show_filters = false;
  }

  function toggleSidebar() {
    show = !show;
    if (!show) {
      show_filters = false;
      show_quotes = false;
    }
  }

</script>



{#if show}
  <div
    data-theme="emerald"
    class="fixed-aside !overflow-hidden  !bg-white"
    transition:fly={{ x: 250, opacity: 1 }}
  >
    <button
      on:click={toggleSidebar}
      class="btn btn-md btn-circle absolute right-5 top-5"
      >✕
    </button>

    <div class="flex flex-col md:flex-row ">
      <div class="shrink">
        <div class=" w-fit sm:w-96 summary">
          <div class="card-body">
            <h2 class="card-title">Energy Initiatives</h2>
            <p class="italic text-base">{country}</p>

            {#if !Device.isMobile && !Device.isPhone && !Device.isTablet}
              <div class="card-actions mt-4 sm:justify-end">
                <label
                  class="swap swap-rotate text-base p-1 border-dashed border-2 rounded-lg hover:bg-slate-400"
                >
                  <!-- this hidden checkbox controls the state -->
                  <input type="checkbox" bind:checked={show_filters} />

                  <div class="swap-on flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                      />
                    </svg>
                    Close Filters
                  </div>
                  <div class="swap-off flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                      />
                    </svg>
                    Open Filters
                  </div>
                </label>



                <!--  -->
                {#if hasQuotes(country)}
                <label
                  class="swap swap-rotate text-base p-1 border-dashed border-2 rounded-lg hover:bg-slate-400"
                >
                  <!-- this hidden checkbox controls the state -->
                  <input type="checkbox" bind:checked={show_quotes} />

                  <div class="swap-on flex items-center">
                    <svg viewBox="0 0 24 18" aria-hidden="true" class="w-8 h-8 scale-75 rotate-180 text-gray-600">
                      <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                    </svg>
                    Close Quotes
                  </div>
                  <div class="swap-off flex items-center">
                    <svg viewBox="0 0 24 18" aria-hidden="true" class="w-8 h-8 scale-75 text-gray-600">
                      <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                    </svg>
                    Open Quotes
                  </div>
                </label>
                {/if}


              </div>
            {/if}
            {#if Device.isMobile || Device.isPhone || Device.isTablet}
            <div class="card-actions mt-2">
              <button class="btn" onclick="my_modal_5.showModal()"
                > 
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-8 h-8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                      />
                    </svg>
                Filters</button
              >

              {#if hasQuotes(country)}
                <button class="btn" onclick="my_modal_6.showModal()"
                  > 
                  <svg viewBox="0 0 24 18" aria-hidden="true" class="w-8 h-8 scale-75 text-gray-600">
                    <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
                  </svg>
                  Quotes</button
                >
              {/if}



              <dialog
                id="my_modal_5"
                class="modal modal-bottom sm:modal-middle"
              >
                <div class=" modal-box ">
                  <Filters {data} bind:selection></Filters>

                  <div class="modal-action">
                    <form method="dialog">
                      <button class="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>


              {#if hasQuotes(country)}
                <dialog
                  id="my_modal_6"
                  class="modal modal-bottom sm:modal-middle"
                >
                  <div class=" modal-box ">
                    <Quotes {country}></Quotes>

                    <div class="modal-action">
                      <form method="dialog">
                        <button class="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
                {/if}
            </div>
            {/if}
          </div>
        </div>

        <div
          id={filtered_data.length > 5 && !Device.isMobile && !Device.isPhone
            ? "list-view"
            : ""}
          class=" overflow-x-hidden overflow-y-auto max-h-[26rem] sm:max-h-[40rem] md:max-h-[55rem]"
        >
          <ul>
            {#each filtered_data as community}
              <li>
                <div class="card w-fit sm:w-96 mt-1">
                  <div class="card-body">
                    <h2 class="card-title">
                      {community["Name"]}
                    </h2>
                    <p>{community["Short description"]}</p>
                    <div class="card-actions justify-end mt-5">
                      {#if typeof community["Technologies"] === "string" && community["Technologies"] != ""}
                        {#each community["Technologies"].split(",") as tech}
                          <div class="badge badge-outline">{tech}</div>
                        {/each}
                      {/if}
                    </div>
                    <a
                      class="link link-info mt-2 flex items-center"
                      href={`/interactive_map/${community["id"]}`}
                      >Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </div>

        <!-- <div class="card-actions justify-center items-center mt-10">
          <button class="btn btn-primary">See all examples</button>
        </div> -->
      </div>

      {#if show_filters}
        <div
          class="md:relative md:ml-10 sm:ml-12 md:mt-20 md:bg-inherit md:w-auto bg-white w-80 sm:w-96 mt-36 ml-5 absolute p-5 border-x-2 max-w-xl"
          transition:fly={{ x: 250, opacity: 1 }}
        >
          <Filters {data} bind:selection></Filters>
        </div>
      {/if}
      {#if show_quotes}
        <div
          class="md:relative md:ml-10 sm:ml-12 md:mt-20 md:bg-inherit md:w-auto bg-white w-80 sm:w-96 mt-36 ml-5 absolute p-5 border-x-2 max-w-xl"
          transition:fly={{ x: 250, opacity: 1 }}
        >
          <Quotes {country}></Quotes>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .fixed-aside {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: auto;
    max-width: 1000px;
    padding: 24px;
    border: solid 1px #dadada;
    box-shadow: -2px 13px 20px 0 #b4b4b4;
    z-index: 0;
    box-sizing: border-box;
    overflow-y: auto;
  }
  @media (max-width: 500px) {
    .fixed-aside {
      padding: 2px;
    }
  }

  @media (max-width: 1100px) {
    .fixed-aside {
      width: 100%;
      max-width: none;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      overflow-y: auto;
    }
  }

  .summary {
    padding-bottom: 4px;
    border-bottom: 1px solid #e5e5e5;
  }

  @supports (animation-timeline: view()) {
    @keyframes fade-in-on-enter--fade-out-on-exit {
      entry 0% {
        opacity: 0;
        transform: translateY(100%);
      }
      entry 100% {
        opacity: 1;
        transform: translateY(0);
      }
      exit 0% {
        opacity: 1;
        transform: translateY(0);
      }
      exit 100% {
        opacity: 0;
        transform: translateY(-100%);
      }
    }

    #list-view > ul > li {
      animation: linear fade-in-on-enter--fade-out-on-exit;
      animation-timeline: view();
    }
  }
</style>
