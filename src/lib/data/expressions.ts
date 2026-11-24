import access from '#lib/assets/expressions/access.png';
import production from '#lib/assets/expressions/production.png';
import governance from '#lib/assets/expressions/governance.png';
import excluded from '#lib/assets/expressions/excluded.png';
import dispossessed from '#lib/assets/expressions/dispossessed.png';
import energyPoor from '#lib/assets/expressions/energy-poor.png';
import activeConsumer from '#lib/assets/expressions/active-consumer.png';
import digitalNative from '#lib/assets/expressions/digital-native.png';
import energyChampion from '#lib/assets/expressions/energy-champion.png';
import collectivistConsumer from '#lib/assets/expressions/collectivist-consumer.png';
import prosumer from '#lib/assets/expressions/prosumer.png';
import selfConsumer from '#lib/assets/expressions/self-consumer.png';
import collectivistProducer from '#lib/assets/expressions/collectivist-producer.png';
import citizenInvestor from '#lib/assets/expressions/citizen-investor.png';
import litigator from '#lib/assets/expressions/citizen-litigator.png';
import challenger from '#lib/assets/expressions/citizen-challenger.png';
import activist from '#lib/assets/expressions/citizen-activist.png';
import disenfranchised from '#lib/assets/expressions/disenfranchised.png';

export interface Expression {
	slug: string;
	name: string;
	image: string;
	description: string;
}

export interface Mode {
	key: 'access' | 'consumption' | 'production' | 'governance';
	name: string;
	verb: string;
	image: string;
	intro: string;
	expressions: Expression[];
}

/** ENCLUDE typology of energy citizenship (D2.2), four modes and fifteen expressions. */
export const modes: Mode[] = [
	{
		key: 'access',
		name: 'Energy access',
		verb: 'claim',
		image: access,
		intro:
			'This category concerns those on the margins of the energy system and it is linked to the framing of energy as a resource and as a source of wealth.',
		expressions: [
			{
				slug: 'excluded',
				name: 'Excluded',
				image: excluded,
				description:
					'Those who are prevented from connecting to energy grids due to socio-political and/or economic reasons or in terms of geographical location.'
			},
			{
				slug: 'dispossessed',
				name: 'Dispossessed',
				image: dispossessed,
				description:
					'Indigenous people and other marginalized groups from whom energy resources have been unjustly taken e.g., tar sands production on Canadian First Nations land and/or extraction schemes which have resulted in their displacement, e.g., Three Gorges Dam in China.'
			},
			{
				slug: 'energy-poor',
				name: 'Energy poor',
				image: energyPoor,
				description:
					'Households unable to afford the energy needed for essential energy services. Income is important, but there is not a direct link. Not all those who suffer from monetary poverty are necessarily energy poor. Also, not all those in energy poverty are income poor.\n\nA complex multidimensional issue that encompasses a broad range of factors including energy services provision, the quality of the service being provided, reliability of supply, and affordability.'
			}
		]
	},
	{
		key: 'consumption',
		name: 'Energy consumption',
		verb: 'use',
		image: activeConsumer,
		intro:
			'The traditional role of the citizens in the energy system. It used to be a very passive role in the previous years but more active varieties have emerged.',
		expressions: [
			{
				slug: 'active-consumer',
				name: 'Active consumer',
				image: activeConsumer,
				description:
					'An energy literate consumer who understands the energy market and express power by influencing the market through consumer ‘choice’. Sometimes linked in public information campaigns to the ‘good citizen’, wherein they are encouraged to use their market power to help meet public policy objectives.\n\nActive user of a product or service, feeding information back to the provider who in turn adapts their service to meet the needs of the user.'
			},
			{
				slug: 'digital-native',
				name: 'Digital native',
				image: digitalNative,
				description:
					'A consumer who is ‘native’ to the digital lifestyle, connected to the internet, and confident about adapting to new technologies. Often times can be what marketeers would call an early adopter. They can quickly adapt to change energy market and technologies e.g., smart meters, dynamic pricing etc. where it is expected that they will use digital skills to better manage consumption patterns (reducing their costs while help demand response).'
			},
			{
				slug: 'energy-champion',
				name: 'Energy champion',
				image: energyChampion,
				description:
					'An energy literate consumer able and willing to provide peer support to other consumers around energy savings. Typically, they will be environmentally conscious and technically minded. They may be thrifty, but their motivation for reducing energy consumption is not just about money. Their energy conservator role often results from an anti-consumerism philosophy.'
			},
			{
				slug: 'collectivist-consumer',
				name: 'Collectivist-consumer',
				image: collectivistConsumer,
				description:
					'Groups of consumers who come together to form buyers’ clubs or join similar initiatives whereby they use their collective bargaining power to get better terms from suppliers (see e.g., ‘One Big Switch’ in Ireland).\n\nMost examples are commercially run programmes, which do not often give any agency to the consumers, as their only decision is whether to join or not. Bottom-up consumer-led buyers’ clubs would overcome this issue.'
			}
		]
	},
	{
		key: 'production',
		name: 'Energy production',
		verb: 'produce',
		image: production,
		intro:
			'These expressions facilitate citizens in breaking out of their role as consumers, capturing both individual and collective organisation for energy production.',
		expressions: [
			{
				slug: 'prosumer',
				name: 'Prosumer',
				image: prosumer,
				description:
					'A production-consumer, one who both produces and consumes energy. This is most typically (but not only) realised through the installation of solar photovoltaic array on their property. Prosumers use much of their energy when it is produced with excess production being sold (where that is permitted, other ‘donated’) to the grid or stored in batteries.'
			},
			{
				slug: 'self-consumer',
				name: 'Self-consumer',
				image: selfConsumer,
				description:
					'The self-consumer consumes the energy they produce and minimize transactions with the grid. This is realised with the help of technologies available for storage and management of the surplus energy. At its most extreme, the self-consumer takes on the role of the “off-grider” – cutting their connection with the centralised grids.'
			},
			{
				slug: 'collectivist-producer',
				name: 'Collectivist-producer',
				image: collectivistProducer,
				description:
					'These are energy producers who combined in collective undertakings – most commonly as energy co-operatives, but it may also take the form of a social enterprise or a for profit company. This form of production involves communities (geographical or otherwise) coming together to develop and run their own energy production facility.'
			},
			{
				slug: 'citizen-investor',
				name: 'Citizen-investor',
				image: citizenInvestor,
				description:
					'This is where the citizen invests their own money in an energy company or energy project. At one extreme it may involve investing in a small local community-orientated energy project, while at the other it could mean the purchase of shares in a large company. While there may be multiple motivations for getting involved, it is fundamentally a financial investment. There are several barriers to increasing this type of investment including regulation, market structures access to finance, etc.'
			}
		]
	},
	{
		key: 'governance',
		name: 'Political & governance',
		verb: 'govern',
		image: governance,
		intro:
			'In these expressions of energy citizenship, the objective is to affect change in decision-making processes (at multiple scales).',
		expressions: [
			{
				slug: 'citizen-litigator',
				name: 'Citizen-litigator',
				image: litigator,
				description:
					'This energy citizen is focused on procedural and administrative correctness. They work through established processes and aim to ensure that laws about environmental information provision, public consultation, and permitting of facilities are strictly followed. In doing this, they contribute to better energy policy development and regulation.'
			},
			{
				slug: 'citizen-challenger',
				name: 'Citizen-challenger',
				image: challenger,
				description:
					'The citizen-challenger is active in political processes and sees the energy transition as an implementation challenge. They combine with others to challenge the status quo and enact change through the political system by means of public awareness, political campaigning, lobbying, electoral politics, and the like. They are usually motivated, well-informed, and well organised. However, while not necessarily welcomed by governments (and other incumbent stakeholders), citizen-challengers arguably play an important role in democracy by questioning accepted wisdoms.'
			},
			{
				slug: 'citizen-activist',
				name: 'Citizen-activist',
				image: activist,
				description:
					'This form of energy citizenship is somewhat similar to the citizen-challenger, but the citizen-activist works more on the political margins. They do not trust the political system to deliver change and so they are involved in radical action such as protest movements and other forms of agitation. In many respects they aim not achieve change through the system but to change the system itself.'
			},
			{
				slug: 'disenfranchised',
				name: 'Disenfranchised',
				image: disenfranchised,
				description:
					'These are the energy citizens who, for socio-political, economic, and/or geographical reasons, do not have a voice in the energy discourse. Accordingly, their perspectives are not reflected in policy development or implementation. Many who experience this form of energy citizenship will also likely experience other marginalised forms in relation to access to energy, affordability of energy etc. There are other citizens who perhaps not as evident are also disenfranchised in relation to energy. For instance, householders who are not named on an energy account cannot engage with energy suppliers.'
			}
		]
	}
];

