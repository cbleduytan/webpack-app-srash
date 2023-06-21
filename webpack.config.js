const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    devtool: "source-map",
    entry: {
        index: './index.js',
    },
    output: {
       filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  "../dist/index.html",
            scriptType:"module"
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "webpack-app-crash/dist")
        },
        port: 8080,
    }

}
