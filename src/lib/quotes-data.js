
let testimonials = {
    "Ireland": [
      {
        "quote": "What became evident is that there was no practical demonstration of what sustainable development meant. So, we just came up with the mad idea of, well, why not create an ecovillage? It was radical at the start in respect of it was a little bit of society's got it wrong. We know better, a little bit of naivety and all the rest. We'll just build a village, and we'll start from scratch.",
        "badges": ["Planned and achieved impact"]
      },
      {
        "quote": "So, the objective was to set up an ecovillage as a model for sustainable living into the 21st century and as an education enterprise and research resource for all…The subsidiary goals, as listed in the company constitution, are, number one, to minimize pollution to the air, water and land. Number two, to demonstrate a new approach to rural regeneration. Number three, to maximize the potential for earning a living both inside and outside the village […]. And number four, to provide for the cultural, artistic and non-material needs of the residents of the village and surrounding community.",
        "badges": ["Planned and achieved impact"]
      },
      {
        "quote": "Our energy costs have not gone up. Because of alongside all the other anyone dependent on fossil fuel or systems that are linked to fossil fuel prices have gone way up and ours hasn't. It's gone up a bit. But that's more because of the electricity costs to run the system, the pumps and stuff and the delivery charge.",
        "badges": ["Political", "social and economic setting", "special focus energy prices"]
      },
      {
        "quote": "There are always going to be where you have people, particularly when you have a group of very strong-willed self-opinionated people with ideas coming together. There are going to be clashes. Some of these are ironed out in the process, the consensus process. Some of them are ironed out by people just falling away from the project. People have left the project, but most people are still here, and most people are still engaged in some way.",
        "badges": ["Community culture"]
      }
    ],
    "Greece": [
      {
        "quote": "Our goal is to exploit the 3 main sources which are: the sun, not only for electricity and for heat with solar panels but also through solar thermal applications with mirrors, wind in any case, and in fact, wind is the one that will have the largest share in energy production and biomass.",
        "badges": ["Technical aspects"]
      },
      {
        "quote": "Our philosophy though is, in our cooperative, that most of the energy can be provided to small and medium [income] citizens, not big companies. Although we had some suggestions, we wanted to provide all of our generated electricity to small businesses, and poor families so that we can help as many people as possible.",
        "badges": ["Planned and achieved impact"]
      },
      {
        "quote": "We have included 50 families and we will include another 50 in the next one, low-income families and earthquake victims […]. And of course, the next step is to help enable…citizens to invest in power projects but also in heat projects, also from renewable sources, so that they can supplement their income.",
        "badges": ["Planned and achieved impact"]
      },
      {
        "quote": "People are seeing that they're not paying any electricity bills while the bills have gone up so much.",
        "badges": ["Political", "social and economic setting", "special focus energy prices"]
      },
      {
        "quote": "The most important part of the energy community is being part of a community. It is not about building your own plan, but cooperating with others for joint actions. So, this is also the spirit in Hyperion and the members of the board are continuously communicating with all of us and we have also chatrooms and joint mailing lists and other joint activities like coffee discussions, movies that we watch together etc.",
        "badges": ["Community culture"]
      },
      {
        "quote": "Photovoltaic application was the cheapest, commercially available, easily accessible. Biomass and biogas for electricity production would be such options but we consider that such options are more expensive with increased technological risk.",
        "badges": ["Technical aspects"]
      },
      {
        "quote": "The part of the internal organization is compliance with the law that what papers you have to prepare, what are the minutes, what are the templates, and now especially that we have a new colleague … is making several such templates so that we have some depository script so that we can operate more easily the community in the future and we can facilitate other communities around Greece.",
        "badges": ["Barriers by community"]
      },
      {
        "quote": "Where I feel like a lot of people understood the uncertainty of the energy market, they started to get even more involved in some of these solutions, so to speak.",
        "badges": ["Political", "social and economic setting", "special focus energy prices"]
      },
      {
        "quote": "We're trying to contact and spread all of these opportunities or partnerships and so forth, so that everybody has the opportunity to participate in all of them.",
        "badges": ["Community culture"]
      }
    ],
    "Slovenia": [
      {
        "quote": "Because we have a lot of outages there. And it could be that some outages take two days or even more. So basically the idea was also for this system battery to enable, let's say, island of cooperation and that we can also enable the energy or the recipe for the customers during the outages in the medium voltage.",
        "badges": ["Technical aspects"]
      }
    ],
    "Portugal": [
      {
        "quote": "That solar photovoltaics are becoming so cheap that it starts to make more sense that you just basically electrify everything and just use heat pumps to heat your water basically.",
        "badges": ["Political", "social and economic setting", "special focus energy prices"]
      },
      {
        "quote": "So essentially, nobody knows that this is an extremely good financial decision. Nobody knows that you get like 20% every year on an investment like this or something along those lines…It will, you know, pay for itself in 5 years and it will bring in lots of interest in a form of fewer costs for 25 or 30 years.",
        "badges": ["Political", "social and economic setting", "special focus energy prices"]
      },
      {
        "quote": "The citizens that want to start their own energy community, don't know how to do it. And it's not easy to do it by themselves. So, you need to understand lots of legislation.",
        "badges": ["Barriers by community"]
      },
      {
        "quote": "So, the sector, the energy sector doesn't see if the people are poor or not. They just say how you can put a PV or something like that. So, it's much more to tackle energy poverty. It's much more about social than regulations and social laws then and the energy laws. Because usually the people that are in energy poverty, they have other problems of poverty, food poverty, um, financial poverty, house poverty.",
        "badges": ["Energy poverty"]
      },
      {
        "quote": "What I'm trying to advocate in Portugal is that when you have public funds for PV for domestic sector, maybe that money should be only be for poor people and not for all citizens. So, you should invest money in this kind of situation, and you should put the money to pay for PV- systems because a family from middle class for sure have €1,000 for their PV. But for lower classes, they don't have it.",
        "badges": ["Energy poverty"]
      }
    ]
  }
  

  function getCountryQuotes(country){
    return testimonials[country];
  }
  
  function hasQuotes(country){
    if(testimonials[country]){
        return true;
    }
    return false;
  }

  export {
    testimonials,
    getCountryQuotes,
    hasQuotes
  }