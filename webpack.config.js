const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, "./app", "src")
    },
    output: {
        path: path.join(__dirname, "./", "dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./app/template/index.html"}),
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
                test: /\.less$/,
                exclude: [/node_modules/],
                include: [path.join(__dirname, './app', 'src')],
                use: [
                    require.resolve("style-loader"), {
                        loader: require.resolve("css-loader")
                    }, {
                        loader: require.resolve("less-loader") // compiles Less to CSS
                    }
                ]
            },
            {
                test:/\.css/,
                use:["style-loader","css-loader"]
            }
        ]
    }
};
