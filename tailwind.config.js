/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				'aktk-blue': '#07689f',
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
			},
		},
	},
	plugins: [],
	important: true,
};
