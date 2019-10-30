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
    },
    module : {
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
