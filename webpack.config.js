const path = require(`path`);
const HtmlWebPackPlugin = require(`html-webpack-plugin`);
module.exports = {
  entry: [
    './moviesearch/src/js/index.js',
    './moviesearch/src/js/paginator.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: 'development',
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
      }, {
        test:/\.(s*)css$/i,
        use: [
          // Creates `style` nodes JS strings
          "style-loader",
          // Translate CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './moviesearch/src/styles/vars.scss',
              ]
            }
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `./moviesearch/src/index.html`,
      filename: `./index.html`
    }),
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),//The directory where the page loaded by the local server is located
    host:'192.168.118.221',
    compress:true,
    port:8081
  }
};