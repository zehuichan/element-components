// with polyfills
import 'core-js/stable'
import '@vant/touch-emulator'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/default.css'

// global lib
import VComponents from '../lib'
import DemoComponents from './components'

import './styles/scss/index.scss' // global css

import * as filters from './filters' // global filters

// 全量引入使用
Vue.use(hljs.vuePlugin)
Vue.use(Element)
Vue.use(VComponents)
Vue.use(DemoComponents)


// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
console.log('Vue', Vue.version)
console.log('Element', Element.version)
console.log('@vcomponetns/element-ui', VComponents.version)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
