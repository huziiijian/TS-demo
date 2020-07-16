const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const qs = require('querystring');
const { env } = require('../config');
const base = require('./webpack.config.base.js');

module.exports = merge(
    base,
    {
        mode: 'development',
        devtool: 'source-map',
        devServer: {
            contentBase: './dist',
            hot: true,
            host: '0.0.0.0',
            port: 8001,
            historyApiFallback: {
                disableDotRule: true
            },
            disableHostCheck: true,
            overlay: true,
            inline: true,
            stats: "errors-only",
            proxy: env.proxy
        },
        output: {
            filename: 'saas/react/static/js/[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            hotUpdateChunkFilename: 'saas/react/hot.[hash].json',
            hotUpdateMainFilename: 'saas/react/hot_module.[hash].json'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'saas/react/static/styles/[name].[contenthash:8].css',
                chunkFilename: 'saas/react/static/styles/chunk.[name].[contenthash:8].css'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'), // src文件
                filename: 'index.html', // dist文件
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    enforce: 'pre',
                    use: [{
                        loader: require.resolve('eslint-loader'),
                        options: {
                            eslintPath: require.resolve('eslint'),
                            emitWarning: false
                        }
                    }],
                    exclude: /node_modules/,
                    include: [
                        path.resolve(__dirname, '../src/')
                    ]
                }
            ]
        }
    }
);
