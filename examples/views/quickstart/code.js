export const quickstart = {
  preconditions: `
    import Vue from 'vue'
    
    import Element from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'
    
    Vue.use(Element)
  `,
  install: `
    npm i element-components -S
  `,
  usage: `
    // main.js
    // 全局引入
    import VComponents from 'vcomponents-element'
    
    Vue.use(VComponents)
  `
}