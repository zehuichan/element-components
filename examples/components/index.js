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

function plugin(Vue, opt) {
  if (plugin.installed) {
    return
  }
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default plugin