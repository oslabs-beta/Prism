const path = require('path');
// import path from 'path';
const HTMLWebpackPlugin = require('html-webpack-plugin');
// import HTMLWebpackPlugin from 'html-webpack-plugin';
// import url from 'url';
// const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'client/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },

  plugins: [
    new HTMLWebpackPlugin({
      // filename: 'index.html',
      template: '/index.html',
    }),
  ],

  devServer: {
    host: 'localhost',
    port: '8080',
    hot: true,
    proxy: {
      '/': 'http://localhost:3333',
      secure: false,
      changeOrigin: true,
    },
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: 'build',
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
      // {
      //   test: /\\.(png|jp(e*)g|svg|gif)$/,
      //   use: ['file-loader'],
      // },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.png', '.svg'],
  },
};
