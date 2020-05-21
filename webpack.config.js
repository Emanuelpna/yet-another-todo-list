const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'public', 'scripts', 'src', 'main.js'),
  output: {
    path: path.resolve(__dirname, 'public', 'scripts'),
    filename: 'index.js',
  },
  watch: true,
  mode: 'development',
};
