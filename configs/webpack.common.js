const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const PATH = {
  SRC: path.join(__dirname, '../src'),
  DIST: path.join(__dirname, '../dist'),
};

module.exports = {
  entry: {
    main: path.join(PATH.SRC, 'index.tsx'),
  },
  output: {
    path: PATH.DIST,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new ForkTsCheckerWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
