'use strict'

module.exports = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'src/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    extract: false
  }
}
