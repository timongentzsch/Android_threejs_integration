const path = require('path');
const pkg = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const buildPath = '../build/';

module.exports = {
  entry: ['./src/gltf_example.js'],
  output: {
    path: path.join(__dirname, buildPath),
    filename: '[chunkhash].js',
    clean: true
  },
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: path.resolve(__dirname, './node_modules/')
      },
      {
        test: /\.(jpe?g|png|hdr|gif|svg|tga|glb|gltf|babylon|mtl|pcb|pcd|prwm|obj|mat|mp3|ogg)$/i,
        type: 'asset/resource',
        exclude: path.resolve(__dirname, './node_modules/')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({'title': 'Three js sample project'})
  ]
}
