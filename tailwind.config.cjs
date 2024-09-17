/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/tw-elements/dist/js/**/*.js',
		'./node_modules/layerchart/**/*.{svelte,js}'
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins'],
				mono: ['Consolas']
			  },
			  colors: {
				'surface-100': 'oklch(var(--b1) / <alpha-value>)',
				'surface-200': 'oklch(var(--b2) / <alpha-value>)',
				'surface-300': 'oklch(var(--b3) / <alpha-value>)',
				'surface-content': 'oklch(var(--bc) / <alpha-value>)',
			  }
		}
	},
	daisyui: {
		themes: ["emerald","dark"],
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
	},
	darkMode:['class', '[data-theme="dark"]'],
	plugins: [require('@tailwindcss/typography'), require("daisyui","tw-elements/dist/plugin.cjs")]
};

module.exports = config;