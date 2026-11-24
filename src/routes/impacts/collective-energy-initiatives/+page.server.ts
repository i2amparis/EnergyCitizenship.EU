import { europeSvg } from '#lib/server/geo.ts';
import { animoRegions } from '#lib/data/results.ts';

export const load = () => ({
	geo: europeSvg(
		800,
		620,
		animoRegions.map((r) => ({ name: r.name, lng: r.lng, lat: r.lat }))
	)
});
