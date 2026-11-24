import pv from '#lib/assets/tech/pv.png';
import wind from '#lib/assets/tech/wind.png';
import batteries from '#lib/assets/tech/batteries.png';
import otherSources from '#lib/assets/tech/other-sources.png';
import hvac from '#lib/assets/tech/hvac.svg';
import renovation from '#lib/assets/tech/renovation.png';
import smart from '#lib/assets/tech/smart.png';
import emobility from '#lib/assets/tech/emobility.png';

/** A controlled vocabulary entry. `raw` is the exact label used in the survey data. */
export interface Term<K extends string = string> {
	key: K;
	label: string;
	raw: string;
	icon?: string;
}

export const technologies = [
	{ key: 'pv', label: 'Solar PV', raw: 'PV', icon: pv },
	{ key: 'wind', label: 'Wind', raw: 'Wind', icon: wind },
	{ key: 'batteries', label: 'Batteries', raw: 'Batteries', icon: batteries },
	{
		key: 'other',
		label: 'Biomass, hydro & hydrogen',
		raw: 'Other energy sources (biomass, hydro, hydrogen)',
		icon: otherSources
	},
	{ key: 'heat', label: 'Heat pumps & HVAC', raw: 'Heat pumps, solar heaters, HVAC', icon: hvac },
	{ key: 'renovation', label: 'Renovation', raw: 'Renovation', icon: renovation },
	{ key: 'smart', label: 'Smart systems', raw: 'Smart systems or monitoring', icon: smart },
	{ key: 'emobility', label: 'E-mobility', raw: 'Electromobility', icon: emobility }
] as const satisfies readonly Term[];

export const activities = [
	{
		key: 'production',
		label: 'Renewable production',
		raw: 'Renewable energy production, supply, storage, self-consumption, P2P exchange'
	},
	{
		key: 'efficiency',
		label: 'Energy efficiency',
		raw: 'Energy efficiency incl. building renovation, optimisation of use, smart systems'
	},
	{
		key: 'mobility',
		label: 'Mobility',
		raw: 'Mobility measures, EV procurement, charging infrastructure, car sharing, bike sharing'
	},
	{ key: 'awareness', label: 'Awareness & training', raw: 'Awareness raising and trainings' },
	{
		key: 'political',
		label: 'Political action',
		raw: 'Political activities, opposition to projects, lobbying'
	}
] as const satisfies readonly Term[];

export const goals = [
	{
		key: 'climate',
		label: 'Sustainability & climate',
		raw: 'General sustainability and climate goals (carbon neutrality, emission reduction, eco-farming, sustainable mobility)'
	},
	{
		key: 'res',
		label: 'Renewable production',
		raw: 'Renewable energy production goal (optimise production, self-consumption, energy autonomy)'
	},
	{
		key: 'efficiency',
		label: 'Energy savings',
		raw: 'Energy efficiency and energy savings (building retrofit, energy use optimisation)'
	},
	{
		key: 'money',
		label: 'Lower bills',
		raw: 'Monetary savings or profit (reduce cost of energy, reduce energy bills)'
	},
	{
		key: 'research',
		label: 'Research & testing',
		raw: 'Research, technology testing or development'
	},
	{ key: 'awareness', label: 'Behaviour change', raw: 'Awareness raising & behavior change' },
	{
		key: 'political',
		label: 'Political change',
		raw: 'Political goals (change legislation, oppose a project, lobbying)'
	},
	{
		key: 'social',
		label: 'Social & justice',
		raw: 'Social goals (community building, democracy, justice, energy poverty)'
	}
] as const satisfies readonly Term[];

export const impacts = [
	{ key: 'climate', label: 'Climate', raw: 'Climate impact' },
	{ key: 'environmental', label: 'Environmental', raw: 'Environmental impact' },
	{ key: 'social', label: 'Social', raw: 'Social impact' },
	{ key: 'regulatory', label: 'Regulatory', raw: 'Regulatory impact' },
	{ key: 'technological', label: 'Technological', raw: 'Technological impact' }
] as const satisfies readonly Term[];

export const challenges = [
	{ key: 'organisation', label: 'Organisation', raw: 'organisation-related' },
	{ key: 'money', label: 'Funding', raw: 'money-related' },
	{ key: 'communication', label: 'Communication', raw: 'communication-related' },
	{ key: 'technology', label: 'Technology', raw: 'technology-related' },
	{ key: 'none', label: 'No major challenge', raw: 'no major challenge' }
] as const satisfies readonly Term[];

export const scales = [
	{ key: 'village', label: 'Village or small town', raw: '< 10,000' },
	{ key: 'town', label: 'Medium town', raw: '10,000–50,000' },
	{ key: 'city', label: 'Small to medium city', raw: '50,000–500,000' },
	{ key: 'metro', label: 'Large city', raw: '> 500,000' },
	{ key: 'region', label: 'Region or country', raw: 'Region or country' },
	{ key: 'multi', label: 'Several locations', raw: 'Several locations' }
] as const satisfies readonly Term[];

export type TechKey = (typeof technologies)[number]['key'];
export type ActivityKey = (typeof activities)[number]['key'];
export type GoalKey = (typeof goals)[number]['key'];
export type ImpactKey = (typeof impacts)[number]['key'];
export type ChallengeKey = (typeof challenges)[number]['key'];
export type ScaleKey = (typeof scales)[number]['key'];

export const facets = {
	technologies: { label: 'Technologies', terms: technologies },
	activities: { label: 'Activities', terms: activities },
	goals: { label: 'Goals', terms: goals },
	impacts: { label: 'Impacts', terms: impacts },
	challenges: { label: 'Challenges', terms: challenges },
	scale: { label: 'Scale', terms: scales }
} as const;

export type FacetKey = keyof typeof facets;
export const facetKeys = Object.keys(facets) as FacetKey[];

export function termLabel(facet: FacetKey, key: string): string {
	return (facets[facet].terms as readonly Term[]).find((t) => t.key === key)?.label ?? key;
}

/** Country anchor points (the survey data is anonymised to country level). */
export const countries: Record<string, { lng: number; lat: number; code: string }> = {
	Austria: { lng: 14.14, lat: 47.59, code: 'AT' },
	Belgium: { lng: 4.66, lat: 50.64, code: 'BE' },
	Britain: { lng: -2.11, lat: 53.28, code: 'GB' },
	Croatia: { lng: 15.98, lat: 45.45, code: 'HR' },
	Denmark: { lng: 9.32, lat: 56.03, code: 'DK' },
	Estonia: { lng: 25.85, lat: 58.67, code: 'EE' },
	France: { lng: 2.51, lat: 46.62, code: 'FR' },
	Germany: { lng: 10.38, lat: 51.07, code: 'DE' },
	Greece: { lng: 22.54, lat: 39.5, code: 'GR' },
	Ireland: { lng: -8.09, lat: 53.18, code: 'IE' },
	Netherlands: { lng: 5.65, lat: 52.29, code: 'NL' },
	'North Macedonia': { lng: 21.7, lat: 41.6, code: 'MK' },
	Portugal: { lng: -8.2, lat: 39.6, code: 'PT' },
	Romania: { lng: 24.97, lat: 45.84, code: 'RO' },
	Slovenia: { lng: 14.82, lat: 46.12, code: 'SI' },
	Spain: { lng: -3.55, lat: 40.38, code: 'ES' }
};
