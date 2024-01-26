var path = require('path');

module.exports = {
  mode: 'none',
  entry: './js/app.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map', // 빌드 전과 후의 결과물을 연결해 줌
};
