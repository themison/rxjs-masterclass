const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src", "index.ts"),
    schedulers: path.resolve(__dirname, "src", "schedulers.ts"),
    tipsAndTricks: path.resolve(__dirname, "src", "tips-n-tricks.ts"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: path.join(__dirname, "./build"),
    compress: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: ["ts-loader"],
        exclude: "/node_modules/",
      },
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".ts", ".js"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
