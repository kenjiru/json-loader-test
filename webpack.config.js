const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
/*
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
*/
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
