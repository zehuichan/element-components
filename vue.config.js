'use strict'
const path = require('path')
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
    }
  },
  chainWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use("vue-loader")
      .loader("vue-loader")
      .options({
        compilerOptions: {
          preserveWhitespace: false
        }
      })
      .end()
      .use('@vant/markdown-loader')
      .loader(require.resolve('@vant/markdown-loader'))
      .end()
  },
  css: {
    extract: false
  }
}
