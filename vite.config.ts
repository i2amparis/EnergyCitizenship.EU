import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';

// The theme bootstrap in app.html runs before paint (no flash of the wrong theme).
// Its hash is allowed explicitly so the CSP can stay free of 'unsafe-inline' for scripts.
const themeScript = readFileSync('src/app.html', 'utf8').match(
	/<script id="theme-init">([\s\S]*?)<\/script>/
)?.[1];
if (!themeScript) throw new Error('theme-init script missing from src/app.html');
const themeHash = `sha256-${createHash('sha256').update(themeScript).digest('base64')}` as const;

export default defineConfig(({ mode }) => {
	// Optional: the project's Mapbox styles as a detailed basemap for the atlas.
	// Keep the token in .env (git-ignored) and restrict it to the site's URLs in Mapbox.
	const mapboxToken = loadEnv(mode, process.cwd(), 'PUBLIC_').PUBLIC_MAPBOX_TOKEN ?? '';
	const mapbox = mapboxToken ? (['https://api.mapbox.com'] as const) : [];

	return {
		define: { __MAPBOX_TOKEN__: JSON.stringify(mapboxToken) },
		plugins: [
			tailwindcss(),
			sveltekit({
				adapter: adapter({ precompress: true }),
				prerender: { handleHttpError: 'fail', handleMissingId: 'fail' },
				csp: {
					mode: 'hash',
					directives: {
						'default-src': ['self'],
						'script-src': ['self', themeHash],
						// Svelte transitions and style: directives write inline styles
						'style-src': ['self', 'unsafe-inline'],
						'img-src': ['self', 'data:', 'blob:'],
						'font-src': ['self'],
						'connect-src': ['self', ...mapbox],
						// MapLibre bootstraps its module worker from a blob URL
						'worker-src': ['self', 'blob:'],
						'child-src': ['self', 'blob:'],
						'object-src': ['none'],
						'base-uri': ['self'],
						'form-action': ['self'],
						'upgrade-insecure-requests': true
					}
				}
			})
		],
		// maplibre-gl (~300 kB gzip) is lazy-loaded on /map only
		build: { target: 'es2022', chunkSizeWarningLimit: 1200 },
		worker: { format: 'es' }
	};
});
