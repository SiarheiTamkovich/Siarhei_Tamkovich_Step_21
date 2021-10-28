const path = require(`path`);
const HtmlWebPackPlugin = require(`html-webpack-plugin`);
module.exports = {
  entry: [
    `./moviesearch/src/js/index.js`,
    `./moviesearch/src/js/paginator.js`,
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
                // Disables attributes processing
                minimize: false,
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `./moviesearch/src/index.html`,
      filename: `./index.html`
    }),
  ],
  devServer: {
    compress: true,
    port: 3000,
  },
};