<template>
  <demo-wrapper title="VEllipsis 文本省略">
    <demo-card>
      <v-ellipsis expand-trigger="click" line-clamp="2">
        电灯熄灭 物换星移 泥牛入海<br/>
        黑暗好像 一颗巨石 按在胸口<br/>
        独脚大盗 百万富翁 摸爬滚打<br/>
        黑暗好像 一颗巨石 按在胸口
      </v-ellipsis>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vellipsis',
  components: {
    README
  }
}
</script>

<style>
.v-ellipsis {
  font-size: 14px;
  line-height: 1.6;
}
</style>