module.exports = {
	rootDir: '../../',
	moduleNameMapper: {
		'^@aktk/blocks/(.+)': '<rootDir>/src/blocks/$1',
		'^@aktk/blocks-old/(.+)': '<rootDir>/src/js/$1',
		'^@aktk/block-components/(.+)':
			'<rootDir>/src/aktk-block-components/$1',
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
