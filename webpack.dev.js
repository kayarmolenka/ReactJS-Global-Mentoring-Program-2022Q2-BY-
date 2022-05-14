const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    compress: true,
    https: true,
    open: true,
    port: process.env.PORT || 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
});
