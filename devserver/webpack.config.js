var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__filename, 'dist'),
  },
  devServer: {
    port: 9000,
    overlay: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해 줌
      template: 'index.html',
    }),
  ],
  devtool: 'source-map',
};
