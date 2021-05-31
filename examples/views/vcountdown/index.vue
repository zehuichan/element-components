<template>
  <demo-wrapper title="展示组件">
    <!--v-count-down-->
    <demo-section>
      <demo-card title="v-count-down">
        <demo-block title="毫秒级渲染">
          <v-count-down millisecond :time="time" format="HH:mm:ss:SS"/>
        </demo-block>
        <demo-block title="自定义样式">
          <v-count-down :time="time">
            <template #default="{timeData}">
              <span class="block">{{ timeData.hours | padStart }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes | padStart }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds | padStart }}</span>
            </template>
          </v-count-down>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vcountdown.template"/>
        </demo-block>
      </demo-card>
    </demo-section>
  </demo-wrapper>
</template>

<script>
// code
import {vcountdown} from './code'

export default {
  name: 'vcountdown',
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      vcountdown,
    }
  }
}
</script>