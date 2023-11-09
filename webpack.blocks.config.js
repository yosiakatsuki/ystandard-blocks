// @ts-ignore
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const v2Config = require('./webpack.blocks.v2.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		block: './src/js/block/block.js',
		'svg-icon': './blocks/svg-icon/index.js',
		columns: './blocks/columns/index.js',
		column: './blocks/columns/item/index.js',
		section: './blocks/section/index.js',
		heading: './blocks/heading/index.js',
		balloon: './blocks/balloon/index.js',
		card: './blocks/card/index.js',
		'inline-style': './blocks/inline-style/index.js',
	},
	output: {
		filename: '[name].js',
		path: `${__dirname}/js/blocks`,
	},
	module: {
		rules: [...defaultConfig.module.rules],
	},
	resolve: {
		...defaultConfig.resolve,
		alias: {
			...defaultConfig.resolve.alias,
			...v2Config.resolve.alias,
			'@aktk/config': path.resolve(__dirname, 'src/js/config'),
			'@aktk/components': path.resolve(__dirname, 'src/js/components'),
			'@aktk/controls': path.resolve(__dirname, 'src/js/controls'),
			'@aktk/helper': path.resolve(__dirname, 'src/js/helper'),
			'@aktk/util': path.resolve(__dirname, 'src/js/util'),
		},
	},
	cache: false,
};
