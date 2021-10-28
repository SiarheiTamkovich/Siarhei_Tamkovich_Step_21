const path = require(`path`);
module.exports = {
  entry: [
    './moviesearch/src/js/index.js',
    `./moviesearch/src/js/paginator.js`,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: `development`,
  devServer: {
    compress: true,
    port: 3000,
  },
};