import { group, rollup, groups } from 'd3-array';

export let dummy =[
    {
        "scenario": "Baseline",
        "variable": "Agricultural Demand",
        "region": "Africa_Eastern",
        "modelName": "GCAM-PR 5.3",
        "years": {
            "2005": 120.3595889,
            "2010": 140.635281,
            "2015": 147.2401618,
            "2020": 171.8995398,
            "2025": 195.4840158,
            "2030": 220.6420653,
            "2035": 245.9195812,
            "2040": 271.5985235,
            "2045": 297.3267113,
            "2050": 322.555043,
            "2055": 341.1419634,
            "2060": 358.2350354,
            "2065": 373.7963054,
            "2070": 387.8190858,
            "2075": 400.2521066,
            "2080": 410.9278573,
            "2085": 419.8681138,
            "2090": 427.0688298,
            "2095": 432.7137207,
            "2100": 436.9116278
        }
    },
    {
        "scenario": "CP_EI",
        "variable": "Agricultural Demand",
        "region": "Africa_Eastern",
        "modelName": "GCAM-PR 5.3",
        "years": {
            "2005": 120.3595889,
            "2010": 140.635281,
            "2015": 147.2401618,
            "2020": 171.906357,
            "2025": 195.48714,
            "2030": 220.6028289,
            "2035": 245.2947277,
            "2040": 270.9470761,
            "2045": 296.3192375,
            "2050": 320.2937024,
            "2055": 337.8123734,
            "2060": 353.4915017,
            "2065": 367.9145196,
            "2070": 380.3430776,
            "2075": 391.2313956,
            "2080": 400.1152601,
            "2085": 407.2972875,
            "2090": 412.522302,
            "2095": 415.9802859,
            "2100": 417.560521
        }
    },
    {
        "scenario": "NDC_EI",
        "variable": "Agricultural Demand",
        "region": "Africa_Eastern",
        "modelName": "GCAM-PR 5.3",
        "years": {
            "2005": 120.3595889,
            "2010": 140.635281,
            "2015": 147.2401618,
            "2020": 171.906357,
            "2025": 195.1816853,
            "2030": 219.7076131,
            "2035": 243.9396681,
            "2040": 266.5194051,
            "2045": 291.5210487,
            "2050": 315.3045525,
            "2055": 332.2385348,
            "2060": 347.4390833,
            "2065": 361.2131546,
            "2070": 373.0073776,
            "2075": 382.9917568,
            "2080": 391.0560785,
            "2085": 397.5252766,
            "2090": 402.5610065,
            "2095": 406.1901903,
            "2100": 408.6296347
        }
    }
]


export function groupYearsInResultData(data){
    return data.map(entry => ({
        Model: entry.Model,
        Scenario: entry.Scenario,
        Region: entry.Region,
        Variable: entry.Variable,
        Unit: entry.Unit,
        years: {
            "2025": entry["2025"],
            "2026": entry["2026"],
            "2027": entry["2027"],
            "2028": entry["2028"],
            "2029": entry["2029"],
            "2030": entry["2030"]
        }
    }));
}

// console.log(JSON.stringify(transformedData, null, 4));

export function groupResultDataBy(data, groupName){
    return group(data, d => d[groupName]);
}

export function groupsResultDataBy(data, groupName){
    return groups(data, d => d[groupName]);
}

function groupsResultDataByMultiple(data, groupKeys) {
    // Use D3's groups function, where we group by each key in groupKeys.
    return group(data, ...groupKeys.map(key => d => d[key]));
}

export function getFilteredData(data, region, variable, unit) {
    // First, group the data by the needed properties
    const groupedData = groupsResultDataByMultiple(data, ["Region", "Variable", "Unit"]);
    console.log(groupedData)

    const regionGroup = groupedData.get(region);
    if (!regionGroup) return null;

    const variableGroup = regionGroup.get(variable);
    if (!variableGroup) return null;

    const unitGroup = variableGroup.get(unit);
    return unitGroup || null;

}

export function flattenResultData(data) {
    return data.flatMap(d =>
      Object.keys(d.years).map(year => ({
        year: (new Date(year)).getFullYear(),
        scenario: d.Scenario,
        region: d.Region,
        unit: d.Unit,
        value: parseFloat(d.years[year]),
      }))
    );
  }

  export let colorPallete = [
    '#1f78b4',
    '#a6cee3',
    '#b2df8a',
    '#33a02c',
    '#fb9a99',
    '#e31a1c',
    '#fdbf6f',
    '#ff7f00',
    '#cab2d6',
    '#6a3d9a'
   ]
  
  
export function colorGroups(data){

    // let groupKeys = [...data.keys()];
    let groupKeys = [...data.map(x => x[0])];

    return groupKeys.reduce((acc, element, i) => {
        acc[element] = colorPallete[i];
        return acc;
    }, {});

}