<script lang="ts" module>
	// Stroke icons, 24×24 grid
	const paths = {
		arrow: 'M5 12h14M13 6l6 6-6 6',
		'arrow-left': 'M19 12H5M11 18l-6-6 6-6',
		external: 'M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
		pdf: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4',
		menu: 'M4 7h16M4 12h16M4 17h10',
		close: 'M6 6l12 12M18 6L6 18',
		search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4',
		filter: 'M4 6h16M7 12h10M10 18h4',
		chevron: 'M6 9l6 6 6-6',
		'chevron-right': 'M9 6l6 6-6 6',
		play: 'M7 5v14l12-7z',
		pause: 'M8 5v14M16 5v14',
		sun: 'M12 4V2M12 22v-2M4.9 4.9 3.5 3.5M20.5 20.5l-1.4-1.4M4 12H2M22 12h-2M4.9 19.1l-1.4 1.4M20.5 3.5l-1.4 1.4M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z',
		moon: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z',
		globe:
			'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
		map: 'M9 4 3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14',
		list: 'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01',
		reset: 'M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4',
		plus: 'M12 5v14M5 12h14',
		minus: 'M5 12h14',
		quote: 'M9 7H5v6h4v-2a4 4 0 0 1-4 4M19 7h-4v6h4v-2a4 4 0 0 1-4 4',
		calendar:
			'M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 10h16M8 3v4M16 3v4',
		pin: 'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
		users:
			'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 19v-1a4 4 0 0 0-3-3.9M15 4.1a3 3 0 0 1 0 5.8',
		spark: 'M13 2 4 14h7l-1 8 9-12h-7z',
		check: 'M5 12.5l4.5 4.5L19 7',
		layers: 'M12 3 3 8l9 5 9-5zM3 12.5l9 5 9-5M3 17l9 5 9-5',
		book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h7'
	} as const;
	export type IconName = keyof typeof paths;
</script>

<script lang="ts">
	let {
		name,
		size = 20,
		stroke = 1.8,
		class: klass = '',
		label
	}: { name: IconName; size?: number; stroke?: number; class?: string; label?: string } = $props();
	const filled = $derived(name === 'play');
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill={filled ? 'currentColor' : 'none'}
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	class="shrink-0 {klass}"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
>
	<path d={paths[name]} />
</svg>
