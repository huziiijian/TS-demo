const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const config = require('../config');

const webpackConfig = merge(
base,
    {
        devtool: 'none',
        mode: 'production',
        output: {
            filename: 'static/js/[name].[chunkhash:8].js',
            chunkFilename: "static/js/chunk.[name].[chunkhash:8].js",
            path: path.resolve(__dirname, '../dist'),
            publicPath: config.env.publicPath
        },
        stats: {
            children: false
        },
        optimization: {
                splitChunks: {
                  chunks: 'async',
                  minSize: 30000,
                  maxSize: 0,
                  minChunks: 1,
                  maxAsyncRequests: 6,
                  maxInitialRequests: 4,
                  automaticNameDelimiter: '~',
                  cacheGroups: {
                    defaultVendors: {
                      test: /[\\/]node_modules[\\/]/,
                      priority: -10
                    },
                    default: {
                      minChunks: 2,
                      priority: -20,
                      reuseExistingChunk: true
                    }
                  }
                },
            minimizer: [
                new TerserPlugin({
                    parallel: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'static/styles/[name].[contenthash:8].css',
                chunkFilename: 'static/styles/chunk.[name].[contenthash:8].css'
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../public/index.html'), // src文件
                filename: 'index.ejs', // dist文件
                inject: true,
                ejsVarInject: {
                    _global: `
                    <script>window._global = <%-data%></script>`
                }
            }),
            new CleanWebpackPlugin()
        ]
    }
);
// 模块占用报告
if (process.env.npm_config_report) {
    webpackConfig.plugins.push(new BundleAnalyzerPlugin({
        analyzerPort: 8889
    }));
}

module.exports = webpackConfig;
