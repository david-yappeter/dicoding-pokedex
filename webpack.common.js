const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // style and css loader
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader' },
        ],
      },
      {
        // Extract any SCSS content and minimize
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // Hmtl Webpack Plugin
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    // Extract any CSS from any javascript file to process it as LESS/SASS using a loader
    new MiniCssExtractPlugin({
      filename: 'styles/[name].bundle.css',
    }),

    // Minify CSS assets
    new CssMinimizerWebpackPlugin({}),

    // Copy Assets
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/assets/'), to: 'assets/' },
      ],
    }),
  ],
};
