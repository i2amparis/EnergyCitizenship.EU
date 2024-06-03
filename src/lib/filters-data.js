import solar_pv from '$lib/assets/Technologies/technologies icon/technologies icon_Solar PV.png'
import wind from '$lib/assets/Technologies/technologies icon/technologies icon_wind.png'
import smart_meters from '$lib/assets/Technologies/technologies icon/technologies icon_smart meters.png'
import hydro_power from '$lib/assets/Technologies/technologies icon/technologies icon_hydro power.png'
import electromobility from '$lib/assets/Technologies/technologies icon/energy consumption_EMobility.png'
import hvac from '$lib/assets/Technologies/technologies icon/technologies icon_tidal power.png'
import renovation from '$lib/assets/Technologies/technologies icon/energy consumption_Renovation.png'
import batteries from '$lib/assets/Technologies/technologies icon/technologies icon_batteries.png'

let technologies = [
    {
        name:"Solar PV",
        src:solar_pv,
        compare:"PV",
        disable:true
    },
    {
        name:"Wind",
        src:wind,
        compare:"Wind",
        disable:true
    },
    {
        name:"Smart Systems",
        src:smart_meters,
        compare:"Smart systems or monitoring",
        disable:true
    },
    {
        name:"Other sources",
        src:hydro_power,
        compare:"Other energy sources (biomass, hydro, hydrogen)",
        disable:true
    },
    {
        name:"EMobility",
        src:electromobility,
        compare:"Electromobility",
        disable:true
    },
    {
        name:"HVAC",
        src:hvac,
        compare:"Heat pumps, solar heaters, HVAC",
        disable:true
    },
    {
        name:"Renovation",
        src:renovation,
        compare:"Renovation",
        disable:true
    },
    {
        name:"Batteries",
        src:batteries,
        compare:"Batteries",
        disable:true
    }
]

function getTechnologies(data){

    let currentTechnologies = JSON.parse(JSON.stringify(technologies))

    
    if (typeof data === 'string' && data != "" && data != "all"){
        data.split(' | ').forEach((element) => {
            for (var i=0; i<currentTechnologies.length; i++){
                if(currentTechnologies[i]["compare"] == element){
                    currentTechnologies[i]["disable"] = false;
                }
            }
        });
    }
    var j;
    if(typeof data === 'string' && data == "all"){
        for (j=0; j<currentTechnologies.length; j++){
            currentTechnologies[j]["disable"] = false;
        }
    }
    return currentTechnologies
}

let activities = [
    {
        name:"Renewable energy production, supply, storage, self-consumption, P2P exchange",
        short:"Renewable energy production"
    },
    {
        name:"Energy efficiency incl. building renovation, optimisation of use, smart systems",
        short:"Energy efficiency"
    },
    {
        name:"Mobility measures, EV procurement, charging infrastructure, car sharing, bike sharing",
        short:"Mobility measures"
    },
    {
        name:"Awareness raising and trainings",
        short:"Awareness raising"
    },
    {
        name:"Political activities, opposition to projects, lobbying",
        short:"Political activities"
    },
]

let goals = [
    {
        name:"Monetary savings or profit (reduce cost of energy, reduce energy bills)",
        short:"Monetary savings"
    },
    {
        name:"Awareness raising & behavior change",
        short:"Awareness raising"
    },
    {
        name:"Research, technology testing or development",
        short:"Research and Development"
    },
    {
        name:"Social goals (community building, democracy, justice, energy poverty)",
        short:"Social goals"
    },
    {
        name:"Political goals (change legislation, oppose a project, lobbying)",
        short:"Political goals"
    },
    {
        name:"General sustainability and climate goals (carbon neutrality, emission reduction, eco-farming, sustainable mobility)",
        short:"General sustainability"
    },
    {
        name:"Renewable energy production goal (optimise production, self-consumption, energy autonomy)",
        short:"Renewable energy production"
    },
    {
        name:"Energy efficiency and energy savings (building retrofit, energy use optimisation)",
        short:"Energy efficiency"
    },

]


function getTechnologiesFilteredData(data, filters){

    let compare_technologies = technologies.filter(y => filters['Technologies'].join(' ').includes(y['name'])).map(k => k['compare'])

    return data.filter(item => {
        const technologies = item['Technologies_filter'].split(' | ').map(t => t.trim());
        return compare_technologies.some(inputValue => technologies.includes(inputValue.trim()));
    });
}

function getChallengesFilteredData(data, filters){

    return data.filter(item => {
        const challenges = item['Challenges_filter']
        return filters.some(inputValue => challenges.includes(inputValue));
    });
}

function getActivitiesFilteredData(data, filters){
    
    let compare_activities = activities.filter(y => filters.join(' ').includes(y['short'])).map(k => k['name'])

    return data.filter(item => {
        const activities = item['Activities_filter']
        return compare_activities.some(inputValue => activities.includes(inputValue));
    });
}

function getGoalsFilteredData(data, filters){
    
    let compare_goals = goals.filter(y => filters.join(' ').includes(y['short'])).map(k => k['name'])

    return data.filter(item => {
        const goals = item['Goals_filter']
        return compare_goals.some(inputValue => goals.includes(inputValue));
    });
}



export {
    technologies,
    activities,
    goals,
    getTechnologies,
    getTechnologiesFilteredData,
    getChallengesFilteredData,
    getActivitiesFilteredData,
    getGoalsFilteredData
}