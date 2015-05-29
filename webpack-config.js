
var webpack = require('webpack'),
    path = require('path');

module.exports = {
  dev: {
    // The dev build loads Sass in the bundle, so it works with Hot Module Replacement
    name: 'dev',
    devtool: 'eval',
    debug: true,
    entry: [
      'webpack-dev-server/client?http://localhost:1984',
      'webpack/hot/only-dev-server',
      './src/styles/main.scss',
      './src/client.js'
    ],

    output: {
      path: __dirname + '/build/',
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          // Query parameters are passed to node-sass
          loader: "style!css!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&" +
            "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
        }
      ]
    }
  },

  client: {
    name: 'client',
    entry: [
      './src/client.js'
    ],

    output: {
      path: __dirname + '/build/',
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
             warnings: false
         }
      })
    ],

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    }
  },

  server: {
    name: 'server',
    entry: [,
      './src/server.js'
    ],

    target: "node",

    output: {
      path: __dirname,
      filename: 'server.js',
      libraryTarget: "commonjs2"
    },

    externals: /^[a-z\-0-9]+$/,
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
             warnings: false
         }
      })
    ],

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    }
  }
};
