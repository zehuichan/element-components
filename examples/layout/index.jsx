import './index.scss'

// components
import NavMenu from './NavMenu'
import Content from './Content'

// config
import config from 'examples/config'

const Layout = {
  name: 'Layout',
  render() {
    return (
      <div class="v-doc">
        <NavMenu config={config.nav}/>
        <div class="v-doc-container">
          <Content/>
        </div>
        <v-footer copyright="2018 - present Zehui Chan"/>
      </div>
    )
  }
}

export default Layout