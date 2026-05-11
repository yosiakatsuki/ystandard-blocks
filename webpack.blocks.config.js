// @ts-ignore
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const v2Config = require( './webpack.blocks.v2.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	// CopyPlugin はブロックビルド用に src/**/block.json と PHP を出力先へ複製するが、
	// 当 config はブロックビルドではないため出力先（js/blocks/）に不要なミラーが
	// 出来てしまう。除外する。
	plugins: defaultConfig.plugins.filter(
		( plugin ) => plugin.constructor.name !== 'CopyPlugin'
	),
	entry: {
		block: './src/js/block/block.js',
		'inline-style': './blocks/inline-style/index.js',
	},
	output: {
		filename: '[name].js',
		path: `${ __dirname }/js/blocks`,
	},
	module: {
		rules: [ ...defaultConfig.module.rules ],
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			...v2Config.resolve.alias,
			'@aktk/config': path.resolve( __dirname, 'src/js/config' ),
			'@aktk/components': path.resolve( __dirname, 'src/js/components' ),
			'@aktk/controls': path.resolve( __dirname, 'src/js/controls' ),
			'@aktk/helper': path.resolve( __dirname, 'src/js/helper' ),
			'@aktk/util': path.resolve( __dirname, 'src/js/util' ),
		},
	},
	cache: false,
};
