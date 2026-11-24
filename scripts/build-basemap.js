// Builds the self-hosted basemap used by the Atlas (no tile server, no token).
// World at 1:110m for the globe, Europe swapped in at 1:50m for detail.
// Run: npm run geo  ->  static/geo/basemap.json
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';

const require = createRequire(import.meta.url);
const load = (f) => JSON.parse(readFileSync(require.resolve(`world-atlas/${f}`), 'utf8'));

const world110 = feature(load('countries-110m.json'), 'countries');
const world50 = feature(load('countries-50m.json'), 'countries');

// Rough Europe + Mediterranean window
const BBOX = { w: -32, s: 27, e: 50, n: 72 };
const inWindow = (f) => {
	let hit = false;
	const walk = (c) => {
		if (hit) return;
		if (typeof c[0] === 'number') {
			if (c[0] >= BBOX.w && c[0] <= BBOX.e && c[1] >= BBOX.s && c[1] <= BBOX.n) hit = true;
		} else c.forEach(walk);
	};
	walk(f.geometry?.coordinates ?? []);
	return hit;
};

// Precision: ~1 km is plenty for a country-level atlas
const round = (c) =>
	typeof c[0] === 'number'
		? [Math.round(c[0] * 100) / 100, Math.round(c[1] * 100) / 100]
		: c.map(round);

// Names used by the initiatives dataset
const RENAME = {
	'United Kingdom': 'Britain',
	Macedonia: 'North Macedonia',
	'N. Macedonia': 'North Macedonia'
};

const europeIds = new Set(world50.features.filter(inWindow).map((f) => f.id));
const features = [
	...world110.features.filter((f) => !europeIds.has(f.id)),
	...world50.features.filter((f) => europeIds.has(f.id))
]
	.filter((f) => f.geometry && f.properties.name !== 'Antarctica')
	.map((f, i) => ({
		type: 'Feature',
		id: i + 1,
		properties: { name: RENAME[f.properties.name] ?? f.properties.name },
		geometry: { type: f.geometry.type, coordinates: round(f.geometry.coordinates) }
	}));

mkdirSync('static/geo', { recursive: true });
const out = JSON.stringify({ type: 'FeatureCollection', features });
writeFileSync('static/geo/basemap.json', out);
console.log(`basemap.json: ${features.length} features, ${(out.length / 1024).toFixed(0)} KB`);

// Small Europe-only outline set, used server-side to render static SVG locators
const LOCATOR = { w: -25, s: 34, e: 45, n: 71 };
const inLocator = (f) => {
	let hit = false;
	const walk = (c) => {
		if (hit) return;
		if (typeof c[0] === 'number') {
			if (c[0] >= LOCATOR.w && c[0] <= LOCATOR.e && c[1] >= LOCATOR.s && c[1] <= LOCATOR.n)
				hit = true;
		} else c.forEach(walk);
	};
	walk(f.geometry?.coordinates ?? []);
	return hit;
};
const europe = world50.features
	.filter((f) => f.geometry && inLocator(f))
	.map((f) => ({
		type: 'Feature',
		properties: { name: RENAME[f.properties.name] ?? f.properties.name },
		geometry: { type: f.geometry.type, coordinates: round(f.geometry.coordinates) }
	}));
const eOut = JSON.stringify({ type: 'FeatureCollection', features: europe });
writeFileSync('src/lib/data/raw/europe.json', eOut);
console.log(`europe.json: ${europe.length} features, ${(eOut.length / 1024).toFixed(0)} KB`);
