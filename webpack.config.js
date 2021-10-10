const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/client/js/main.js",
    mode: "development",
    plugins: [new MiniCssExtractPlugin({
        filename: "css/style.css"
    })],
    output: {
        filename: "js/main.js",
        path: path.resolve(__dirname, "assets"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // 모든 js file을 가져다가 몇가지 변환 시킨다는 뜻
                use: {
                    loader: 'babel-loader',
                     options: {
                     presets: [['@babel/preset-env', { targets: "defaults" }]],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
};