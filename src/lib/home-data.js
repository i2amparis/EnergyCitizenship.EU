// import module1_bg from "$lib/assets/cards/module1_bg.svg"
// import module2_bg from "$lib/assets/cards/module2_bg.svg"
import module1_bg from "$lib/assets/cards/module1_bg.png"
import module2_bg from "$lib/assets/cards/module2_bg.png"


let home_hero = {
    title:"How to involve citizens in the energy transition?",
    desc:"Energy citizenship is a term used by activists, academics, and increasingly, \
    policymakers to conceptualise the potential roles that citizens could (or should) \
    play within the energy system. This website collects research results from four Research and Innovation \
    projects on energy citizenship funded by the Horizon 2020 programme of the European Union.\
    Results have been curated into four pathways for different audiences which are presented below. \
    Explore and let us know your feedback!"
}

let home_cards = [
    {
        title: 'What is energy citizenship?',
        imageUrl: 'https://cdn.pixabay.com/photo/2024/04/18/18/51/white-8704790_1280.jpg',
        description: 'An interactive explorer of different expressions of citizen participation in the energy transition',
        href: 'https://platform.encludeproject.eu/about'
    },
    {
        title: 'What examples of energy citizenship initiatives can be found across Europe?',
        imageUrl: 'https://cdn.pixabay.com/photo/2023/08/26/17/49/dahlias-8215514_1280.jpg',
        description: '"A map of different initiatives throughout Europe along with testimonials of their members"',
        href: 'https://platform.encludeproject.eu/interactive_map'
    }
];

let module_cards = [
    {
        category: "Learn",
        title: 'What is energy citizenship?',
        // imageUrl: module2_bg,
        description: 'An interactive explorer of different expressions of citizen participation in the energy transition',
        href: '/about',
        badges: [
            {
                title:"Academics",
                color:"#4281A4"
            },
        ],
        authors: [
            "ENCLUDE",
            "DIALOGUES",
            "EC2",
            "ENERGY PROSPECTS",
        ]
    },
    {
        category: "Explore",
        title: 'What examples of energy citizenship initiatives can be found across Europe?',
        // imageUrl: module1_bg,
        description: 'A map of different initiatives throughout Europe along with testimonials of their members',
        href: '/interactive_map',
        badges:[
            {
                title:"Academics",
                color:"#4281A4"
            },
            {
                title:"Policymakers",
                color:"#EDB230"
            }
        ],
        authors: [
            "ENCLUDE"
        ]
     },
     {
        category: "Explore",
        title: 'What is the role of energy citizenship in the European energy transition?',
        // imageUrl: module1_bg,
        description: 'An evaluation of the future impacts of energy citizenship on the energy transition',
        href: '/impacts',
        badges:[
            {
                title:"Academics",
                color:"#4281A4"
            },
            {
                title:"Policymakers",
                color:"#EDB230"
            }
        ],
        authors: [
            "ENCLUDE",
            "ENERGY PROSPECTS",
        ]
     },
     {
        category: "Learn",
        title: 'How can I organize an initiative in the context of the energy transition?',
        // imageUrl: module1_bg,
        description: 'A collection of resources for organizing an energy citizenship initiative',
        href: '/resources',
        badges:[
            {
                title:"Citizens",
                color:"#E4572E"
            },
            {
                title:"Policymakers",
                color:"#EDB230"
            }
        ],
        authors: [
            "ENCLUDE",
            "DIALOGUES",
            "EC2",
            "ENERGY PROSPECTS"
        ]
     }
];


export {
    home_hero,
    home_cards,
    module_cards
}