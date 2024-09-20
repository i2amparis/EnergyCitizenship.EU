<script>
    import { scaleBand, scaleOrdinal, scaleTime } from 'd3-scale';
    import { extent} from 'd3-array';
    import { getFilteredData, groupsResultDataBy, colorGroups, flattenResultData, groupYearsInTrashResultData} from '$lib/chart-data'


    import {
    Axis,
    Bar,
    Bars,
    Chart,
    Svg,
    createStackData,
    Legend
  } from 'layerchart';


  export let data;
  export let groupKeys;
  export let groupBy;
  export let xkey;

  const flatKeys = Object.assign({}, ...groupKeys);
  var unitName = flatKeys['Unit'] == 'ktoe/yr' ? 'Energy mix & savings (ktoe)' : '';

  var groupedYears = groupYearsInTrashResultData(data);
  let result = getFilteredData(groupedYears, groupKeys);

  let multiSeriesFlatData = flattenResultData(result)
  const groupedData = createStackData(multiSeriesFlatData, { xKey: xkey, groupBy: groupBy })

  const colorKeys = [...new Set(multiSeriesFlatData.map((x) => x.year))];
  const keyColors = ['#1b9e77','#d95f02','#7570b3','#e7298a','#66a61e','#e6ab02','#a6761d','#666666']

</script>


<div class=" font-bold mt-6">{flatKeys['Scenario']}</div>
<div class="h-[300px] xl:h-[500px] p-4 border rounded">
    <Chart
      data={groupedData}
      flatData={multiSeriesFlatData}
      x={xkey}
      xScale={scaleBand().paddingInner(0.4).paddingOuter(0.1)}
      y="values"
      yDomain={extent(groupedData.flatMap((d) => d.values))}
      yNice={6}
      r={(d) => d}
      rScale={scaleOrdinal()}
      rDomain={colorKeys}
      rRange={keyColors}
      padding={{ left: 46, bottom: 24 }}
    >
      <Svg>
        <Axis placement="left" grid rule />
        <Axis placement="bottom" format={(d) => d.split('|').slice(-1).pop()} rule />
        <Axis
            label={unitName}
            placement="left"
            labelPlacement="middle"
            rule
        />
        <Bars groupBy={groupBy} radius={4} strokeWidth={1} />
      </Svg>
    </Chart>
  </div>

  <Legend
    scale={scaleOrdinal(
      colorKeys,
      keyColors,
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