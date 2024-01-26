var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/', // cdn 배포 시 주소와 관련되어 있음
    filename: 'build.js',
  },
  // loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
        // css-loader로 css파일을 webpack(js)에 포함 후 vue-style-lodaer를 실행함
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {},
          // other vue-loader options go here
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/, // 제외폴더
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  // 웹팩으로 파일을 해석해나갈때 파일의 해석 방식을 정의함
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // vue$파일은 이 파일로 해석하겠다
    },
    extensions: ['*', '.js', '.vue', '.json'], // import { sum } from './math' 시 확장자 제외 옵션
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
  },
  // 결과물 크기에 관련하여 웹팩이 설정한 크기를 넘어갔을 때 경고를 주는. 성능 관련 된 힌트
  performance: {
    hints: false,
  },
  devtool: '#eval-source-map',
};

// webpack 3 에서 사용하던 옵션

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
