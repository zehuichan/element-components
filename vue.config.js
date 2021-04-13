'use strict'
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: !isProd ? '/' : './',
  css: {
    extract: false
  }
}
