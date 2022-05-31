module.exports = {
	rootDir: '../../',
	moduleNameMapper: {
		'^@aktk/(.+)': '<rootDir>/src/js/$1',
	},
	preset: '@wordpress/jest-preset-default',
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testURL: 'http://localhost:10010/',
	testPathIgnorePatterns: [
		'/.git/',
		'/node_modules/',
		'<rootDir>/js/',
		'<rootDir>/library/',
		'<rootDir>/vendor/',
		'<rootDir>/temp/',
	],
};
