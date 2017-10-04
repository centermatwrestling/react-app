module.exports = {
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  },
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'react-native-fcm': 'empty-module',
      'react-native': 'react-native-web',
      		'native-base' : 'native-base-web',
      'react-router-native': 'react-router-dom',
      		'react/lib/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistry'
      	}
  }
}
