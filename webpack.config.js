const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    //publicPath: "/public",
    // contentBase: "./public",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: 'index.html',
        template: './public/index.html',
        inject: true
    })
]
};
