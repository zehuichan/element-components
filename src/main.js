import Vue from 'vue'
import App from './App.vue'

// global components
import VComponents from '@/components'

// 常用自定义组件全量引入使用
Vue.use(VComponents)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
