const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  output: {
    filename: "assets/js/[contenthash].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[contenthash].css",
    }),
    new CssMinimizerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[contenthash][ext]",
        },
      },
      {
        test: /\.css$/,
        type: "asset/resource",
        generator: {
          filename: "assets/css/[name][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[contenthash][ext]",
        },
      },
    ],
  },
}
