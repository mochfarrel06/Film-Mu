const { merge } = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
  },
});
