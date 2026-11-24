import { redirect } from '@sveltejs/kit';
// Legacy URL (v1)
export const load = () => redirect(308, '/impacts/scenario-design');
