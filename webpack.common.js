const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  context: srcPath,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ['browser', 'module', 'main'],
  },
  entry: {
    app: ['babel-polyfill', './index.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'ignore-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendorGroup: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
      chunks: ['manifest', 'vendor', 'app'],
      chunksSortMode: 'manual',
    })
  ],
};
