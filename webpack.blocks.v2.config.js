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
		},
	},
	cache: false,
};
