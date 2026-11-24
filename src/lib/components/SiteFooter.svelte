<script lang="ts">
	import euFlag from '#lib/assets/brand/eu-flag.svg';
	import { FEEDBACK_URL, projects } from '#lib/data/content.ts';
	import Logo from './Logo.svelte';

	const year = new Date().getFullYear();
	const explore = [
		{ href: '/about', label: 'What is energy citizenship?' },
		{ href: '/map', label: 'Atlas of initiatives' },
		{ href: '/impacts', label: 'Impacts & futures' },
		{ href: '/resources', label: 'Resources' }
	];
</script>

<footer class="mt-24 border-t border-line bg-surface">
	<div class="container-page grid gap-12 py-16 lg:grid-cols-12">
		<div class="lg:col-span-5">
			<Logo />
			<p class="mt-5 max-w-md text-sm leading-relaxed text-ink-soft">
				A learning tool and data viewer on citizen participation in the European energy transition,
				bringing together four Horizon 2020 research projects.
			</p>
			<div class="mt-6 flex max-w-md gap-4">
				<img
					src={euFlag}
					alt="Flag of the European Union"
					class="h-12 w-auto shrink-0 rounded-sm"
				/>
				<p class="text-xs leading-relaxed text-muted">
					The ENCLUDE, DIALOGUES, EC2, and EnergyPROSPECTS projects have received funding from the
					European Union’s Horizon 2020 Research and Innovation Programme under grant agreements No
					101022791, 101022585, 101022565, and 101022492, respectively.
				</p>
			</div>
		</div>

		<nav aria-label="Footer" class="lg:col-span-3">
			<h2 class="kicker !font-sans">Explore</h2>
			<ul class="mt-4 space-y-2.5 text-sm">
				{#each explore as l (l.href)}
					<li><a class="text-ink-soft hover:text-ink" href={l.href}>{l.label}</a></li>
				{/each}
				<li>
					<a
						class="text-ink-soft hover:text-ink"
						href={FEEDBACK_URL}
						target="_blank"
						rel="noopener noreferrer"
					>
						Give feedback ↗
					</a>
				</li>
			</ul>
		</nav>

		<div class="lg:col-span-4">
			<h2 class="kicker !font-sans">The projects</h2>
			<ul class="mt-4 grid grid-cols-2 gap-3">
				{#each projects as p (p.key)}
					<li>
						<a
							href={p.href}
							target="_blank"
							rel="noopener noreferrer"
							class="grid h-20 place-items-center rounded-xl bg-white p-3 ring-1 ring-line transition hover:ring-ink-soft"
							title="{p.key} project website"
						>
							<img
								src={p.logo}
								alt="{p.key} project"
								class="max-h-12 w-auto object-contain"
								loading="lazy"
							/>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="border-t border-line">
		<div
			class="container-page flex flex-col gap-3 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between"
		>
			<p>© {year} ENCLUDE consortium</p>
			<p class="max-w-3xl md:text-right">
				The content of this page is for information purposes only. The European Commission or CINEA
				does not accept responsibility for any use made of the information contained therein.
			</p>
		</div>
	</div>
</footer>
