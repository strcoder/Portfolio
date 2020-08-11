const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

const isDev = (process.env.ENV === 'development');

const entry = ['./src/frontend/index.tsx'];

if (isDev) {
  entry.push('webpack-hot-middleware/client?path=__webpack_hrm&timeout=2000&reload=true');
}

module.exports = {
  entry,
  mode: process.env.ENV,
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: isDev ? '/' : path.resolve(__dirname, 'src/server/public'),
    filename: isDev ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isDev ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunk) => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [{
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            transpileOnly: true,
          },
        }],
        exclude: '/node_modules/',
      },
      {
        enforce: 'pre',
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jp?g)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[hash].[ext]',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
    isDev ? () => {} : new CompressionPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz',
    }),
    isDev ? () => {} : new ManifestPlugin(),
    isDev ? () => {} : new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'src/server/public'),
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? 'assets/app.css' : 'assets/app-[hash].css',
    }),
  ],
};
