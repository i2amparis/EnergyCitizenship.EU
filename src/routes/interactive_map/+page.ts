import { redirect } from '@sveltejs/kit';
// Legacy URL (v1) → new atlas
export const load = () => redirect(308, '/map');
