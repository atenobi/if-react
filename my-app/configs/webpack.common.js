const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const source = path.resolve(__dirname, '../src');
const outputPath = path.resolve(__dirname, '../dist');
const entryPath = path.resolve(__dirname, '../src/index.jsx');

module.exports = {
	entry: [entryPath],
	devtool: 'inline-source-map',
	output: {
		path: outputPath,
		filename: 'app[hash].js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				include: source,
				use: 'babel-loader',
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: 'file-loader'
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [{
					loader: 'file-loader',
					options: {
						outputPath: 'fonts/',
						name: '[name].[ext]'
					}
				}]
			},
			{
				test: /\.css$/,
				use:
					['style-loader', 'css-loader']
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			//inject: 'body',
			template: './src/index.html'
		}),
	]
};
