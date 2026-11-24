<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { FEEDBACK_URL } from '#lib/data/content.ts';
	import Icon from './Icon.svelte';
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const nav = [
		{ href: '/about', label: 'About' },
		{ href: '/map', label: 'Atlas' },
		{ href: '/impacts', label: 'Impacts' },
		{ href: '/resources', label: 'Resources' }
	];

	let menu: HTMLDialogElement | undefined = $state();
	let scrolled = $state(false);

	const isActive = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(href + '/');

	function openMenu() {
		menu?.showModal();
		// Keep the page behind the full-screen sheet still
		document.documentElement.style.overflow = 'hidden';
	}
	function closeMenu() {
		menu?.close();
	}

	afterNavigate(closeMenu);
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 8)} />

<header
	class="sticky top-0 z-40 border-b transition-colors duration-300
	{scrolled
		? 'border-line bg-paper/85 backdrop-blur-xl'
		: 'border-transparent bg-paper/60 backdrop-blur-md'}"
>
	<div class="container-page flex h-16 items-center justify-between gap-6">
		<a href="/" class="-ml-1 rounded-full p-1" aria-label="EnergyCitizenship.eu home">
			<Logo />
		</a>

		<nav aria-label="Main" class="hidden md:block">
			<ul class="flex items-center gap-1">
				{#each nav as item (item.href)}
					<li>
						<a
							href={item.href}
							aria-current={isActive(item.href) ? 'page' : undefined}
							class="relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition
							{isActive(item.href) ? 'bg-ink text-paper' : 'text-ink-soft hover:bg-sunken hover:text-ink'}"
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-1">
			<a
				href={FEEDBACK_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="hidden rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-sunken hover:text-ink lg:inline-flex"
			>
				Give feedback
			</a>
			<ThemeToggle />
			<button
				type="button"
				class="grid size-10 place-items-center rounded-full text-ink transition hover:bg-sunken md:hidden"
				aria-label="Open menu"
				aria-haspopup="dialog"
				onclick={openMenu}
			>
				<Icon name="menu" size={22} />
			</button>
		</div>
	</div>
</header>

<!-- Mobile menu: a native modal dialog (focus trap, Esc to close, inert background) -->
<dialog
	bind:this={menu}
	class="m-0 h-dvh max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-ink/40 open:animate-[menu-in_.35s_var(--ease-out-expo)]"
	aria-label="Menu"
	onclose={() => (document.documentElement.style.overflow = '')}
>
	<div class="container-page flex h-16 items-center justify-between">
		<Logo />
		<button
			type="button"
			class="grid size-10 place-items-center rounded-full hover:bg-sunken"
			aria-label="Close menu"
			onclick={() => menu?.close()}
		>
			<Icon name="close" size={22} />
		</button>
	</div>
	<nav aria-label="Mobile" class="container-page mt-6">
		<ul class="divide-y divide-line border-y border-line">
			<li>
				<a
					href="/"
					onclick={closeMenu}
					aria-current={page.url.pathname === '/' ? 'page' : undefined}
					class="flex items-center justify-between py-5 font-display text-3xl aria-[current=page]:text-leaf"
				>
					Home <Icon name="arrow" class="text-muted" />
				</a>
			</li>
			{#each nav as item (item.href)}
				<li>
					<a
						href={item.href}
						onclick={closeMenu}
						aria-current={isActive(item.href) ? 'page' : undefined}
						class="flex items-center justify-between py-5 font-display text-3xl aria-[current=page]:text-leaf"
					>
						{item.label}
						<Icon name="arrow" class="text-muted" />
					</a>
				</li>
			{/each}
		</ul>
		<a
			href={FEEDBACK_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-ghost mt-8 w-full justify-center"
			onclick={closeMenu}
		>
			Give feedback <Icon name="external" size={16} />
		</a>
	</nav>
</dialog>

<style>
	@keyframes -global-menu-in {
		from {
			opacity: 0;
			transform: translateY(-12px);
		}
	}
</style>
