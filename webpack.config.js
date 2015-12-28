'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
