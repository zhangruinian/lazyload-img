const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)

console.log(resolve('src'))
console.log(resolve('dist'))

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'lazyLoadImg.js',
        path: resolve('dist'),
        libraryTarget: 'umd',
        library: 'LazyLoad', // 库名称 源码编写时候还是用export default
        libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
        globalObject: 'this' // 兼容node和浏览器运行，避免window is not undefined情况
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src')], // resolve('test')
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
            {
                test: /\.js$/,
                include: resolve('src'),
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            parallel: true,
            uglifyOptions: {
                compress: {
                    warnings: false
                },
                mangle: true
            },
            sourceMap: true
        })
    ]

}
