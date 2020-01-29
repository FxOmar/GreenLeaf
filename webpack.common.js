const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'main.[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader'
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Home page',
			template: './src/homepage.html'
		}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
	]
}
