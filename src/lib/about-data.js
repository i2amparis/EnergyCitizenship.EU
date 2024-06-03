import access_exclude_icon from "$lib/assets/About/Energy Access/energy access_exclude.png"
import access_dispossesed_icon from "$lib/assets/About/Energy Access/energy access_dispossessed.png"
import access_poor_icon from "$lib/assets/About/Energy Access/energy access_energy poor.png"

import consumption_consumer_icon from "$lib/assets/About/Energy Consumpion/Energy Consumpion_active consumer.png"
import consumption_collectivist_icon from "$lib/assets/About/Energy Consumpion/Energy Consumpion_Collectivist-consumer.png"
import consumption_native_icon from "$lib/assets/About/Energy Consumpion/Energy Consumpion_Digital native.png"
import consumption_champion_icon from "$lib/assets/About/Energy Consumpion/Energy Consumpion_Energy champion.png"

import production_prosumer_icon from "$lib/assets/About/Energy Production/Energy Production_Prosumer.png"
import production_self_icon from "$lib/assets/About/Energy Production/Energy Production_Self-consumer.png"
import production_collectivist_icon from "$lib/assets/About/Energy Production/Energy Production_Collectivist-producer.png"
import production_investor_icon from "$lib/assets/About/Energy Production/Energy Production_Citizen-investor.png"

import political_litigator_icon from "$lib/assets/About/Political & Governance/Political & Governance_Citizen-litigator.png"
import political_challenger_icon from "$lib/assets/About/Political & Governance/Political & Governance_Citizen-challenger.png"
import political_activist_icon from "$lib/assets/About/Political & Governance/Political & Governance_Citizen-activist.png"
import political_disefranchised_icon from "$lib/assets/About/Political & Governance/Political & Governance_Disenfranchised.png"



let energy_access = [
    {
        name: 'Excluded',
        imageUrl: access_exclude_icon,
        description: 'Those who are prevented from connecting to energy grids due to socio-political and/or economic reasons or in terms of geographical location (Lennon & Dunphy, 2023b).'
    },
    {
        name: 'Dispossessed',
        imageUrl: access_dispossesed_icon,
        description: 'Indigenous people and other marginalized groups from whom energy resources have been unjustly taken e.g., tar sands production on Canadian First Nations land (Parson & Ray 2018) and/or extraction schemes which have resulted in their displacement, e.g., Three Gorges Dam in China (Jackson & Sleigh, 2000).'
    },
    {
        name: 'Energy poor',
        imageUrl: access_poor_icon,
        description: 'Households unable to afford the energy needed for essential energy services. Income is important, but there is not a direct link. Not all those who suffer from monetary poverty are necessarily energy poor. Also, not all those in energy poverty are income poor (Palmer et al., 2008). \n \
        \n \
        A complex multidimensional issue that encompasses a broad range of factors including energy services provision, the quality of the service being provided, reliability of supply, and affordability (Bouzarovski, 2014).'
    }
];

let energy_consumption = [
    {
        name: 'Active consumer',
        imageUrl: consumption_consumer_icon,
        description: 'An energy literate consumer who understands the energy market and express power by influencing the market through consumer ‘choice’. Sometimes linked in public information campaigns to the ‘good citizen’, wherein they are encouraged to use their market power to help meet public policy objectives. \nActive user of a product or service, feeding information back to the provider who in turn adapts their service to meet the needs of the user (Schweiger et al., 2020). '
    },
    {
        name: 'Digital native',
        imageUrl: consumption_native_icon,
        description: 'A consumer who is ‘native’ to the digital lifestyle, connected to the internet, and confident about adapting to new technologies. Often times can be what marketeers would call an early adopter. They can quickly adapt to change energy market and technologies e.g., smart meters, dynamic pricing etc. where it is expected that they will use digital skills to better manage consumption patterns (reducing their costs while help demand response).'
    },
    {
        name: 'Energy champion',
        imageUrl: consumption_champion_icon,
        description: 'An energy literate consumer able and willing to provide peer support to other consumers around energy savings. Typically, they will be environmentally conscious and technically minded. They may be thrifty, but their motivation for reducing energy consumption is not just about money. They energy conservator role often results from an anti-consumerism philosophy (Clancy & O’Loughlin 2002).'
    },
    {
        name: 'Collectivist-consumer',
        imageUrl: consumption_collectivist_icon,
        description: 'Groups of consumers who come together to form buyers’ clubs or join similar initiatives whereby they use their collective bargaining power to get better terms from suppliers (see e.g., ‘One Big Switch’ in Ireland). \nMost examples are commercially run programmes, which do not often give any agency to the consumers, as their only decision is whether to join or not. Bottom-up consumer-led buyers’ clubs would overcome this issue.'
    }
];

