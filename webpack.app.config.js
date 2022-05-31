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
			'@aktk/config': path.resolve( __dirname, 'src/js/config' ),
			'@aktk/components': path.resolve( __dirname, 'src/js/components' ),
			'@aktk/controls': path.resolve( __dirname, 'src/js/controls' ),
			'@aktk/helper': path.resolve( __dirname, 'src/js/helper' ),
			'@aktk/util': path.resolve( __dirname, 'src/js/util' ),
		},
	},
	cache: false,
};
