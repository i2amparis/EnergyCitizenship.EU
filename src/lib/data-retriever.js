

import ENC_platform_community_data from "$lib/assets/20231027_ENC_platform_community_data.json";

export class DataRetriever {

  constructor () {
    this.data = ENC_platform_community_data
  }

  checkIncludesId(id){
    return this.data.filter( x => x['id'] == id ).length > 0
    
  }

  getJsonActivities_filter() {
    return [...new Set(this.data.map( x => x['Activities_filter']).join(' | ').split(' | '))];
  }

  getJsonTechnologies() {
    return [...new Set(this.data.map( x => x['Technologies']).join(', ').split(','))];
  }

  getJsonTechnologies_filter() {
    return [...new Set(this.data.map( x => x['Technologies_filter']).filter((x) => x != "").join(' | ').split(' | '))];
  }

  getJsonImpacts_filter() {
    return [...new Set(this.data.map( x => x['Impacts_filter']).filter((x) => x != "").join(' | ').split(' | ').map(s => s.replace(' impact', '').trim()))];
  }

  getJsonGoals_filter() {
    return [...new Set(this.data.map( x => x['Goals_filter']).join(' | ').split(' | '))];
  }


  getJsonLocation() {
    return [...new Set(this.data.map(x => x['Location']))];
  }


  getJsonCountry() {
    return [...new Set(this.data.map(x => x['Country'].trim()))];
  }

  getJsonSubsetBasedOnCountry(country){
    return this.data.filter(x => x['Country'].trim() == country);
  }

  getCommunityById(id){
    return this.data.find(x => x['id'] == id);
  }

  getJsonChallenges_filter(){
    return [...new Set(this.data.map( x => x['Challenges_filter']).join(',').split(','))];
  }


  



  logJson() {
    console.log(this.data)
  }























//   send (command, params = []) {
//     if (!command) { return }
//     this.queue.update(q => ([ ...q, [ command, params ] ]))
//   }

//   start (map) {
//     this.unsubscribe = this.queue.subscribe(queue => {
//       while (queue.length) {
//         const [ command, params ] = queue.shift()
//         map[command].apply(map, params)
//       }
//     })
//     this.started = true
//   }

//   stop () {
//     if (!this.started) { return }
//     this.unsubscribe()
//     this.queue = writable([])
//     this.started = false
//   }
}