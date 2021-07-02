<template>
  <demo-wrapper title="VCountDown 倒计时">
    <demo-card>
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
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vcountdown',
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    }
  },
  components: {
    README
  }
}
</script>

<style>
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #1989fa;
}

.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>