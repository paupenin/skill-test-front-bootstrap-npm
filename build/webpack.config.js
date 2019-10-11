const path = require("path");
const rootPath = process.cwd();

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

const config = {
  output: {
    html: "dist/index.html",
    script: "dist/[name]/bundle.js",
    style: "dist/css/bundle.css"
  },
  paths: {
    html: path.join(rootPath, "src/views/index.html"),
    script: path.join(rootPath, "src/scripts/main.js"),
    sass: path.join(rootPath, "src/sass/main.scss")
  }
};

module.exports = {
  devServer: {
    contentBase: path.join(rootPath, 'dist'),
    compress: true,
    port: 3000,
    liveReload: true,
    writeToDisk: (filePath) => {
      return /\.html$/.test(filePath);
    }
  },
  entry: {
    css: config.paths.sass,
    js: config.paths.script
  },
  output: {
    path: rootPath,
    filename: config.output.script
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: config.output.html,
      template: config.paths.html,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: config.output.style,
      ignoreOrder: true
    }),
    new RemovePlugin({
      before: {
        include: ["dist"]
      },
      after: {
        test: [
          {
            folder: "dist/css",
            method: filePath => {
              return new RegExp(/\.js$/, "m").test(filePath);
            }
          }
        ]
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: config.paths.sass,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
