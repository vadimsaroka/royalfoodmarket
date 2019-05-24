const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: { main: ["@babel/polyfill", "./src/js/index.js"] },
  output: {
    path: path.resolve(__dirname, "../server/dist"),
    filename: "[name].[chunkhash].js"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "../server/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*.js','*.css', '*.html', '*.jpeg', '*.jpg', '*.png', '!img']
    }),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: "./src/index.html",
      filename: "index.html"
    })
  ]
};
