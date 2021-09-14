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
			{ test: /\.svg$/, use: "svg-inline-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{ test: /\.(js)$/, use: "babel-loader" },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({}),
		new webpack.EnvironmentPlugin({
			NODE_ENV: "production",
		}),
	],
	mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
