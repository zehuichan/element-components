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
    entry: './example/main.js',
    output: {
      libraryExport: 'default'
    },
    resolve: {
      alias: {
        'example': resolve(__dirname, 'example'),
        'lib': resolve(__dirname, 'lib'),
      }
    }
  },
  css: {
    extract: false
  }
}
