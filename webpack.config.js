const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const data = require('./data-file.json');

const ejsDirectory = path.resolve(__dirname, 'src', 'ejs');
const ejsFiles = fs.readdirSync(ejsDirectory);
const HtmlWebpackPlugins = ejsFiles
  .filter((file) => path.extname(file) === '.ejs')
  .map((file) => path.basename(file, '.ejs'))
  .map((e) => new HtmlWebpackPlugin({
    template: path.resolve(ejsDirectory, `${e}.ejs`),
    filename: `${e}.html`,
    minify: false,
  }));

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/built.js',
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
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.mp4$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/video/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/font/[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    ...HtmlWebpackPlugins,
    new MiniCssExtractPlugin({
      filename: 'assets/css/built.css',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [
      new EsbuildPlugin({
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
