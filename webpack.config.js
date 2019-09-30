const webpack = require('webpack')
const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  // mode: "production",
  // 开启source-map
  devtool: "eval-source-map",
  entry: {
    'index': path.resolve(__dirname, 'src/index.ts'),
    'hello': path.resolve(__dirname, 'src/hello.ts'),
    'vendor': path.resolve(__dirname, 'src/vendor.ts'),
    'polyfill': 'babel-polyfill'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new htmlPlugin({filename: "index.html", chunks: ['index']}),
    new htmlPlugin({filename: "hello.html", chunks: ['hello']}),
  ],
  module: {
    rules: [{
      // 解析typescript
      test: /tsx?$/,
      use: ['babel-loader', 'ts-loader'],
      exclude: '/node_modules'
    },{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
  },

}

