const wordpress = require('@wordpress/eslint-plugin');
const tailwindcss = require('eslint-plugin-tailwindcss');

module.exports = [
	{
		ignores: [
			'**/build/**',
			'**/node_modules/**',
			'**/vendor/**',
			'blocks/**/deprecated/*.js',
			// カード・セクションブロックは v2 移行過渡期のため一時除外。
			// 詳細は docs/TODO.md の「カード・セクションブロックの lint 対応」参照。
			'src/blocks/block-library/card/**',
			'src/blocks/block-library/section/**',
		],
	},
	...wordpress.configs.recommended,
	...wordpress.configs['test-unit'].map((c) => ({
		...c,
		files: ['**/test/**/*.js', '**/__tests__/**/*.js', '**/?(*.)test.js'],
	})),
	...tailwindcss.configs['flat/recommended'],
	{
		languageOptions: {
			globals: {
				ystdb: 'readonly',
				ystdbOption: 'readonly',
				ystdbIconList: 'readonly',
				ystdtbBlockEditor: 'readonly',
			},
		},
		rules: {
			'import/no-unresolved': 'off',
			'import/no-extraneous-dependencies': 'off',
			'@wordpress/no-unsafe-wp-apis': 'off',
			'jsdoc/require-returns-description': 'off',
			'jsdoc/require-param-type': 'off',
			'jsdoc/check-param-names': 'off',
			'jsdoc/no-undefined-types': 'off',
			'react-hooks/exhaustive-deps': 'off',
			'tailwindcss/no-custom-classname': 'off',
		},
	},
	{
		// UIkit / Vue 利用の管理画面スクリプトでは React フック検出ルールが誤検知する。
		files: ['src/js/admin/**/*.js'],
		rules: {
			'react-hooks/rules-of-hooks': 'off',
		},
	},
];
