var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  devServer: {
      historyApiFallback: true,
      headers: { "Access-Control-Allow-Origin": "*" }
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
    query: {
        presets: ['es2015']
    }
  },
  { 
  test: /\.css$/,
  loader: "style-loader!css-loader"
},
{
    test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
    loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
}
    ]
  },

  plugins: [HTMLWebpackPluginConfig]
};