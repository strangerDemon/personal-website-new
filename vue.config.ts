const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

module.exports = {
  filenameHashing: true,
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve('src'))
      .set('~', path.resolve(`src/view`));
    config.plugins.delete('prefetch-index');
    config.plugins.delete('preload-index');
  },
  devServer: {
    host: '127.0.0.1',
    port: 10000,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL, // 请求本地 需要gisBoot后台项目
        changeOrigin: true, // 是否允许跨越
        ws: true
      }
    }
  },
  // 打包时不生成.map文件 避免看到源码
  productionSourceMap: false,
  // 部署优化
  configureWebpack: {
    // 将应用移植到本地减少包的大小
    externals: {
      // vue: 'Vue',
      // echarts: 'echarts'
    },
    // GZIP压缩
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件
        threshold: 10240 // 对超过10k文件压缩
      })
    ]
  }
}
