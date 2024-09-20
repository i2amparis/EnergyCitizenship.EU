import { group, rollup, groups } from 'd3-array';
// import ENC_results from '$lib/assets/ENCLUDE_Models_Results.json'



export function groupYearsInResultData(data){
    
    return data.map(entry => {
        
        const years = Object.keys(entry).reduce((acc, key) => {
            if (!isNaN(key) && Number(key) > 2000) {
                acc[key] = entry[key];
            }
            return acc;
        }, {});
    
        return {
            Model: entry.Model,
            Scenario: entry.Scenario,
            Region: entry.Region,
            Variable: entry.Variable,
            Unit: entry.Unit,
            years: years
        };
    });
}


export function groupResultDataBy(data, groupName){
    return group(data, d => d[groupName]);
}

export function groupsResultDataBy(data, groupName){
    return groups(data, d => d[groupName]);
}

function groupsResultDataByMultiple(data, groupKeys) {
    return group(data, ...groupKeys.map(key => d => d[key]));
}

export function getFilteredData(data, region, variable, unit) {
    const groupedData = groupsResultDataByMultiple(data, ["Region", "Variable", "Unit"]);

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
        value: parseFloat(d.years[year].replace('%', '').replace(',', '.')),
      }))
    );
  }

  export let colorPallete = [
    
    '#a6cee3', //light green
    '#b2df8a', //light blue
    '#fb9a99', //light red
    
    
    '#cab2d6', //light purp 
    '#fdbf6f', //yellow
    '#e31a1c', //red
    '#ff7f00', //orange
    '#6a3d9a', //purp

    '#e31a1c', //red
    '#1f78b4', //blue
    '#33a02c', //green
    ]
  
  
export function colorGroups(data){

    // let groupKeys = [...data.keys()];
    let groupKeys = [...data.map(x => x[0])];

    return groupKeys.reduce((acc, element, i) => {
        acc[element] = colorPallete[i];
        return acc;
    }, {});

}

export function worldScenarioColors(){
    return {
        "Familiar World": "#a6cee3",
        "Unified World": "#b2df8a",
        "Fragmented World": "#fb9a99"
    }
}