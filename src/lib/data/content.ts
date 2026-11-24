import encludeLogo from '#lib/assets/partners/enclude_logo.png';
import dialoguesLogo from '#lib/assets/partners/dialogues_logo.png';
import ec2Logo from '#lib/assets/partners/ec_logo.png';
import prospectsLogo from '#lib/assets/partners/energy_logo.png';

export const FEEDBACK_URL = 'https://encludeproject.eu/form/enclude-platform-survey';

export type Audience = 'academics' | 'policymakers' | 'citizens';
export const audienceLabel: Record<Audience, string> = {
	academics: 'Academics',
	policymakers: 'Policymakers',
	citizens: 'Citizens'
};

export type ProjectKey = 'ENCLUDE' | 'DIALOGUES' | 'EC2' | 'EnergyPROSPECTS';

export const projects: {
	key: ProjectKey;
	href: string;
	logo: string;
	grant: string;
}[] = [
	{ key: 'ENCLUDE', href: 'https://encludeproject.eu', logo: encludeLogo, grant: '101022791' },
	{
		key: 'DIALOGUES',
		href: 'https://www.dialoguesproject.eu',
		logo: dialoguesLogo,
		grant: '101022585'
	},
	{ key: 'EC2', href: 'https://ec2project.eu', logo: ec2Logo, grant: '101022565' },
	{
		key: 'EnergyPROSPECTS',
		href: 'https://www.energyprospects.eu',
		logo: prospectsLogo,
		grant: '101022492'
	}
];

export interface Card {
	kind: string;
	title: string;
	description: string;
	href: string;
	audiences: Audience[];
	by: string[];
	/** Where the link leads, when it leaves this site */
	external?: 'pdf' | 'site' | 'iamparis';
}

/** The four pathways through the platform */
export const pathways: (Card & { question: string; cta: string })[] = [
	{
		kind: 'Learn',
		question: 'What is energy citizenship?',
		title: 'Expressions of energy citizenship',
		description:
			'An interactive explorer of different expressions of citizen participation in the energy transition.',
		href: '/about',
		cta: 'Explore the typology',
		audiences: ['academics'],
		by: ['ENCLUDE', 'DIALOGUES', 'EC2', 'EnergyPROSPECTS']
	},
	{
		kind: 'Explore',
		question: 'What initiatives exist across Europe?',
		title: 'Atlas of citizen initiatives',
		description:
			'A map of different initiatives throughout Europe along with testimonials of their members.',
		href: '/map',
		cta: 'Open the atlas',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE']
	},
	{
		kind: 'Explore',
		question: 'What role does energy citizenship play in the transition?',
		title: 'Impacts and futures',
		description:
			'An evaluation of the future impacts of energy citizenship on the energy transition.',
		href: '/impacts',
		cta: 'See the impacts',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE', 'EnergyPROSPECTS']
	},
	{
		kind: 'Learn',
		question: 'How can I organise an initiative?',
		title: 'Resources for changemakers',
		description: 'A collection of resources for organising an energy citizenship initiative.',
		href: '/resources',
		cta: 'Get the resources',
		audiences: ['citizens', 'policymakers'],
		by: ['ENCLUDE', 'DIALOGUES', 'EC2', 'EnergyPROSPECTS']
	}
];

