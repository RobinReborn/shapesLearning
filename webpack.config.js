var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './djangoCode/frontend/static/js/',

  output: {
      path: path.resolve('djangoCode/frontend/static/bundles/'),
      filename: "[name]-[hash].js",
  },
  devtool: 'source-map',
  plugins: [
    new BundleTracker({filename: 'djangoCode/webpack-stats.json'}),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};
