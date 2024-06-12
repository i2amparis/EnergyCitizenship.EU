<script>
  import { getContext } from "svelte";
  import { contextKey } from "$lib/components.js";
  import ENC_GEO from "$lib/assets/20231027_ENC_Point.geojson.json";
  import ENC_POLY from "$lib/assets/20231027_ENC_Polygon.geojson.json";
  import DataSidebar from "./DataSidebar.svelte";

  const { getMap, getMapbox } = getContext(contextKey);
  const map = getMap();
  const mapbox = getMapbox();

  let hoveredPolygonId = null;
  let sidebar_show = false;

  let currentCountry = "";

  map.addSource("Communities", {
    type: "geojson",
    data: ENC_GEO,
    cluster: true,
    clusterMaxZoom: 80, // Max zoom to cluster points on
    clusterRadius: 30, // Radius of each cluster when clustering points (defaults to 50)
    clusterMinPoints: 1,
  });

  map.addSource("states", {
    type: "geojson",
    data: ENC_POLY,
  });

  map.addLayer({
    id: "state-fills",
    type: "fill",
    source: "states",
    layout: {},
    paint: {
      "fill-color": "#45B287",
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        1,
        0.2,
      ],
    },
  });

  map.addLayer({
    id: "state-borders",
    type: "line",
    source: "states",
    layout: {},
    paint: {
      "line-color": "#627BC1",
      "line-width": 0.2,
    },
  });

  

  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "Communities",
    paint: {
      "circle-color": "#7DCA7A",
      "circle-radius": 15,
      "circle-stroke-width": 0.5,
      "circle-opacity": 0.8,
      "circle-stroke-color": "#010",
    },
  });

  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "Communities",
    layout: {
      "text-field": [
        "to-string",
        ["coalesce", ["get", "point_count_abbreviated"], 1],
      ],
      "text-font": ["Sniglet Regular", "Arial Unicode MS Bold"],
      "text-size": 16,
    },
  });

  

  const popup = new mapboxgl.Popup({
    closeButton: false
  });

  // When the user moves their mouse over the state-fill layer, we'll update the
  // feature state for the feature under the mouse.
  map.on("mousemove", "state-fills", (e) => {
    map.getCanvas().style.cursor = 'pointer'
    if (e.features.length > 0) {

      if (hoveredPolygonId !== null) {
        map.setFeatureState(
          { source: "states", id: hoveredPolygonId },
          { hover: false }
        );
      }
      hoveredPolygonId = e.features[0].id;
      map.setFeatureState(
        { source: "states", id: hoveredPolygonId },
        { hover: true }
      );


    }
  });

  // When the mouse leaves the state-fill layer, update the feature state of the
  // previously hovered feature.
  map.on("mouseleave", "state-fills", () => {
    map.getCanvas().style.cursor = ''
    
    if (hoveredPolygonId !== null) {
      map.setFeatureState(
        { source: "states", id: hoveredPolygonId },
        { hover: false }
      );
    }
    hoveredPolygonId = null;
  });


  map.on('click', 'state-fills', function (e) {

    const features = map.queryRenderedFeatures(e.point);
    const displayProperties = [
        'properties',
    ];

    const displayFeatures = features.map((feat) => {
        displayProperties.forEach((prop) => {
            if(feat[prop].Country){           
              currentCountry = feat[prop].Country
            }
            
        });
    });

    sidebar_show = !sidebar_show
  });

  map.on("mouseenter", "clusters", (e) => {

    let country = ""
    let points = ""

    const features = map.queryRenderedFeatures(e.point);
    const displayProperties = [
        'properties',
    ];

      features.map((feat) => {
        displayProperties.forEach((prop) => {

          if(feat[prop].Country){
            country = feat[prop].Country

          }

          if (feat[prop].point_count_abbreviated){
            points = new String(feat[prop].point_count_abbreviated)

          }
            
            
        });
    });

    country = country == ""?"Cluster":country
    points = points == ""?"1":points
    let displayFeatures = "<h3>"+country+"</h3><h4>"+points+" Initiatives</h4>"

    // Copy coordinates array.
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
    
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    
    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(displayFeatures).addTo(map);

    
  });

  map.on("mouseleave", "clusters", (e) => {
    popup.remove();
  });


</script>

{#if sidebar_show}
  <DataSidebar bind:show={sidebar_show} country={currentCountry}></DataSidebar>
{/if}