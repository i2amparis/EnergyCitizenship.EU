<script>
    
    import { scaleBand, scaleOrdinal, scalePoint, scaleSequential, scaleTime } from 'd3-scale';
    import {flattenResultData, getFilteredData, groupResultDataBy, groupsResultDataBy, colorGroups, groupYearsInResultData} from '$lib/chart-data'
    import ENC_results from '$lib/assets/ENCLUDE_Models_Results.json'
  
  
  
    import {
      Axis,
      Chart,
      Highlight,
      Labels,
      Legend,
      LinearGradient,
      Spline,
      Svg,
      Text,
      Tooltip,
      TooltipItem,
      pivotLonger,
      } from 'layerchart';
  
    // export let data;
    // export let groupBy;

    export let groupKeys;
    export let highlight = true;
    export let groupBy = 'scenario';

    var unitName = groupKeys[2] == 'Percentage growth from initial population' 
    ? 'Percentage growth (%)'
    : 'CO2 emissions (tons)'

    var groupedYears = groupYearsInResultData(ENC_results);
    let result = getFilteredData(groupedYears, 
        ...groupKeys
    );

    let multiSeriesFlatData = flattenResultData(result);
    let dataByGroup = groupsResultDataBy(multiSeriesFlatData, groupBy);
    const groupColors = colorGroups(dataByGroup);

  </script>
  
  <div class=" font-bold mt-6">{groupKeys[0]}</div>
  <div class="h-[300px] xl:h-[500px] p-4 border rounded">
    <Chart
        bind:data={multiSeriesFlatData}
        x="year"
        xScale={scalePoint()}
        y="value"
        yDomain={[0, null]}
        yNice
        r={groupBy}
        rScale={scaleOrdinal()}
        rDomain={Object.keys(groupColors)}
        rRange={Object.values(groupColors)}
        padding={{  left: 35, bottom: 12, right: 12 }}
        tooltip={{ mode: 'voronoi' }}
        let:rScale
        let:tooltip
    >
        <Svg>
            <Axis placement="left" grid rule />
            
            <Axis
                placement="bottom"
                format={(d) => d}
                rule
            />
            <Axis
                label={unitName}
                placement="left"
                labelPlacement="middle"
                rule
            />
            
            {#each dataByGroup as [group, data]}
                <!-- {console.log("dataByGroup", data)} -->
                {@const color = 
                tooltip.data == null || tooltip.data[groupBy] === group
                ? rScale(group)
                : highlight == false 
                ? rScale(group)
                : "oklch(var(--bc) / .2)"}
                <Spline {data} class="stroke-2" stroke={color}>
                    <svelte:fragment slot="end">
                        <circle r={4} fill={color} />
                        <!-- <Text
                            value={group}
                            verticalAnchor="middle"
                            dx={6}
                            dy={-2}
                            class="text-xs"
                            fill={color}
                        /> -->
                    </svelte:fragment>
                </Spline>
            {/each}
            <Highlight points lines />
        </Svg>
        <Tooltip 
          y="data"
          x="data"
          header={(data) => data.year} 
          let:data>
            <TooltipItem label={data[groupBy]} value={ groupKeys[2] == 'Percentage growth from initial population' ? data.value+'%' : data.value.toFixed(2)} />
        </Tooltip>
    </Chart>
  </div>
  
  
  <Legend
    scale={scaleOrdinal(
      Object.keys(groupColors),
      Object.values(groupColors),
    )}
    title={groupBy.toUpperCase()}
    class="p-2 mt-2"
    let:values
    let:scale
  >
    <div class="flex gap-4 mt-2">
      {#each values as value}
        <div class="flex gap-1">
          <div
            class="h-4 w-4 rounded-full"
            style:background-color={scale(value)}
          />
          <div class="text-xs sm:text-sm text-surface-content/90">{value}</div>
        </div>
      {/each}
    </div>
  </Legend>