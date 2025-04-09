const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ...existing code...
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "buffer": require.resolve("buffer/"),
      "process": require.resolve("process/browser"),
      "fs": false,
      "net": false,
      "os": false,
      "child_process": false,
      "url": false
    }
  },
  plugins: [
    // ...existing plugins...
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]
};