const path = require("path");

const { HotModuleReplacementPlugin } = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = ({ isDev }) => {
    if (!isDev) {
        // FIXME: What devtool to use in PROD?
        return {
            devtool: "sourcemap",
        };
    }

    return {
        devServer: {
            historyApiFallback: true,
            host: "0.0.0.0",
            hot: true,
            inline: true,
        },
        devtool: "sourcemap",
        plugins: [
            new HtmlWebpackPlugin({
            }),
            new HotModuleReplacementPlugin(),
        ],
        watch: true,
    };
};

module.exports = (env = {}, argv = {}) => {
    const NODE_ENV = argv.mode || process.env.NODE_ENV || "development";

    const settings = {
        env: NODE_ENV,
        isDev: NODE_ENV === "development",
        isProd: NODE_ENV === "production",
        rootDir: __dirname,
    };

    //env.mode = NODE_ENV === "production" ? "production" : "development";
    env.mode = "development";

    const appConfig = merge.smart(
        {
            plugins: [
                new CleanWebpackPlugin(["dist"]),
            ],
        },
        devConfig(settings),
        {
            entry: path.resolve(settings.rootDir, "./js"),
            output: {
                // FIXME: UMD library target?
                filename: "filament.js?[hash:13]",
                path: path.resolve(settings.rootDir, "./dist"),
            },
        },
        { mode: env.mode }
    );

    console.log('webpack.config', appConfig);

    return appConfig;
};

