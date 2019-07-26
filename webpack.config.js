const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, "src")
    },
    output: {
        path: path.join(__dirname, "./", "dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/template/index.html"}),
        new webpack.SourceMapDevToolPlugin()
    ],
    module: {
        rules: [
            {
                test: /.ts(x?)$/,
                use: [
                    {
                        loader: "awesome-typescript-loader",
                        options: {}
                    }
                ]
            }, {
                // test: /.ts(x?)$/,
                // loader: "eslint-loader",
                // options: {
                    
                // }
            }, {
                test: /\.less$/,
                exclude: [/node_modules/],
                include: [path.join(__dirname, 'src')],
                use: ["style-loader", "css-loader", "less-loader"]
            }, {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpe?g)$/,
                use: ['file-loader']
              }
        ]
    }
};
