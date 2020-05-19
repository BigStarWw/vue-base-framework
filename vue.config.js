const apiUrl = ''

module.exports = {
    // 部署生成环境和开发环境下的URL
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/' ,
    // 在npm run build或yarn build时，生成文件的目录名称（要和baseUrl的生成环境路径一致）
    outputDir: 'dist',
    // 用于放置静态文件（js/css/image/fonts)等，项目打包后静态资源会放在这个文件夹下
    assetsDir: 'static',
    // 是否使用eslint
    lintOnSave: true,
    // 如果不需要生产环境的source map，可将其设置为false,加速生产环境构建
    productionSourceMap: false,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: { // 代理
            "/api": {
                target: apiUrl,
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }

}
