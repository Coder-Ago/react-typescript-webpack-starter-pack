const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const postcssAutoPrefixer = require('autoprefixer');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              plugins: [
                postcssAutoPrefixer(),
              ]
            }
          },

          'sass-loader'
        ]
      },
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ],
};
