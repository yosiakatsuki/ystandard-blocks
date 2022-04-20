const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		app: './src/js/app/app.js',
		'app-ie': './src/js/app/app-ie.js',
	},
	output: {
		filename: '[name].js',
		path: `${ __dirname }/js/app`,
	},
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [ '@babel/env' ],
							targets: {
								ie: '11',
								esmodules: true,
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			'@ystdb/config': path.resolve( __dirname, 'src/js/config' ),
			'@ystdb/components': path.resolve( __dirname, 'src/js/components' ),
			'@ystdb/helper': path.resolve( __dirname, 'src/js/helper' ),
			'@ystdb/util': path.resolve( __dirname, 'src/js/util' ),
		},
	},
};
