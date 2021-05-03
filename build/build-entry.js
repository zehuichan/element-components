const fs = require('fs')
const render = require('json-templater/string')
const path = require('path')
const endOfLine = require('os').EOL

// 获取组件
function getComponents(path) {
  let components = fs.readdirSync(path)
  components = components.map(componentName => componentName)
  components.sort((a, b) => a.length - b.length)
  return components
}

// 获取组件引入模板
function getComponentsTemplate(ComponentNames) {
  // 模板
  const IMPORT_TEMPLATE = 'import {{name}} from \'./components/{{name}}\''
  // 替换
  return ComponentNames.map(name => render(IMPORT_TEMPLATE, { name: name }))
}

// 获取安装列表
function getInstallTemplate(ComponentNames) {
  const INSTALL_COMPONENT_TEMPLATE = '  {{name}}'
  return ComponentNames.map(name =>
    render(INSTALL_COMPONENT_TEMPLATE, { name: name })
  )
}

// 获取内置组件类型
function getBuiltInName(name) {
  return name
}

function getBuiltInNameTemplate(ComponentNames) {
  const names = ComponentNames.map(getBuiltInName)
  const TEMPLATE = '  \'{{name}}\''
  return names.map(name => render(TEMPLATE, { name: name }))
}

// 组件目录
const COMPONENTS_PATH = path.join(__dirname, '../lib/components')
// 获取组件名称
const ComponentNames = getComponents(COMPONENTS_PATH)

// 获取引入组件的文本
const includeComponentTemplate = getComponentsTemplate(ComponentNames)

// 获取安装模板
const installTemplate = getInstallTemplate(ComponentNames)

// 内置组件名称
const builtInNamesTemplate = getBuiltInNameTemplate(ComponentNames)

const MAIN_TEMPLATE = `
{{include}}

const components = [
{{install}}
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
`
const template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join(endOfLine),
  install: installTemplate.join(',' + endOfLine),
  builtInNames: builtInNamesTemplate.join(',' + endOfLine)
})
//
const OUTPUT_PATH = path.join(__dirname, '../lib/index.js')
fs.writeFileSync(OUTPUT_PATH, template)
console.log('[build entry] DONE:', OUTPUT_PATH, endOfLine)
