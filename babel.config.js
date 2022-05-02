module.exports = ( api ) => {
	api.cache( false );

	return {
		presets: [ '@wordpress/babel-preset-default' ],
		plugins: [ '@emotion/babel-plugin', 'babel-plugin-inline-json-import' ],
	};
};
