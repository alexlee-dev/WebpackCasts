const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  entry: "./src/index.js",
  mode: "production",
  module: {
    rules: [
      { use: "css-loader", test: /\.css$/ },
      {
        use: {
          loader: "babel-loader",
          options: {
            exclude: /node_modules/,
            presets: ["@babel/preset-env"],
          },
        },
        test: /\.js$/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 40000 },
          },
        ],
      },
    ],
  },
  optimization: {
    moduleIds: "hashed",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    publicPath: "build/",
  },
  plugins: [new HtmlWebpackPlugin({ title: "Webpack 2020" })],
};

module.exports = config;
