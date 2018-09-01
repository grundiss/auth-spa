var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    bundle: "./src/client/browser.js"
  },
  output: {
    path: path.join(__dirname, "./dist/static"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"]
  }
};
