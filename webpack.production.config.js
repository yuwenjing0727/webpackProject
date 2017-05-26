/**
 * Created by ywj on 2017/5/26.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:__dirname+"/app/main.js",
    output:{
        path:__dirname+"/build",
        filename:"bundle.js"
    },

    module:{
        loaders:[
            {
                test:/\.josn$/,
                loader:"json"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel'
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract('style','css?modules')
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:__diname+"/app/index.tmpl.html"
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")


    ]

}