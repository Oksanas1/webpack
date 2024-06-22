const { mode } = require("../clw1/webpack.config");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      }
    ],
  }
};
