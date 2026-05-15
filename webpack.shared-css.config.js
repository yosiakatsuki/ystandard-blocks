const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

// CopyPluginとPhpFilePathsPluginを除外（CSS専用ビルドには不要）
const plugins = defaultConfig.plugins.filter( ( plugin ) => {
	const name = plugin.constructor.name;
	return name !== 'CopyPlugin' && name !== 'PhpFilePathsPlugin';
} );

module.exports = {
	...defaultConfig,
	entry: {
		'aktk-components-editor':
			'./src/aktk-block-components/index.css',
	},
	output: {
		...defaultConfig.output,
		path: path.resolve( __dirname, 'build/shared' ),
		clean: true,
	},
	plugins,
};
