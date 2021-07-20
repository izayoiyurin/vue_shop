module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js'
        }
    },
    lintOnSave: false, // 关闭语法检查
    // 开启代理服务器(方式一)
    devServer: {
        proxy: 'http://localhost:8888'
    }
}