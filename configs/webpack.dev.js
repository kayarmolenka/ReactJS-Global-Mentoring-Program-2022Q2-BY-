const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    compress: true,
    open: true,
    hot: true,
    port: 9100,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html',
      publicPath: '/',
      filename: 'index.html',
      favicon: 'src/public/favicon.ico',
    }),
    new HotModuleReplacementPlugin(),
  ],
});
