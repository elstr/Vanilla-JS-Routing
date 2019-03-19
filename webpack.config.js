const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: "bundle.js",
    },
    node: {
        Buffer: false,
    },
    devServer: {
        open: false,
        historyApiFallback: true,
        port: 5000,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {
                                modules: false,
                            }],
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                }),
            },
            {
                test: /\.svg$/,
                use: { loader: 'svg-url-loader' }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CleanWebpackPlugin([path.join(__dirname, 'public')]),
        new ExtractTextPlugin("css/styles.css"),
    ]
}
