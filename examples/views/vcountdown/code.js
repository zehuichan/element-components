export const vcountdown = {
  template: `
  <div>
    <!--毫秒级渲染-->
    <v-count-down millisecond :time="time" format="HH:mm:ss:SS"/>
    <!--自定义样式-->
    <v-count-down :time="time">
      <template #default="{timeData}">
        <span class="block">{{ timeData.hours | padStart }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.minutes | padStart }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.seconds | padStart }}</span>
      </template>
    </v-count-down>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        time: 30 * 60 * 60 * 1000,
      }
    },
  }
  `
}