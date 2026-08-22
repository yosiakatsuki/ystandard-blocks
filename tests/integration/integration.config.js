/**
 * integration テスト用 jest 設定
 *
 * Gutenberg コアの fixture-based test と同等のテストを実行する。
 * tests/integration/fixtures/blocks/ 配下の HTML/JSON ペアを parse / serialize して比較する。
 */
module.exports = {
	rootDir: '../../',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: [ '<rootDir>/tests/integration/setup-tests.js' ],
	moduleNameMapper: {
		// RichTextとブロックシリアライザーが同じElement実装を使うように統一する.
		'^@wordpress/element$':
			'<rootDir>/node_modules/@wordpress/blocks/node_modules/@wordpress/element',
		// rich-text型のinstanceof判定がパッケージの解決元で分かれないように統一する.
		'^@wordpress/rich-text$': '<rootDir>/node_modules/@wordpress/rich-text',
		'^@aktk/blocks/(.+)': '<rootDir>/src/blocks/$1',
		'^@aktk/blocks-old/(.+)': '<rootDir>/src/js/$1',
		'^@aktk/block-components/(.+)':
			'<rootDir>/src/aktk-block-components/$1',
		'^@aktk/(.+)': '<rootDir>/src/js/$1',
		// nested 解決される @wordpress/private-apis も含めて mock 実装に統一する.
		'@wordpress/private-apis$':
			'<rootDir>/tests/integration/__mocks__/wordpress-private-apis.js',
		'\\.css$': 'identity-obj-proxy',
		'\\.scss$': 'identity-obj-proxy',
	},
	preset: '@wordpress/jest-preset-default',
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
	},
	// node_modules 内の ESM パッケージも babel-jest で transform する.
	transformIgnorePatterns: [
		'/node_modules/(?!(parsel-js|@wordpress|@babel|change-case|memize|fast-deep-equal|hast-util-|unist-util-|mdast-util-|micromark|decode-named-character-reference|character-entities|property-information|space-separated-tokens|comma-separated-tokens|web-namespaces|ccount|escape-string-regexp|markdown-table|zwitch|longest-streak|trim-lines|uuid)/)',
	],
	testMatch: [ '<rootDir>/tests/integration/**/*.test.[jt]s?(x)' ],
	testPathIgnorePatterns: [
		'/.git/',
		'/node_modules/',
		'<rootDir>/build/',
		'<rootDir>/vendor/',
	],
};
