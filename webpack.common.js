const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      filename: 'manifest.json',
      name: 'Restaurant Web App',
      short_name: 'Restaurant App',
      description: 'Restaurant Web App No. 1',
      background_color: '#FFFFFF',
      theme_color: '#1e293b',
      start_url: './index.html',
      publicPath: '/',
      crossorigin: null,
      includeDirectory: true,
      icons: [
        {
          src: path.resolve('src/public/icons/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any maskable',
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
  ],
};