let energy_production = [
    {
        name: 'Prosumer',
        imageUrl: production_prosumer_icon,
        description: 'A production-consumer, one who both produces and consumes energy. This is most typically (but not only) realised through the installation of solar photovoltaic array on their property. Prosumers use much of their energy when it is produced with excess production being sold (where that is permitted, other ‘donated’) to the grid or stored in batteries.'
    },
    {
        name: 'Self-consumer',
        imageUrl: production_self_icon,
        description: 'The self-consumer consumes the energy they produce and minimize transactions with the grid. This is realised with the help of technologies available for storage and management of the surplus energy. As its most extreme, the self-consumer takes on the role of the “off-grider” – cutting they connection with the centralised grids.'
    },
    {
        name: 'Collectivist-producer',
        imageUrl: production_collectivist_icon,
        description: 'These are energy producers who combined in collective undertakings – most commonly as energy co-operatives, but it may also take the form of a social enterprise or a for profit company. This form of production involves communities (geographical or otherwise) coming together to develop and run their own energy production facility.'
    },
    {
        name: 'Citizen-investor',
        imageUrl: production_investor_icon,
        description: 'This is where the citizen invests their own money in an energy company or energy project. At one extreme it may involve investing in a small local community-orientated energy project, while at the other it could mean the purchase of shares in a large company.While there may be multiple motivations for getting involved, it is fundamentally a financial investment. There are several barriers to increasing this type of investment including regulation, market structures access to finance, etc.'
    }
];

let political_governance = [
    {
        name: 'Citizen-litigator',
        imageUrl: political_litigator_icon,
        description: 'This energy citizen is focused on procedural and administrative correctness. They work through established processes and aim to ensure that laws about environmental information provision, public consultation, and permitting of facilities are strictly followed. In doing this, they contribute to better energy policy development and regulation.'
    },
    {
        name: 'Citizen-challenger',
        imageUrl: political_challenger_icon,
        description: 'The citizen-challenger is active in political processes and sees the energy transition as an implementation challenge. They combine with others to challenge the status quo and enact change through the political system “by means of public awareness, political campaigning, lobbying, electoral politics, and the like” (Dunphy & Lennon 2022, p. 439). They are usually motivated, well-informed, and well organised. However, while not necessarily welcomed by governments (and other incumbent stakeholders), citizen-challengers arguably play an important role in democracy by questioning accepted wisdoms.'
    },
    {
        name: 'Citizen-activist',
        imageUrl: political_activist_icon,
        description: 'This form of energy citizenship is somewhat similar to the citizen-challenger, but the citizen-activist works more on the political margins. They do not trust the political system to deliver change and so they are involved in radical action such as protest movements and other forms of agitation. In many respects they aim not achieve change through the system but to change the system itself.'
    },
    {
        name: 'Disenfranchised',
        imageUrl: political_disefranchised_icon,
        description: 'These are the energy citizens who, or socio-political, economic, and/or geographical reasons, do not have a voice in the energy discourse. Accordingly, their perspectives are not reflected in policy development or implementation. Many who experience this form of energy citizenship will also likely experience other marginalised forms in relation to access to energy, affordability of energy etc. There are other citizens who perhaps not as evident are also disenfranchised in relation to energy. For instance, householders who are not named on energy account cannot engage with energy suppliers.'
    }
];

export {
    energy_access,
    energy_consumption,
    energy_production,
    political_governance
}