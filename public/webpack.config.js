const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
        index: "./index.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new WebpackPwaManifest({
            fingerprints: false,
            inject: false,
          short_name: "Budget",
            name: "Budget Tracker App",
            description: "An application to help you track your budget",
            background_color: "#01579b",
            theme_color: "#ffffff",
            start_url: "/",
            icons: [{
                src: path.resolve("icons/icon-192x192.png"),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: path.join("assets", "icons")
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
};

module.exports = config;