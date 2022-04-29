module.exports = {
	rootDir: '../../',
	moduleNameMapper: {
		'^@ystd/(.+)': '<rootDir>/src/js/$1',
	},
	preset: '@wordpress/jest-preset-default',
	transform: {
		'^.+\\.js$': 'babel-jest',
	},
};
