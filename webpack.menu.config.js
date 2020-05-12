module.exports = {
	mode: "production",
	entry: {
		'menu-page': './src/js/admin/menu-page.js',
	},
	output: {
		filename: '[name].js',
		path: `${ __dirname }/js`
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
							]
						}
					}
				]
			},
			{
				test: /\.s(c|a)ss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						// Requires sass-loader@^7.0.0
						options: {
							implementation: require( 'sass' ),
							fiber: require( 'fibers' ),
							indentedSyntax: true // optional
						},
						// Requires sass-loader@^8.0.0
						options: {
							implementation: require( 'sass' ),
							sassOptions: {
								fiber: require( 'fibers' ),
								indentedSyntax: true // optional
							},
						},
					},
				],
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	performance: {
		maxEntrypointSize: 500000,
		maxAssetSize: 500000
	}
};
