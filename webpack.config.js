const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');


module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?classPrefix',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new WebpackPwaManifest({
      name: 'Dan Beck Portfolio',
      short_name: 'Portfolio',
      description: 'My awesome portfolio Progressive Web App!',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      crossorigin: 'use-credentials',
      start_url: './index.html',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('./src/assets/img/icons/android-chrome-192x192.png'),
          size: '192x192',
          type: 'image/png',
        },
        {
          src: path.resolve('./src/assets/img/icons/android-chrome-384x384.png'),
          size: '384x384',
          type: 'image/png',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
