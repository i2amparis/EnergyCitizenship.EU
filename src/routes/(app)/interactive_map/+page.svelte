<script>
  import { PUBLIC_MAPBOX_TOKEN } from "$env/static/public";
  import { Map, controls } from "$lib/components.js";
  import ENC_ENCLUDE from "$lib/components/_EnergyCommunitiesClusters.svelte";
  import IntroTour from "$lib/components/IntroTour.svelte";
  
  import { mapTipVisible } from "$lib/stores";
  const { NavigationControl } = controls;

  let center = { lat: 47.90448841507046, lng: 14.619435626967515 };
  let marker = center;
  let zoom = 3.8;
  let mapComponent;

  function recentre({ detail }) {
    center = detail.center;
  }

  function drag({ detail }) {
    marker = detail.center;
  }
</script>

{#if $mapTipVisible}
  <IntroTour></IntroTour>
  <div class="intro-step absolute origin-center"></div>
{/if}


<div class="section-txt" id="map">


  <!-- {#if $mapTipVisible}
    <div class="flex flex-row justify-evenly">
      <p class="ml-2 sm:ml-4 mr-2 sm:mr-4">
        Click on each highlighted country to discover the collective energy
        initiatives that we have surveyed in ENCLUDE. <a
          href="https://encludeproject.eu/form/enclude-platform-survey"
          style="color:blue"><u>Provide feedback</u></a
        >
      </p>
      <button
        on:click={() => ($mapTipVisible = false)}
        class="btn btn-xs btn-square m-1">✕</button
      >
    </div>
  {/if} -->

  
  <div class="map-container">
    <div class="map-wrap">
      <Map
        bind:this={mapComponent}
        accessToken={PUBLIC_MAPBOX_TOKEN}
        on:recentre={recentre}
        on:drag={drag}
        {center}
        bind:zoom
      >
        <ENC_ENCLUDE />
        <NavigationControl />
      </Map>
    </div>
  </div>
</div>

<style>
  .map-container {
    width: 100%;
    height: 88.5vh;

    display: flex;
    align-items: stretch;
    position: relative;
  }
  .map-wrap {
    flex: 1;
    border-left: 1px solid #dedede;
    display: flex;
    flex-direction: column;
  }
</style>
