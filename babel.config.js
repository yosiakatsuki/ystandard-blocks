module.exports = ( api ) => {
	api.cache.using( () => process.env.NODE_ENV === 'development' );
	return {
		presets: [ '@wordpress/babel-preset-default' ],
		plugins: [ '@emotion/babel-plugin', 'babel-plugin-inline-json-import' ],
	};
};
