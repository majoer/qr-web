const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './webapp/app.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  node: {
    fs: "empty"
  },
  plugins: [new HtmlWebpackPlugin({
    template: __dirname + '/webapp/index.html'
  })]
};
