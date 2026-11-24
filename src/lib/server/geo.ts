import { geoAzimuthalEqualArea, geoPath } from 'd3-geo';
import type { Feature, FeatureCollection, Geometry } from 'geojson';
import europe from '#lib/data/raw/europe.json';
import { countries } from '#lib/data/taxonomy.ts';

type Shape = Feature<Geometry, { name: string }>;
const collection = europe as unknown as FeatureCollection<Geometry, { name: string }>;

export interface EuropeSvg {
	width: number;
	height: number;
	shapes: { name: string; d: string }[];
	anchors: Record<string, [number, number]>;
	points: { name: string; x: number; y: number }[];
}

/**
 * Renders Europe to SVG path strings at build time, so static locator maps cost
 * zero client-side JavaScript.
 */
export function europeSvg(
	width = 800,
	height = 760,
	extra: { name: string; lng: number; lat: number }[] = []
): EuropeSvg {
	const frame: Shape = {
		type: 'Feature',
		properties: { name: 'frame' },
		geometry: {
			type: 'MultiPoint',
			coordinates: [
				[-11, 35],
				[30, 35],
				[-9, 60],
				[28, 60],
				[10, 61]
			]
		}
	};
	const projection = geoAzimuthalEqualArea()
		.rotate([-10, -52])
		.fitExtent(
			[
				[10, 10],
				[width - 10, height - 10]
			],
			frame
		);
	const path = geoPath(projection);
	const shapes = collection.features
		.map((f) => ({ name: f.properties.name, d: path(f) ?? '' }))
		.filter((s) => s.d);
	const anchors: Record<string, [number, number]> = {};
	for (const [name, c] of Object.entries(countries)) {
		const p = projection([c.lng, c.lat]);
		if (p) anchors[name] = [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10];
	}
	const points = extra.flatMap((e) => {
		const p = projection([e.lng, e.lat]);
		return p
			? [{ name: e.name, x: Math.round(p[0] * 10) / 10, y: Math.round(p[1] * 10) / 10 }]
			: [];
	});
	return { width, height, shapes, anchors, points };
}
