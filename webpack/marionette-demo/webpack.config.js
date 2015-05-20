// var webpack = require('webpack');

// var commonsPlugin =
//   new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports ={
  entry: "./app.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};