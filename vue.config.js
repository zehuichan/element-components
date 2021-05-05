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
  css: {
    extract: false
  }
}
