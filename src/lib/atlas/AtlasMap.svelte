<script lang="ts">
	import 'maplibre-gl/dist/maplibre-gl.css';
	import { onMount } from 'svelte';
	import type { Map as MLMap, LngLatBoundsLike, StyleSpecification } from 'maplibre-gl';
	import type { FeatureCollection, Geometry, Position } from 'geojson';
	import Icon from '#lib/components/Icon.svelte';
	import { countries } from '#lib/data/taxonomy.ts';
	import type { AtlasState } from './atlas.svelte.ts';

	let {
		atlas,
		describe
	}: {
		atlas: AtlasState;
		/** Short extra line for a country's tooltip */
		describe?: (country: string) => string;
	} = $props();

	const EUROPE: LngLatBoundsLike = [
		[-11, 35],
		[32, 61]
	];

	// Optional detailed basemap: the project's own Mapbox styles, as raster tiles.
	// The token comes from PUBLIC_MAPBOX_TOKEN at build time; without it the map
	// falls back to the self-hosted vector outlines only.
	const MAPBOX_TOKEN = __MAPBOX_TOKEN__;
	const MAPBOX_STYLES = {
		light: 'steftsotras/cln8vlqvp03ih01qxgs7583d7',
		dark: 'steftsotras/clnqswk7f00eu01pg7joxf2xq'
	};
	const mapboxTiles = (style: string) => [
		`https://api.mapbox.com/styles/v1/${style}/tiles/512/{z}/{x}/{y}@2x?access_token=${MAPBOX_TOKEN}`
	];
	const MAPBOX_ATTRIBUTION =
		'© <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>';

	let container: HTMLDivElement;
	let detailed = $state(Boolean(MAPBOX_TOKEN));
	let map = $state<MLMap>();
	let ready = $state(false);
	let failed = $state(false);
	let globe = $state(true);
	let reduced = false;
	let tooltip = $state<{ name: string; x: number; y: number } | null>(null);

	const bboxes = new Map<string, [[number, number], [number, number]]>();
	const markers = new Map<string, HTMLButtonElement>();
	const max = $derived(Math.max(1, ...Object.values(atlas.countryCounts)));

	function palette() {
		const css = getComputedStyle(document.documentElement);
		const v = (n: string) => css.getPropertyValue(n).trim();
		return {
			water: v('--map-water'),
			land: v('--map-land'),
			stroke: v('--map-stroke'),
			low: v('--map-land-active'),
			high: v('--leaf'),
			selected: v('--teal'),
			ink: v('--ink'),
			sky: v('--surface')
		};
	}

	function bbox(g: Geometry) {
		let [w, s, e, n] = [180, 90, -180, -90];
		const walk = (c: Position | Position[] | Position[][] | Position[][][]) => {
			if (typeof c[0] === 'number') {
				const [x, y] = c as Position;
				// keep to the European mainland/islands; ignore far overseas territories
				if (x < -32 || x > 50 || y < 27) return;
				w = Math.min(w, x);
				s = Math.min(s, y);
				e = Math.max(e, x);
				n = Math.max(n, y);
			} else (c as Position[]).forEach((p) => walk(p as Position));
		};
		if ('coordinates' in g) walk(g.coordinates as Position[]);
		return [
			[w, s],
			[e, n]
		] as [[number, number], [number, number]];
	}

	function fillColor(p: ReturnType<typeof palette>) {
		return [
			'case',
			['boolean', ['feature-state', 'selected'], false],
			p.selected,
			['>', ['coalesce', ['feature-state', 'count'], 0], 0],
			['interpolate', ['linear'], ['coalesce', ['feature-state', 'ratio'], 0], 0, p.low, 1, p.high],
			p.land
		] as unknown as string;
	}

	const isDark = () => document.documentElement.dataset.theme === 'dark';

	function fillOpacity(): number {
		// Over the detailed basemap only the countries with initiatives are tinted
		return (detailed
			? [
					'case',
					['boolean', ['feature-state', 'selected'], false],
					0.45,
					['>', ['coalesce', ['feature-state', 'count'], 0], 0],
					0.4,
					0
				]
			: 1) as unknown as number;
	}

	function applyBasemap() {
		if (!map || !ready) return;
		if (MAPBOX_TOKEN) {
			map.setLayoutProperty(
				'basemap-light',
				'visibility',
				detailed && !isDark() ? 'visible' : 'none'
			);
			map.setLayoutProperty(
				'basemap-dark',
				'visibility',
				detailed && isDark() ? 'visible' : 'none'
			);
		}
		map.setPaintProperty('land', 'fill-opacity', fillOpacity());
		map.setPaintProperty('borders', 'line-opacity', detailed ? 0 : 1);
	}

	function applyTheme() {
		if (!map || !ready) return;
		applyBasemap();
		const p = palette();
		map.setPaintProperty('water', 'background-color', p.water);
		map.setPaintProperty('land', 'fill-color', fillColor(p));
		map.setPaintProperty('borders', 'line-color', p.stroke);
		map.setPaintProperty('hover', 'line-color', p.ink);
		map.setSky({ 'sky-color': p.sky, 'horizon-color': p.water, 'atmosphere-blend': 0.6 });
	}

	function overview(animate = true) {
		map?.fitBounds(EUROPE, {
			padding: { top: 40, bottom: 140, left: 30, right: 30 },
			duration: animate ? 1400 : 0,
			essential: true
		});
	}

	onMount(() => {
		let disposed = false;
		reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
		const coarse = matchMedia('(pointer: coarse)').matches;
		const onTheme = () => requestAnimationFrame(applyTheme);
		window.addEventListener('themechange', onTheme);

		(async () => {
			try {
				const [{ Map: MapLibre, Marker, setWorkerUrl }, { default: workerUrl }, res] =
					await Promise.all([
						import('maplibre-gl'),
						// Let Vite bundle and fingerprint MapLibre's worker, instead of relying on
						// the library resolving it relative to its own (bundled) location
						import('maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'),
						fetch('/geo/basemap.json')
					]);
				setWorkerUrl(workerUrl);
				const geo = (await res.json()) as FeatureCollection<Geometry, { name: string }>;
				if (disposed) return;

				for (const f of geo.features)
					if (f.properties.name in countries) bboxes.set(f.properties.name, bbox(f.geometry));

				const p = palette();
				const style: StyleSpecification = {
					version: 8,
					projection: { type: 'globe' },
					sky: { 'sky-color': p.sky, 'horizon-color': p.water, 'atmosphere-blend': 0.6 },
					sources: {
						countries: {
							type: 'geojson',
							data: geo,
							promoteId: 'name',
							attribution: 'Boundaries © Natural Earth'
						}
					},
					layers: [
						{ id: 'water', type: 'background', paint: { 'background-color': p.water } },
						{
							id: 'land',
							type: 'fill',
							source: 'countries',
							paint: { 'fill-color': fillColor(p), 'fill-color-transition': { duration: 500 } }
						},
						{
							id: 'borders',
							type: 'line',
							source: 'countries',
							paint: {
								'line-color': p.stroke,
								'line-opacity': detailed ? 0 : 1,
								'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.4, 6, 1.2]
							}
						},
						{
							id: 'hover',
							type: 'line',
							source: 'countries',
							paint: {
								'line-color': p.ink,
								'line-width': 1.6,
								'line-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 0.9, 0]
							}
						}
					]
				};

				const m = new MapLibre({
					container,
					style,
					center: reduced ? [12, 50] : [-35, 28],
					zoom: reduced ? 3 : 1.1,
					minZoom: 1,
					maxZoom: 7,
					maxPitch: 0,
					dragRotate: false,
					cooperativeGestures: coarse,
					attributionControl: { compact: true },
					fadeDuration: 0
				});
				m.touchZoomRotate.disableRotation();
				map = m;

				// Country markers: real buttons, so they are reachable by keyboard and screen readers
				for (const [name, c] of Object.entries(countries)) {
					const el = document.createElement('button');
					el.type = 'button';
					el.className = 'atlas-marker';
					el.innerHTML = '<span></span>';
					el.addEventListener('click', (e) => {
						e.stopPropagation();
						atlas.selectCountry(name);
					});
					el.addEventListener('pointerenter', () => showTip(name));
					el.addEventListener('pointerleave', () => hideTip(name));
					el.addEventListener('focus', () => showTip(name));
					el.addEventListener('blur', () => hideTip(name));
					markers.set(name, el);
					new Marker({ element: el }).setLngLat([c.lng, c.lat]).addTo(m);
				}

				let hovered: string | null = null;
				const setHover = (name: string | null) => {
					if (hovered === name) return;
					if (hovered) m.setFeatureState({ source: 'countries', id: hovered }, { hover: false });
					hovered = name;
					if (name) m.setFeatureState({ source: 'countries', id: name }, { hover: true });
					m.getCanvas().style.cursor = name ? 'pointer' : '';
				};
				m.on('mousemove', 'land', (e) => {
					const name = e.features?.[0]?.properties?.name as string | undefined;
					setHover(name && atlas.countryCounts[name] ? name : null);
				});
				m.on('mouseleave', 'land', () => setHover(null));
				m.on('click', 'land', (e) => {
					const name = e.features?.[0]?.properties?.name as string | undefined;
					if (name && atlas.countryCounts[name]) atlas.selectCountry(name);
				});
				m.on('move', () => tooltip && positionTip(tooltip.name));

				// The camera effect below takes over once the style is loaded
				m.on('load', () => (ready = true));
			} catch (err) {
				console.error(err);
				failed = true;
			}
		})();

		return () => {
			disposed = true;
			window.removeEventListener('themechange', onTheme);
			map?.remove();
		};
	});

	function positionTip(name: string) {
		const c = countries[name];
		if (!map || !c) return;
		const pt = map.project([c.lng, c.lat]);
		tooltip = { name, x: pt.x, y: pt.y };
	}
	function showTip(name: string) {
		positionTip(name);
		atlas.hoverCountry = name;
	}
	function hideTip(name: string) {
		if (tooltip?.name === name) tooltip = null;
		if (atlas.hoverCountry === name) atlas.hoverCountry = null;
	}

	// Choropleth + markers follow the filtered data
	$effect(() => {
		if (!map || !ready) return;
		const counts = atlas.countryCounts;
		for (const name of Object.keys(countries)) {
			const n = counts[name] ?? 0;
			map.setFeatureState(
				{ source: 'countries', id: name },
				{ count: n, ratio: Math.sqrt(n / max), selected: atlas.country === name }
			);
		}
	});

	$effect(() => {
		if (!ready) return;
		const counts = atlas.countryCounts;
		const selected = atlas.country;
		const hover = atlas.hoverCountry;
		for (const [name, el] of markers) {
			const n = counts[name] ?? 0;
			const size = n ? Math.round(24 + Math.sqrt(n / max) * 18) : 0;
			el.style.setProperty('--size', `${size}px`);
			el.firstElementChild!.textContent = n ? String(n) : '';
			el.dataset.state = !n ? 'empty' : selected === name ? 'selected' : selected ? 'dim' : 'idle';
			el.dataset.hover = String(hover === name);
			el.tabIndex = n ? 0 : -1;
			el.setAttribute(
				'aria-label',
				`${name}: ${n} initiative${n === 1 ? '' : 's'}${selected === name ? ', selected' : ''}`
			);
			el.setAttribute('aria-pressed', String(selected === name));
		}
	});

	// Camera follows the country selection
	$effect(() => {
		const c = atlas.country;
		if (!map || !ready) return;
		if (c && bboxes.has(c)) {
			map.fitBounds(bboxes.get(c)!, {
				padding: { top: 80, bottom: 160, left: 60, right: 60 },
				maxZoom: 5.2,
				duration: reduced ? 0 : 1200,
				essential: true
			});
		} else if (!c) overview(!reduced);
	});

	function toggleBasemap() {
		detailed = !detailed;
		applyBasemap();
	}

	function toggleProjection() {
		globe = !globe;
		map?.setProjection({ type: globe ? 'globe' : 'mercator' });
	}
