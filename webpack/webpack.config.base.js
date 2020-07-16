const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../src/index.js")
    },
    externals: {
        Swiper: "Swiper"
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /moment[/\\]locale$/,
            /zh-cn/
        ),
        new FriendlyErrorsWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }, {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '../src'), path.resolve('node_modules/react-simple-keyboard'), /node_modules\/@sentry/],
                options: {}
            },
            {
                test: /\.(css|less)$/,
                exclude: /node_modules|(\.global\.(css|less)$)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                          }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                            modules: {
                                localIdentName: '[local]_[contenthash:base64:6]'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },

            {
                test: /\.global\.(css|less)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                          }
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {}
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|svg|gif)$/i,
                use: [{
                        loader: 'file-loader',
                        options: {
                            limit: 500,
                            outputPath: 'static/images/',
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, '../src')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css']
    }
};
