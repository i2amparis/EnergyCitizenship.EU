// import module1_bg from "$lib/assets/cards/module1_bg.svg"
// import module2_bg from "$lib/assets/cards/module2_bg.svg"
import module1_bg from "$lib/assets/cards/module1_bg.png"
import module2_bg from "$lib/assets/cards/module2_bg.png"


let home_hero = {
    title:"How to involve citizens in the energy transition?",
    desc:"ENCLUDE is a Horizon 2020 EU project that aims to help the EU to achieve a just and inclusive decarbonisation by sharing and co-creating new knowledge and practices that maximise the number and diversity of citizens who are willing and able to contribute to the energy transition."
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

let test_cards = [
    {
        category: "Education",
        title: 'What is energy citizenship?',
        imageUrl: module2_bg,
        description: 'An interactive explorer of different expressions of citizen participation in the energy transition',
        href: 'https://platform.encludeproject.eu/about',
        badges: [
            {
                title:"Regional",
                color:"#ffac00"
            },
            {
                title:"Finance",
                color:"#b035c9"
            }
        ],
        authors: [
            "Elmar Kriegler",
            "Cornelia Auer",
            "Lavinia Baumstark",
        ]
    },
    {
        category: "Data View",
        title: 'What examples of energy citizenship initiatives can be found across Europe?',
        imageUrl: module1_bg,
        description: '"A map of different initiatives throughout Europe along with testimonials of their members"',
        href: 'https://platform.encludeproject.eu/interactive_map',
        badges:[
            {
                title:"Regional",
                color:"#ffac00"
            }
        ],
        authors: [
            "Elmar Kriegler",
            "Cornelia Auer"
        ]
     }
];


export {
    home_hero,
    home_cards,
    test_cards
}