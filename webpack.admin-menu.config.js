const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'inline-style': './src/js/admin-menu/inline-style/index.js',
	},
	output: {
		filename: '[name].js',
		path: `${ __dirname }/js/admin-menu`
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			'@ystdb/config': path.resolve( __dirname, 'src/js/config' ),
			'@ystdb/components': path.resolve( __dirname, 'src/js/components' ),
			'@ystdb/helper': path.resolve( __dirname, 'src/js/helper' ),
			'@ystdb/util': path.resolve( __dirname, 'src/js/util' ),
		}
	},
	performance: {
		maxEntrypointSize: 500000,
		maxAssetSize: 500000
	}
};
