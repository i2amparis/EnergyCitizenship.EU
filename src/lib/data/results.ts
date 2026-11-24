import animoRaw from './raw/animo.json';
import dreemRaw from './raw/dreem.json';

export interface Point {
	year: number;
	value: number;
}
export interface Series {
	key: string;
	label: string;
	color: string;
	points: Point[];
}

type Row = Record<string, string | null> & {
	Scenario: string;
	Region: string;
	Variable: string;
	Unit: string;
};

/** "2%" → 2, "2,658513982" → 2.658… */
const num = (v: string | null | undefined) => {
	const n = parseFloat(
		String(v ?? '')
			.replace('%', '')
			.replace(',', '.')
	);
	return Number.isFinite(n) ? n : 0;
};

const years = (r: Row) =>
	Object.keys(r)
		.filter((k) => /^\d{4}$/.test(k))
		.map(Number)
		.sort((a, b) => a - b);

export const worlds = [
	{
		key: 'Familiar World',
		label: 'Familiar World',
		color: 'var(--sky)',
		note: 'Business as usual'
	},
	{
		key: 'Unified World',
		label: 'Unified World',
		color: 'var(--leaf)',
		note: 'Citizens at the centre'
	},
	{
		key: 'Fragmented World',
		label: 'Fragmented World',
		color: 'var(--coral)',
		note: 'Distrust and scepticism'
	}
] as const;

function byScenario(rows: Row[], region: string, variable: string): Series[] {
	return worlds
		.map((w) => {
			const r = rows.find(
				(x) => x.Region === region && x.Variable === variable && x.Scenario === w.key
			);
			const series: Series | null = r
				? {
						key: w.key,
						label: w.label,
						color: w.color,
						points: years(r).map((year) => ({ year, value: num(r[year]) }))
					}
				: null;
			return series;
		})
		.filter((s): s is Series => s !== null);
}

// ── ANIMO: growth of three collective energy initiatives ────────────────────────
export const animoRegions = [
	{
		key: 'Cloughjordan Ecovillage - Ireland',
		name: 'Cloughjordan Ecovillage',
		country: 'Ireland',
		lng: -8.039,
		lat: 52.946
	},
	{
		key: 'Energie C Midden Delfland - The Netherlands',
		name: 'EnergieC Midden-Delfland',
		country: 'Netherlands',
		lng: 4.33,
		lat: 51.999
	},
	{
		key: 'Belica Energy Community - North Macedonia',
		name: 'Belica Energy Community',
		country: 'North Macedonia',
		lng: 20.949,
		lat: 41.407
	}
] as const;

export type GrowthStat = 'Min' | 'Average' | 'Max';
export const animoGrowth = (region: string, stat: GrowthStat) =>
	byScenario(
		animoRaw as Row[],
		region,
		`Collective Energy Initiative (CEI) Percentage growth | ${stat}`
	);
export const animoAvoided = (region: string) =>
	byScenario(
		animoRaw as Row[],
		region,
		'Emissions avoided|CO2|Residential and Commercial|Residential'
	);

// ── DREEM: Megalopolis (GR) residential sector ──────────────────────────────────
const DREEM_REGION = 'MEGALOPOLIS-GREECE';
export const dreemLine = (variable: string) =>
	byScenario(dreemRaw as Row[], DREEM_REGION, variable);

export const fuels = [
	{ key: 'Oil Products (Heating)', label: 'Heating oil', color: '#8a5a44' },
	{ key: 'Natural Gas', label: 'Natural gas', color: 'var(--sun)' },
	{ key: 'Electricity', label: 'Electricity', color: 'var(--sky)' },
	{ key: 'District Heating', label: 'District heating', color: 'var(--coral)' },
	{ key: 'Biomass', label: 'Biomass', color: 'var(--leaf)' }
] as const;

export const MIX_YEARS = [2023, 2025, 2030, 2035, 2040, 2045, 2050];

/** Residential energy mix per milestone year, stacked by fuel (ktoe/yr) */
export function energyMix(scenario: string) {
	const rows = (dreemRaw as Row[]).filter((r) => r.Scenario === scenario && r.Unit === 'ktoe/yr');
	const pick = (variable: string) => rows.find((r) => r.Variable === variable);
	const savings = pick('Final Energy|Residential and Commercial|Residential|Savings');
	return MIX_YEARS.map((year) => ({
		year,
		parts: fuels.map((f) => ({
			...f,
			value: num(pick(`Energy Mix|Residential and Commercial|Residential|${f.key}`)?.[year])
		})),
		savings: num(savings?.[year])
	}));
}
