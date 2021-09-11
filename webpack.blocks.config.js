const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		'app': './src/js/app/app.js',
		'app-ie': './src/js/app/app-ie.js',
		'block': './src/js/block/block.js',
		'svg-button': './blocks/svg-button/index.js',
		'svg-icon': './blocks/svg-icon/index.js',
		'svg-button-link': './blocks/svg-button-link/index.js',
		'columns': './blocks/columns/index.js',
		'column': './blocks/columns/item/index.js',
		'section': './blocks/section/index.js',
		'heading': './blocks/heading/index.js',
		'balloon': './blocks/balloon/index.js',
		'card': './blocks/card/index.js',
		'conditional-group-block': './blocks/conditional-group-block/index.js',
		'inline-style': './blocks/inline-style/index.js',
	},
	output: {
		filename: '[name].js',
		path: `${ __dirname }/js/blocks`
	},
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader?name=../font/[name].[ext]'
			}
		]
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
};
