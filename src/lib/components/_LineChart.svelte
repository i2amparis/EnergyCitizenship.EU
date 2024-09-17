<script>

    import { scaleBand, scaleOrdinal, scalePoint, scaleSequential, scaleTime } from 'd3-scale';
    import {flattenResultData, groupResultDataBy, colorGroups, dummy} from '$lib/chart-data'


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

    let dateSeriesData = flattenResultData(dummy);
    // console.log(dateSeriesData)

</script>



<div class="h-[300px] p-4 border rounded">
    <Chart
      data={dateSeriesData}
      x="year"
      xScale={scalePoint()}
      y="value"
      yDomain={[0, null]}
      yNice
      padding={{ left: 16, bottom: 24 }}
      tooltip={{ mode: "bisect-x" }}
    >
      <Svg>
        <Axis placement="left" grid rule />
        <Axis
          placement="bottom"
          format={(d) => d}
          rule
        />
        <Spline class="stroke-2 stroke-primary" />
        <Highlight points lines />
      </Svg>
      <Tooltip header={(data) => data.year} let:data>
        <TooltipItem label="value" value={data.value} />
      </Tooltip>
    </Chart>
  </div>

