const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');


module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      img: path.resolve(__dirname, 'src/assets/img')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'img',
              name: '[name]-[sha1:hash:7].[ext]'
            }
          },
        ],
      },

      {
        test: /\.svg$/,
        use: [ 'vue-loader', 'vue-svg-loader' ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      title: 'StroyPortal',
    }),
    new VueLoaderPlugin()
  ],
};
