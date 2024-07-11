/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [ './src/**/*.{html,js,jsx,ts,tsx}' ],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				'aktk-blue': '#07689f',
				'admin-gray': '#aaaaaa',
				'notice-error': '#ae3b43',
				'aktk-text-red': '#C9323F',
				'aktk-text-yellow': '#F2B031',
				'aktk-text-green': '#2A8C44',
				'aktk-text-blue': '#06669E',
				'aktk-text-gray': '#989EA1',
				'aktk-bg-red': '#FEC5C5',
				'aktk-bg-yellow': '#FFF4C2',
				'aktk-bg-green': '#C7FDDF',
				'aktk-bg-blue': '#B7D7FD',
				'aktk-bg-gray': '#ECEDF0',
				'aktk-border-gray': '#D7DADD',
				'aktk-border-light-gray': '#ECEDF0',
			},
			fontSize: {
				'fz-xxs': '10px',
				'fz-xs': '12px',
				'fz-s': '14px',
				'fz-base': '16px',
				'fz-label': '18px',
				'fz-label-l': '20px',
			},
			fontFamily: {
				orbitron: [ 'Orbitron', 'sans-serif' ],
			},
		},
	},
	plugins: [],
};
