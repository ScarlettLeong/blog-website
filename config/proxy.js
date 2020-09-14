module.exports = {
    '/api': { //将target的值印射为 /api，
        target: 'http://localhost:7000',
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, //是否跨域
        pathRewrite: {
            '^/api': '/api'
        }
    }
};