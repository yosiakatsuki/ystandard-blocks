// @ts-ignore
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			'@aktk/blocks': path.resolve( __dirname, 'src/blocks' ),
			'@aktk/block-components': path.resolve(
				__dirname,
				'src/aktk-block-components'
			),
			'@aktk/blocks-old': path.resolve( __dirname, 'src/js' ),
			// 旧 v1 ブロックから移行したファイルの import 互換用.
			'@aktk/config': path.resolve( __dirname, 'src/js/config' ),
			'@aktk/components': path.resolve( __dirname, 'src/js/components' ),
			'@aktk/controls': path.resolve( __dirname, 'src/js/controls' ),
			'@aktk/helper': path.resolve( __dirname, 'src/js/helper' ),
			'@aktk/util': path.resolve( __dirname, 'src/js/util' ),
		},
	},
	cache: false,
};
