/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/tw-elements/dist/js/**/*.js'
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins'],
			  },
		}
	},
	daisyui: {
		themes: ["dark", "emerald","halloween"],
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
	},
	plugins: [require('@tailwindcss/typography'), require("daisyui","tw-elements/dist/plugin.cjs")]
};

module.exports = config;