const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js",
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: "babel-loader" },
			{
				test: /\.(s(a|c)ss)$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.svg$/, use: "svg-inline-loader" },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/public/index.html",
		}),
		new webpack.EnvironmentPlugin({
			NODE_ENV: "production",
		}),
	],
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
