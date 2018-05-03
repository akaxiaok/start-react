const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
// 改用 express & webpack-dev-middleware
module.exports = merge.strategy({
  entry: 'replace', // or 'replace', defaults to 'append'
})(common, {
  mode: 'development',
  devtool: 'inline-source-map', // 生成 source-map 有多种类型
  entry: {
    index: ['react-hot-loader/patch', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', path.resolve(__dirname, 'src/index.jsx')], // 使用 webpack-hot-middleware 需要添加入口参数
  },
  output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方 // path.resolve 生成绝对路径
    filename: '[name].bundle.js',//打包后输出文件的文件名
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ReactApp'
    }), // 生成 html 文件
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 热替换 用于自定义的 server
  ],
});