const defaultConfig = require('@wordpress/scripts/config/.eslintrc.js');

module.exports = {
	...defaultConfig,
	globals: {
		// @ts-ignore
		...defaultConfig.globals,
		ystdb: true,
		ystdbOption: true,
		ystdbIconList: true,
		ystdtbBlockEditor: true,
	},
	extends: [...defaultConfig.extends, 'plugin:tailwindcss/recommended'],
	rules: {
		// @ts-ignore
		...defaultConfig.rules,
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'@wordpress/no-unsafe-wp-apis': 'off',
		'jsdoc/require-returns-description': 'off',
		'jsdoc/require-param-type': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'jsdoc/check-param-names': 'off',
		'tailwindcss/no-custom-classname': 'off',
	},
	parserOptions: {
		requireConfigFile: false,
	},
};
