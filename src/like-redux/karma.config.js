module.exports = (config) => config.set({
  browsers: ['PhantomJS'],
  frameworks: ['mocha', 'sinon-chai'],
  files: [
    'node_modules/babel-polyfill/dist/polyfill.js',
    './tests/*.spec.js',
  ],
  preprocessors: {
    './tests/*.spec.js': ['webpack'],
  },
  reporters: ['dots'],
  webpack: {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loaders: ['babel-loader'],
        },
      ],
    },
    externals: {
      cheerio: 'window',
    },
  },
});
