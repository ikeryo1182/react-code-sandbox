const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const SOURCE_DIRECTORY = path.resolve(__dirname, "src");

module.exports = {
    entry: [path.resolve(SOURCE_DIRECTORY, "index.jsx")],
    mode: "development",
    output: {
        publicPath: "/"
    }, 
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, '/'),
        watchContentBase: true,
        open: true
    },
    devtool: "source-map",
    resolve: {
        extensions: [".jsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                include: [SOURCE_DIRECTORY],
                test: /\.(js|jsx)$/,
                use: ["babel-loader"]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(SOURCE_DIRECTORY, "index.ejs")
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};
