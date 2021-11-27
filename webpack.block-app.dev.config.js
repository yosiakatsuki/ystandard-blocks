const productionConfig = require( "./webpack.block-app.config.js" );

module.exports = {
	...productionConfig,
	mode: 'development',
};
