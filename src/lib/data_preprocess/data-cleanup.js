function cleanData(record) {
    // Step 1: Normalize Field Names
    const normalizedRecord = {};
    for (const key in record) {
        const normalizedKey = key.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_');
        normalizedRecord[normalizedKey] = record[key];
    }

    // Step 2: Standardize Date Formats
    if (normalizedRecord.project_start && !isNaN(normalizedRecord.project_start)) {
        normalizedRecord.project_start = normalizedRecord.project_start.toString();
    }
    if (normalizedRecord.project_end && normalizedRecord.project_end.toLowerCase() === 'ongoing') {
        normalizedRecord.project_end = 'Ongoing';
    }

    // Step 3: Handle Boolean Fields
    const booleanFields = ['pv', 'wind', 'batteries', 'other_energy_sources_biomass_hydro_hydrogen', 'heat_pumps_solar_heaters_hvac',
                           'renovation', 'smart_systems_or_monitoring', 'electromobility', 'climate_impact', 'environmental_impact', 
                           'regulatory_impact', 'technological_impact', 'social_impact', 'renewable_energy_production_goal_optimise_production_self_consumption_energy_autonomy', 
                           'energy_efficiency_and_energy_savings_building_retrofit_energy_use_optimisation', 'monetary_savings_or_profit_reduce_cost_of_energy_reduce_energy_bills',
                           'research_technology_testing_or_development', 'awareness_raising_behavior_change', 'political_goals_change_legislation_oppose_a_project_lobbying',
                           'social_goals_community_building_democracy_justice_energy_poverty', 'organisation_related', 'technology_related',
                           'communication_related', 'money_related', 'no_major_challenge'];
    booleanFields.forEach(field => {
        if (field in normalizedRecord) {
            normalizedRecord[field] = !!normalizedRecord[field];
        }
    });

    // Step 4: Clean and Structure Text Fields
    const textFields = ['short_description', 'actual_impacts', 'goal', 'challenges'];
    textFields.forEach(field => {
        if (field in normalizedRecord) {
            normalizedRecord[field] = normalizedRecord[field].replace(/\r\n/g, ' ').trim();
        }
    });

    // Step 5: Categorize and Group Fields
    const categorizedData = {
        basic_info: {
            id: normalizedRecord.id,
            name: normalizedRecord.name,
            country: normalizedRecord.country,
            short_description: normalizedRecord.short_description,
            location: normalizedRecord.location
        },
        technology: {
            technologies: normalizedRecord.technologies,
            pv: normalizedRecord.pv,
            wind: normalizedRecord.wind,
            batteries: normalizedRecord.batteries,
            other_energy_sources: normalizedRecord.other_energy_sources_biomass_hydro_hydrogen,
            electromobility: normalizedRecord.electromobility
        },
        impacts: {
            planned_impacts: normalizedRecord.planned_impacts,
            actual_impacts: normalizedRecord.actual_impacts,
            climate_impact: normalizedRecord.climate_impact,
            environmental_impact: normalizedRecord.environmental_impact
        },
        goals: {
            general_goal: normalizedRecord.goal,
            renewable_energy_production_goal: normalizedRecord.renewable_energy_production_goal_optimise_production_self_consumption_energy_autonomy,
            energy_efficiency_goal: normalizedRecord.energy_efficiency_and_energy_savings_building_retrofit_energy_use_optimisation
        },
        challenges: {
            challenge_description: normalizedRecord.challenges,
            organisation_related: normalizedRecord.organisation_related,
            communication_related: normalizedRecord.communication_related
        },
        project_timeline: {
            start: normalizedRecord.project_start,
            end: normalizedRecord.project_end
        }
    };

    return categorizedData;
}

