const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
    ...defaultConfig,
    entry: {
        'ystandard-blocks': './src/js/ystandard-blocks.js',
        'ystandard-blocks-no-ystandard': './src/js/ystandard-blocks-no-ystandard.js'
    },
    output: {
        filename: '[name].js',
        path: `${__dirname}/js`
    }
};