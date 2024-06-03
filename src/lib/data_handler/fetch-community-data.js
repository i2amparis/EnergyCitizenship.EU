import ENC_platform_community_data from "$lib/assets/20231026_ENC_platform_community_data.json";

export class ENCDataRetriever {

  constructor () {
    this.data = ENC_platform_community_data
  }

  checkIncludesId(id) {
    return this.data.some(x => x['id'] === id);
  }

  getCommunityById(id){
    return this.data.find(x => x['id'] == id);
  }

  getActivities() {
    const activityKeys = [
      "Renewable energy production, supply, storage, self-consumption, P2P exchange",
      "Energy efficiency incl. building renovation, optimisation of use, smart systems",
      "Mobility measures, EV procurement, charging infrastructure, car sharing, bike sharing",
      "Political activities, opposition to projects, lobbying",
      "Awareness raising and trainings\n"
    ];

    return activityKeys.filter(key => this.data.some(x => x[key] === 1));
  }

  getTechnologies() {
    const techKeys = [
      "PV",
      "Wind",
      "Batteries",
      "Other energy sources (biomass, hydro, hydrogen)",
      "Heat pumps, solar heaters, HVAC",
      "Renovation",
      "Smart systems or monitoring",
      "Electromobility"
    ];
    return techKeys.filter(key => this.data.some(x => x[key] === 1));
  }

  getImpacts() {
    const impactKeys = [
      "Climate impact",
      "Environmental impact",
      "Regulatory impact",
      "Technological impact",
      "Social impact"
    ];
    return impactKeys.filter(key => this.data.some(x => x[key] === 1)).map(s => s.replace(' impact', '').trim());
  }

  getGoals() {
    const goalKeys = [
      "General sustainability and climate goals (carbon neutrality, emission reduction, eco-farming, sustainable mobility)",
      "Renewable energy production goal (optimise production, self-consumption, energy autonomy)",
      "Energy efficiency and energy savings (building retrofit, energy use optimisation)",
      "Monetary savings or profit (reduce cost of energy, reduce energy bills)",
      "Research, technology testing or development",
      "Awareness raising & behavior change",
      "Political goals (change legislation, oppose a project, lobbying)",
      "Social goals (community building, democracy, justice, energy poverty)"
    ];
    return goalKeys.filter(key => this.data.some(x => x[key] === 1));
  }

  getLocation() {
    return [...new Set(this.data.map(x => x['Location']))];
  }

  getCountry() {
    return [...new Set(this.data.map(x => x['Country'].trim()))];
  }

  getSubsetBasedOnCountry(country) {
    return this.data.filter(x => x['Country'].trim() === country);
  }

  logJson() {
    console.log(this.data)
  }


  
  

}