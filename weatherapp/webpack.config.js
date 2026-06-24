const path = require("path");
const HtmlWebpackPlugin =
require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
module.exports = {

  mode: "development",

  entry: "./index.js",

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
     new Dotenv()
  ]
  
};