export const impactCards: Card[] = [
	{
		kind: 'Modelling',
		title: 'Scenario design for energy citizenship',
		description:
			'Combining “people-centered” with narratives of potential “future-world” evolutions towards transformative scenario design and the operationalization of energy citizenship.',
		href: '/impacts/scenario-design',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE']
	},
	{
		kind: 'Modelling',
		title: 'Citizen-led transitions towards justice and inclusivity',
		description:
			'A “green” rebranding of a Coal and Carbon Intensive Region into a city of the people, by the people, for the people.',
		href: '/impacts/citizen-led-transitions',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE']
	},
	{
		kind: 'Modelling',
		title: 'Impacts of Collective Energy Initiatives in Europe by 2030',
		description:
			'Driving factors and citizen personas towards the further growth and diffusion of Collective Energy Initiatives in Europe by 2030.',
		href: '/impacts/collective-energy-initiatives',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE']
	},
	{
		kind: 'Modelling',
		title: 'People-centered national energy systems',
		description:
			'A study on people-centered and 100% renewable-based national energy systems in Greece.',
		href: 'https://iamparis.eu/results/enclude/people-centered-national-energy-systems/policy_questions',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE'],
		external: 'iamparis'
	},
	{
		kind: 'Modelling',
		title: 'Decarbonization potentials of energy citizens',
		description:
			'Coupling clustering algorithms with energy simulation models to explore the decarbonization potentials of energy citizens.',
		href: 'https://iamparis.eu/results/enclude/decarbonization-potentials-of-energy-citizens/policy_questions',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE'],
		external: 'iamparis'
	},
	{
		kind: 'Modelling',
		title: 'Power to the People transitions in EU cities',
		description:
			'Empowering prosumerism and citizen investments in photovoltaic and storage systems.',
		href: 'https://iamparis.eu/results/enclude/power-to-the-people-transitions-in-eu-cities/policy_questions',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE'],
		external: 'iamparis'
	},
	{
		kind: 'Report',
		title: 'Impact of energy citizenship on the local level',
		description:
			'A model-based analysis on the profitability of small-scale PV systems, on the growth of Collective Energy Initiatives, and on the impacts of a citizen-led transition.',
		href: 'https://encludeproject.eu/sites/default/files/2024-05/ENCLUDE_D5.3%20Report%20on%20the%20impact%20of%20energy%20citizenship%20at%20the%20local%20level_FINAL.pdf',
		audiences: ['academics', 'policymakers'],
		by: ['ENCLUDE'],
		external: 'pdf'
	},
	{
		kind: 'Report',
		title: 'Decarbonization pathways based on social innovations of energy citizenship',
		description:
			'Narratives of energy citizenship based on the Shared Socioeconomic Pathways used in IPCC reports.',
		href: 'https://encludeproject.eu/sites/default/files/2023-02/ENCLUDE_D5.2%20Report%20on%20development%20of%20decarbonization%20pathways%20based%20on%20social%20innovations%20of%20energy%20citizenship.pdf',
		audiences: ['academics'],
		by: ['ENCLUDE'],
		external: 'pdf'
	},
	{
		kind: 'Report',
		title: 'Prospective energy citizenship scenarios',
		description:
			'Scenarios of energy citizenship development in the EU until 2030 based on an online survey of 10,071 citizens from 19 European countries.',
		href: 'https://www.energyprospects.eu/fileadmin/user_upload/lu_portal/www.energycitizen.eu/EnergyPROSPECTS_D5.5_31_03_2024_final.pdf',
		audiences: ['academics', 'policymakers'],
		by: ['EnergyPROSPECTS'],
		external: 'pdf'
	}
];

export const resourceCards: Card[] = [
	{
		kind: 'Policy brief',
		title: 'Energy Citizenship in the Making',
		description:
			'A policy brief on pathways to support citizen engagement in the European energy transition.',
		href: 'https://encludeproject.eu/sites/default/files/2024-03/Joint_Policy_Brief_FINAL_print.pdf',
		audiences: ['policymakers'],
		by: ['ENCLUDE', 'DIALOGUES', 'EC2', 'EnergyPROSPECTS'],
		external: 'pdf'
	},
	{
		kind: 'Playbook',
		title: 'A Changemaker’s Guide to the Energy Transition',
		description:
			'A playbook that aims to take citizens step by step to design, implement and reflect on an initiative of their own related to the energy transition.',
		href: 'https://encludeproject.eu/sites/default/files/2024-06/20240606-ENCLUDE-Changemaker%27s-Guide.pdf',
		audiences: ['citizens'],
		by: ['ENCLUDE'],
		external: 'pdf'
	},
	{
		kind: 'Toolkit',
		title: 'Energy Citizen Empowerment Kit',
		description:
			'A gamified tool that triggers and guides discussion about barriers to participation in the energy system.',
		href: 'https://communityenergyacademy.eu/energy-citizenship-empowerment-kits/',
		audiences: ['citizens', 'policymakers'],
		by: ['EC2'],
		external: 'site'
	},
	{
		kind: 'Booklet',
		title: 'Things we have learned from talking about energy with 68 collective energy initiatives',
		description:
			'A documentation of impacts, decision-making processes, and other dimensions of collective energy initiatives.',
		href: 'https://encludeproject.eu/sites/default/files/2024-03/2024-A5-WP3%20Case%20studies-Booklet-44P.pdf',
		audiences: ['policymakers'],
		by: ['ENCLUDE'],
		external: 'pdf'
	}
];
