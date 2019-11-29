// 用于取消 https 的强检查
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

var fs = require('fs')

// 你可以创建自己的 server 配置脚本
var devServer = birdDynamicRequire('./servers/default-server')

// -------------------- config-----------------------
var birdConfig = {
    name: 'My App',
    // port: 5678, // default 8899
    staticFileRootDirPath: './static',
    mockRoot: './mock',
    middleware: false,
    // showXhrData: false,
    debug: true,
    useServer: 'devServer',

    servers: {
        devServer: devServer
    },

    routes: [],
}

// ----------------------- ROUTES ----------------------
// birdDynamicRequireModuleFolder，解析modules内路由
var routes = birdDynamicRequireModuleFolder('./modules')
routes.map(function(config) {
    birdConfig.routes = birdConfig.routes.concat(config)
})

module.exports = birdConfig
