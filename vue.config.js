'use strict'
const path = require('path')
const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const GitRevision = new GitRevisionPlugin()
const buildDate = JSON.stringify(new Date().toLocaleString())
const isGithub = process.env.VUE_APP_BASE_URL === 'github'

function resolve(dir) {
  return path.join(__dirname, dir)
}

// check Git
function getGitHash() {
  try {
    return GitRevision.commithash()
  } catch (e) {
  }
  return 'unknown'
}

module.exports = {
  publicPath: isGithub ? '/element-components/' : './',
  outputDir: 'docs',
  productionSourceMap: false,
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
    plugins: [
      new webpack.DefinePlugin({
        APP_VERSION: `"${require('./package.json').version}"`,
        GIT_HASH: JSON.stringify(getGitHash()),
        BUILD_DATE: buildDate
      })
    ]
  },
  chainWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
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
