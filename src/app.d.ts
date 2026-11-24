// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	namespace App {}

	/** Mapbox public token, inlined at build time from PUBLIC_MAPBOX_TOKEN (may be empty) */
	const __MAPBOX_TOKEN__: string;
}

export {};
