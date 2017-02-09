var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var hash = commonConfig.hash;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers.js');
module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: '',
        filename: '[name].' + hash + '.js',
        chunkFilename: '[id].' + hash + '.chunk.js'
    },
    htmlLoader: {
        minimize: false // workaround for ng2
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new ExtractTextPlugin('[name].' + hash + '.css'),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin()
    ]
});
