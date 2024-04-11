const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const data = require('./data-file.json');

const HtmlWebpackPlugins = data.indexList.map((e) => new HtmlWebpackPlugin({
  template: `./src/ejs/${e.fileName}.ejs`,
  filename: `${e.fileName}.html`,
  minify: false,
}));

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    // publicPath: './',
    path: path.resolve(__dirname, 'dist'),
    filename: './lib/built/built.js',
  },
  module: {
    rules: [
      {
        test: /\.ejs$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
          {
            loader: 'template-ejs-loader',
            options: {
              data,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2015',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: './lib/img/[name][ext]',
        },
      },
      {
        test: /\.mp4$/i,
        type: 'asset/resource',
        generator: {
          filename: './lib/video/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './lib/font/[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    ...HtmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: './lib/built/built.css',
    }),
    new ESLintPlugin(),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new EsbuildPlugin({
        target: 'es2015',
        css: true,
      }),
    ],
  },
  devServer: {
    hot: true,
  },
  performance: {
    hints: false,
  },
};
