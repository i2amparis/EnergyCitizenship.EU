<script lang="">
    import {  geoNaturalEarth1 } from 'd3-geo';
    import { feature } from 'topojson-client';
    // import data from "$lib/assets/countries.geojson.json";
  
    import { Canvas, Chart, GeoPath, GeoPoint, Svg, Text, Tooltip, TooltipItem } from 'layerchart';
    export let data;
    console.log(data.world.geojson)
    let capitals= [
  {
    "label": "Vienna",
    "latitude": 48.2092,
    "longitude": 16.3728
  },
  {
    "label": "Minsk",
    "latitude": 53.9678,
    "longitude": 27.5766
  },
  {
    "label": "Brussels",
    "latitude": 50.8371,
    "longitude": 4.3676
  },
  {
    "label": "Sarajevo",
    "latitude": 43.8608,
    "longitude": 18.4214
  },]


  const countries = feature(data.world.geojson, capitals);
  console.log(countries)
    let debugTooltip = false;
  </script>

<div class="h-[600px]">
    <Chart
      data={capitals}
      x="longitude"
      y="latitude"
      geo={{
        projection: geoNaturalEarth1,
        fitGeojson: countries,
      }}
      tooltip={{ mode: "voronoi", debug: debugTooltip }}
      let:tooltip
    >
      <Svg>
        <g class="states">
          {#each countries.features as feature}
            <GeoPath
              geojson={feature}
              class="fill-surface-content/10 stroke-surface-100 hover:fill-surface-content/20"
              {tooltip}
            />
          {/each}
        </g>
        <g class="points pointer-events-none">
          {#each capitals as capital}
            <GeoPoint
              lat={capital.latitude}
              long={capital.longitude}
              r="2"
              class="fill-white stroke-danger"
            />
  
            {#if tooltip.data}
              <GeoPoint
                lat={tooltip.data.latitude}
                long={tooltip.data.longitude}
                spring
              >
                <circle r="4" class="stroke-primary/50 fill-none" />
                <Text
                  y="-6"
                  value={tooltip.data.label}
                  textAnchor="middle"
                  class="text-[8px] stroke-surface-100 [stroke-width:2px]"
                />
              </GeoPoint>
            {/if}
          {/each}
        </g>
      </Svg>
  
      <!-- <Tooltip header={(d) => d.label} let:data>
          {console.log({ data })}
          <TooltipItem label="Latitude" value={data.latitude} format="decimal" />
          <TooltipItem label="Longitude" value={data.longitude} format="decimal" />
        </Tooltip> -->
    </Chart>
  </div>
  