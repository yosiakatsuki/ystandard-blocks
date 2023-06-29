module.exports = (api) => {
	api.cache.using(() => process.env.NODE_ENV === 'development');
	return {
		presets: ['@wordpress/babel-preset-default'],
		plugins: ['babel-plugin-inline-json-import'],
	};
};
