var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './kata.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'kata.bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
