module.exports = {
  entry: './testProject/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '',
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
