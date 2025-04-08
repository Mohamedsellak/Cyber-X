const rules = require('./webpack.rules');

module.exports = {
  rules: rules,
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    fallback: {
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
    }
  },
  node: {
    __dirname: false,
    __filename: false,
  }
};
