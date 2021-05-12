'use strict'
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: isProd ? './' : '/',
  outputDir: 'docs',
  configureWebpack: {
    entry: './examples/main.js',
    output: {
      libraryExport: 'default'
    },
    resolve: {
      alias: {
        'examples': resolve('examples'),
        'lib': resolve('lib'),
      }
    },
    plugins: isProd ? [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css)(\?.*)?$/i,
        threshold: 10240, // 对超过10k的数据进行压缩
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets: false, // 删除原文件
      })
    ] : []
  },
  css: {
    extract: false
  }
}
