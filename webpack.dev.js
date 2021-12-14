const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  optimization: {
    minimize: true,
  },
  devServer: {
    watchFiles: ["src/**/*.html"],
    port: 2000,
  },
  output: {
    filename: "assets/js/[name]-[contenthash].js",
    clean: false,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name]-[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name]-[contenthash][ext]",
        },
      },
      {
        test: /\.css$/,
        type: "asset/resource",
        generator: {
          filename: "assets/css/[name]-[contenthash][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name]-[contenthash][ext]",
        },
      },
    ],
  },
}