export const expressionCount = modes.reduce((n, m) => n + m.expressions.length, 0);

/** Other perspectives on the concept, from the sister projects */
export const perspectives = [
	{
		project: 'ENCLUDE',
		title: 'Typology of energy citizenships',
		href: 'https://encludeproject.eu/sites/default/files/2023-10/ENCLUDE_D2.2_Typology_of_Energy_Citizenships.pdf'
	},
	{
		project: 'EC2',
		title: 'Interdisciplinary understanding of energy citizenship',
		href: 'https://ec2project.eu/sites/site0261/media/downloads/d2.1_interdisciplinary_understanding_of_energy_citizenship_2022_02_24_finalversion.pdf'
	},
	{
		project: 'EnergyPROSPECTS',
		title: 'Energy citizenship perspectives (Deliverable 2.1)',
		href: 'https://www.energyprospects.eu/fileadmin/user_upload/lu_portal/www.energycitizen.eu/EnergyPROSPECTS_D2.1_310821_final.pdf'
	},
	{
		project: 'DIALOGUES',
		title: 'A multidimensional contextualisation of inclusive energy citizenship',
		href: 'https://www.dialoguesproject.eu/wp-content/uploads/2023/12/DIALOGUES-D3.5-A-Multidimensional-Contextualisation-of-Inclusive-Energy-Citizenship.pdf'
	}
];

/** Lookup: expression slug → expression + the index of its mode */
export const expressionIndex = new Map(
	modes.flatMap((m, mi) => m.expressions.map((e) => [e.slug, { ...e, mode: mi }] as const))
);

export const modeIndex = (key: string | null | undefined) =>
	key ? modes.findIndex((m) => m.key === key) : -1;