</script>

<div class="relative h-full w-full overflow-hidden bg-[var(--map-water)]">
	<!-- maplibre's own CSS sets position: relative on this node, so size it explicitly -->
	<div
		bind:this={container}
		class="!h-full !w-full"
		role="region"
		aria-label="Map of initiatives by country"
	></div>

	{#if !ready && !failed}
		<div class="pointer-events-none absolute inset-0 grid place-items-center">
			<div class="size-40 animate-pulse rounded-full bg-[var(--map-land)]"></div>
		</div>
	{/if}
	{#if failed}
		<div class="absolute inset-0 grid place-items-center p-8 text-center text-sm text-muted">
			The interactive map could not start in this browser (WebGL is required). The list of
			initiatives works as usual.
		</div>
	{/if}

	{#if tooltip}
		{@const n = atlas.countryCounts[tooltip.name] ?? 0}
		<div
			class="pointer-events-none absolute z-10 w-max max-w-56 -translate-x-1/2 -translate-y-[calc(100%+2.2rem)] rounded-xl bg-ink px-3 py-2 text-paper shadow-lg"
			style:left="{tooltip.x}px"
			style:top="{tooltip.y}px"
			role="tooltip"
		>
			<p class="text-sm font-semibold">{tooltip.name}</p>
			<p class="text-xs opacity-80">
				{n} initiative{n === 1 ? '' : 's'}{#if describe && n}<br />{describe(tooltip.name)}{/if}
			</p>
		</div>
	{/if}

	<!-- Map controls -->
	<div class="absolute top-4 right-4 z-10 flex flex-col gap-2">
		<div
			class="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-sm backdrop-blur"
		>
			<button
				class="grid size-10 place-items-center hover:bg-sunken"
				aria-label="Zoom in"
				onclick={() => map?.zoomIn()}
			>
				<Icon name="plus" size={18} />
			</button>
			<button
				class="grid size-10 place-items-center border-t border-line hover:bg-sunken"
				aria-label="Zoom out"
				onclick={() => map?.zoomOut()}
			>
				<Icon name="minus" size={18} />
			</button>
		</div>
		<button
			class="grid size-10 place-items-center rounded-2xl border border-line bg-surface/90 shadow-sm backdrop-blur hover:bg-sunken"
			aria-label="Reset view"
			title="Reset view"
			onclick={() => (atlas.country ? atlas.selectCountry(null) : overview(true))}
		>
			<Icon name="reset" size={18} />
		</button>
		<button
			class="grid size-10 place-items-center rounded-2xl border border-line bg-surface/90 shadow-sm backdrop-blur hover:bg-sunken"
			aria-label={globe ? 'Switch to flat map' : 'Switch to globe'}
			title={globe ? 'Flat map' : 'Globe'}
			aria-pressed={globe}
			onclick={toggleProjection}
		>
			<Icon name={globe ? 'map' : 'globe'} size={18} />
		</button>
		{#if MAPBOX_TOKEN}
			<button
				class="grid size-10 place-items-center rounded-2xl border border-line bg-surface/90 shadow-sm backdrop-blur hover:bg-sunken"
				aria-label={detailed ? 'Show the minimal map' : 'Show the detailed map'}
				title={detailed ? 'Minimal map' : 'Detailed map'}
				aria-pressed={detailed}
				onclick={toggleBasemap}
			>
				<Icon name="layers" size={18} />
			</button>
		{/if}
	</div>
</div>

<style>
	:global(.atlas-marker) {
		--size: 0px;
		display: grid;
		place-items: center;
		width: var(--size);
		height: var(--size);
		border-radius: 999px;
		background: color-mix(in oklab, var(--teal) 92%, transparent);
		color: var(--paper);
		font:
			650 0.8rem/1 var(--font-sans),
			sans-serif;
		box-shadow:
			0 0 0 2.5px var(--surface),
			0 8px 20px -8px rgb(var(--shadow) / 0.6);
		transition:
			width 0.5s var(--ease-out-expo),
			height 0.5s var(--ease-out-expo),
			opacity 0.3s,
			background-color 0.3s,
			transform 0.3s var(--ease-out-expo);
		cursor: pointer;
	}
	:global(.atlas-marker[data-state='empty']) {
		opacity: 0;
		pointer-events: none;
	}
	:global(.atlas-marker[data-state='dim']) {
		opacity: 0.45;
	}
	:global(.atlas-marker[data-state='selected']) {
		background: var(--sun);
		color: #1b1305;
		box-shadow:
			0 0 0 3px var(--surface),
			0 0 0 7px color-mix(in oklab, var(--sun) 40%, transparent);
	}
	:global(.atlas-marker:hover),
	:global(.atlas-marker[data-hover='true']) {
		transform: scale(1.12);
		opacity: 1;
	}
	:global(.atlas-marker:focus-visible) {
		outline: 3px solid var(--leaf);
		outline-offset: 3px;
	}
	:global(.maplibregl-ctrl-attrib) {
		font-size: 10px;
		background: color-mix(in oklab, var(--surface) 80%, transparent) !important;
		color: var(--muted);
	}
	:global(.maplibregl-ctrl-attrib a) {
		color: var(--muted) !important;
	}
</style>
