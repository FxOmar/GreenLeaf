const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home page',
            template: './src/homepage.html'
        }),
        new CleanWebpackPlugin()
    ]
}