import { error } from '@sveltejs/kit';
import { initiativeById, initiatives } from '#lib/data/initiatives.ts';
import { europeSvg } from '#lib/server/geo.ts';

export const entries = () => initiatives.map((i) => ({ id: String(i.id) }));

export const load = ({ params }) => {
	const item = initiativeById.get(Number(params.id));
	if (!item) error(404, 'Initiative not found');
	const idx = initiatives.indexOf(item);
	const related = initiatives
		.filter((i) => i.country === item.country && i.id !== item.id)
		.slice(0, 6);
	return {
		item,
		related,
		prev: initiatives[idx - 1] ?? null,
		next: initiatives[idx + 1] ?? null,
		geo: europeSvg(520, 500)
	};
};
