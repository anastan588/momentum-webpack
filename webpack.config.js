const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader:"css-loader",
          options: {
            url: false,
            import: true,
        }
        },
          "postcss-loader",
          "sass-loader",
        ],
        
      },
      {
        test: /\.(jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
            filename: path.join('assets', 'img/[name][ext]'),
            },
        },
        {
        test: /\.(png|svg)$/,
        type: 'asset/resource',
        generator: {
        filename: path.join('assets', 'svg/[name][ext]'),
        },
        },
        {
            test: /\.mp3$/i,
            type: "asset/resource",
            generator: {
              filename: path.join("assets", "sounds/[name][ext]"),
            },
          },
          {
            test: /\.ico$/i,
            type: "asset/resource",
            generator: {
              filename: path.join("assets", "[name][ext]"),
            },
          },
          {
            test: /\.(woff2?|eot|ttf|otf)$/i,
            type: "asset/resource",
            generator: {
              filename: path.join("assets", "fonts/[name][ext]"),
            },
          },
          {
            test: /\.json$/i,
            type: "asset/resource",
            generator: {
              filename: path.join("assets", "json/[name][ext]"),
            },
          },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
    filename: 'styles.[contenthash:8].css',
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ["dist"],
        },
      },
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 9000,
  },
};
