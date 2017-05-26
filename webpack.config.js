/**
 * Created by ywj on 2017/5/25.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool:'evel-source-map',//配置生成Source Maps,选择合适的选项
    entry:__dirname + "/app/main.js",//已多次提及的唯一入口文件
    output:{
        path:__dirname + "/build",//打包后文件存放的地方
        filename:"bundle.js"//打包后输出文件的文件名
    },

    module:{//在配置文件里添加JSON loader
        loaders:[
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            },{
                test:/\.css$/,
                loader:'style-loader!css-loader?modules'//添加样式表的处理
            }
        ]

    },

   /* postcss:[
      require('autoprefixer')//调用autoprefixer插件
    ],*/

    plugins:[
        /*new webpack.LoaderOptionsPlugin({
           options:{
               postcss:function () {
                   return [
                       require("autoprefixer")({
                           browsers: ['ie>=8','>1% in CN']
                       })
                   ]
               }
           }
        }),*/
        new webpack.LoaderOptionsPlugin({
            options: {
                /*postcss:function () {
                    return [
                        require("autoprefixer")({
                            browsers: ['ie>=8','>1% in CN']
                        })
                    ]
                },*/
                devServer: {
                    contentBase: "./public", //本地服务器所加载的页面所在的目录
                    colors: true, //终端中输出结果为彩色
                    historyApiFallback: true, //不跳转
                    inline: true //实时刷新
                }
            }
        }),
        new HtmlWebpackPlugin({
           template:__dirname+"/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new webpack.BannerPlugin("Copyright Flying Unicorns inc.")
    ],


    /*devServer:{
        contentBase:"./public",//本地服务器所加载的页面所在的目录
        colors:true,//终端中输出结果为彩色
        historyApiFallback:true,//不跳转
        inline:true//实时刷新
    }*/
}