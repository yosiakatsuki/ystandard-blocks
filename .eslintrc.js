const defaultConfig = require( "@wordpress/scripts/config/.eslintrc.js" );

module.exports = {
	...defaultConfig,
	globals: {
		...defaultConfig.globals,
		ystdb: true,
		ystdbOption: true,
		ystdbIconList: true,
	},
	rules: {
		...defaultConfig.rules,
		"import/no-unresolved": "off",
		"import/no-extraneous-dependencies": "off",
		"@wordpress/no-unsafe-wp-apis": "off",
	},
	parser: "babel-eslint",
	parserOptions: {
		requireConfigFile: false
	}
};
