<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from './Icon.svelte';

	type Theme = 'light' | 'dark';
	let theme = $state<Theme>('light');

	function apply(next: Theme, persist: boolean) {
		const root = document.documentElement;
		// Switch every colour at once: suspend transitions for a frame so nothing
		// lingers half-way between the two themes
		root.classList.add('theme-switching');
		root.dataset.theme = next;
		theme = next;
		document
			.querySelectorAll('meta[name="theme-color"]')
			.forEach((m) => m.setAttribute('content', next === 'dark' ? '#0b1816' : '#f5f2ea'));
		if (persist) {
			try {
				localStorage.setItem('theme', next);
			} catch {
				/* private mode */
			}
		}
		requestAnimationFrame(() =>
			requestAnimationFrame(() => root.classList.remove('theme-switching'))
		);
		window.dispatchEvent(new CustomEvent('themechange', { detail: next }));
	}

	onMount(() => {
		theme = document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
		// Follow the operating system until the visitor picks a theme themselves
		const mq = matchMedia('(prefers-color-scheme: dark)');
		const onSystem = (e: MediaQueryListEvent) => {
			let stored: string | null = null;
			try {
				stored = localStorage.getItem('theme');
			} catch {
				/* private mode */
			}
			if (!stored) apply(e.matches ? 'dark' : 'light', false);
		};
		mq.addEventListener('change', onSystem);
		return () => mq.removeEventListener('change', onSystem);
	});
</script>

<button
	type="button"
	onclick={() => apply(theme === 'dark' ? 'light' : 'dark', true)}
	class="grid size-10 place-items-center rounded-full text-ink-soft transition hover:bg-sunken hover:text-ink"
	aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
	title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
>
	<Icon name={theme === 'dark' ? 'sun' : 'moon'} />
</button>
