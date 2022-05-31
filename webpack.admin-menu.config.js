const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'inline-style': './src/js/admin-menu/inline-style/index.js',
		balloon: './src/js/admin-menu/balloon/index.js',
	},
	output: {
		filename: '[name].js',
		path: `${ __dirname }/js/admin-menu`,
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			'@aktk/config': path.resolve( __dirname, 'src/js/config' ),
			'@aktk/components': path.resolve( __dirname, 'src/js/components' ),
			'@aktk/controls': path.resolve( __dirname, 'src/js/controls' ),
			'@aktk/helper': path.resolve( __dirname, 'src/js/helper' ),
			'@aktk/util': path.resolve( __dirname, 'src/js/util' ),
		},
	},
	performance: {
		maxEntrypointSize: 500000,
		maxAssetSize: 500000,
	},
	cache: false,
};
