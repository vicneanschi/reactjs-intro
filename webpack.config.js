const path = require('path');

var SRC_DIR = path.resolve(__dirname, "src");
var DIST_DIR = path.resolve(__dirname, "dist");

module.exports = {
  entry: SRC_DIR +  '/app/index.js',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR + "/app",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};
