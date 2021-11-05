const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', 'src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './template/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
