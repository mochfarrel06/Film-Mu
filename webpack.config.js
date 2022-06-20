const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
              ],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/,
              use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Film-Mu',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                  from: path.resolve(__dirname, 'src/assets/'),
                  to: path.resolve(__dirname, 'dist/'),
                },
                {
                  from: path.resolve(__dirname, 'src/public/icons/'),
                  to: path.resolve(__dirname, 'dist/'),
                },
                {
                  from: path.resolve(__dirname, 'src/public/manifest.json'),
                  to: path.resolve(__dirname, 'dist/')
                },
            ],
        }),
    ],
};