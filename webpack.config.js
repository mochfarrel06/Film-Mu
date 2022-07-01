const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
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
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 70000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
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