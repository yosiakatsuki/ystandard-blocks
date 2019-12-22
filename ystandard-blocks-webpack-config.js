const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
    ...defaultConfig,
    entry: {
       'app': './src/js/app/app.js',
       'button': './block/button/index.js',
       'columns': './block/columns/index.js',
       'column': './block/columns/item/index.js',
       'fa-icon': './block/fa-icon/index.js',
       'section': './block/section/index.js',
       'button-link': './block/button-link/index.js',
       'format': './block/format/index.js',
       'extend-core': './block/extend-core/index.js',
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
