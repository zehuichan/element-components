<template>
  <demo-wrapper title="快速上手">
    <demo-card title="介绍">
      通过本章节你可以了解到 @vcomponetns/element-ui 的安装方法和基本使用姿势。
    </demo-card>
    <demo-card title="前置条件">
      <highlightjs language="javascript" :code="quickstart.preconditions"/>
    </demo-card>
    <demo-card title="安装">
      <highlightjs language="shell" :code="quickstart.install"/>
    </demo-card>
    <demo-card title="引入组件">
      <highlightjs language="javascript" :code="quickstart.usage"/>
    </demo-card>
  </demo-wrapper>
</template>

<script>
// code
import { quickstart } from './code'

export default {
  name: 'quickstart',
  data() {
    return {
      quickstart
    }
  }
}
</script>