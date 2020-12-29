const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    })
  ],
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3000,
    historyApiFallback: true
  }
}
