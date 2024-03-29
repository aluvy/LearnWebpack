var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          // 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  devtool: 'source-map',
};
