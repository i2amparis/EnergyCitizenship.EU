import { redirect } from '@sveltejs/kit';
import { initiatives } from '#lib/data/initiatives.ts';

export const entries = () => initiatives.map((i) => ({ id: String(i.id) }));
// Legacy URL (v1) → new initiative page
export const load = ({ params }) => redirect(308, `/initiatives/${params.id}`);
