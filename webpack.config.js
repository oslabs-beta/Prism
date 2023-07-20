const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './client/index.js', // if index.js we'll use that
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, './client/index.html'),
    }),
  ],
  devServer: {
    proxy: {
      target: 'http://localhost:8080',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: 'build',
    },
  },
  module: {
    //rules array is executed in reverse order
    rules: [
      {
        //? matches the preceding item 0 or 1 times (could be .js or .jsx)
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },

      {
        // for CSS
        //this is a regexp
        //\. escapes the period
        //[] or
        //$ end of string
        //i not case sensitive
        test: /\.css$/i,
        use: [
          // creates 'style' nodes from JS strings
          'style-loader',
          // compiles CSS to commonJS
          'css-loader',
          'postcss-loader',
        ],
      },
      // handle images using url-loader - source:https://v4.webpack.js.org/loaders/url-loader/
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
