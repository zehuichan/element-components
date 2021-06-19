import DemoBlock from './DemoBlock'
import DemoCard from './DemoCard'
import DemoSection from './DemoSection'
import DemoWrapper from './DemoWrapper'

const components = [
  DemoBlock,
  DemoCard,
  DemoSection,
  DemoWrapper,
]

const install = (Vue, opts = {}) => {
  if (install.installed) {
    return
  }
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}