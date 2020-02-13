const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );

module.exports = {
	...defaultConfig,
	entry: {
		'app': './src/js/app/app.js',
		'block': './src/js/block/block.js',
		'icons': './src/js/components/icon-select/app.js',
		'button': './blocks/button/index.js',
		'columns': './blocks/columns/index.js',
		'column': './blocks/columns/item/index.js',
		'fa-icon': './blocks/fa-icon/index.js',
		'section': './blocks/section/index.js',
		'heading': './blocks/heading/index.js',
		'balloon': './blocks/balloon/index.js',
		'button-link': './blocks/button-link/index.js',
		'card': './blocks/card/index.js',
		'format': './blocks/format/index.js'
	},
	output: {
		filename: '[name].js',
		path: `${ __dirname }/js`
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
	}
};
