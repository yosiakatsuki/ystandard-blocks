const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
    ...defaultConfig,
    entry: {
        'ystandard-blocks': './src/ystandard-blocks.js'
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/js`
    }
};