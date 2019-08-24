const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader'] // 순서: 뒤에서 앞으로 적용, css-loader > style-loader
			},
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}