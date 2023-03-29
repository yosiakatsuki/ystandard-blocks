module.exports = {
	rootDir: '../../',
	moduleNameMapper: {
		'^@aktk/(.+)': '<rootDir>/src/js/$1',
	},
	preset: '@wordpress/jest-preset-default',
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
	testEnvironmentOptions: {
		url: 'http://localhost:10010/',
	},
	testPathIgnorePatterns: [
		'/.git/',
		'/node_modules/',
		'/integration/',
		'<rootDir>/js/',
		'<rootDir>/library/',
		'<rootDir>/vendor/',
		'<rootDir>/temp/',
	],
};
