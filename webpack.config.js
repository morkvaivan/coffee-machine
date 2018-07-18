module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: './src/bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
    ],
  },
};