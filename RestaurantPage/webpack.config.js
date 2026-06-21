const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",

output: {
  filename: "main.js",
  publicPath: "/odin-project/RestaurantPage/dist/"
},

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ],

  mode: "development"
};