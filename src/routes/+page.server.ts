import { europeSvg } from '#lib/server/geo.ts';
import { byCountry } from '#lib/data/initiatives.ts';

export const load = () => {
	const counts = Object.fromEntries([...byCountry()].map(([c, list]) => [c, list.length]));
	return { geo: europeSvg(), counts };
};
