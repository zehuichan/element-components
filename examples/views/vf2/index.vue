<template>
  <demo-wrapper title="Antv/F2 可视化">
    <demo-card>
      <div style="padding: 8px 8px 0;">
        <v-f2 ref="basic" :init="basic"/>
      </div>
    </demo-card>
    <demo-card>
      <v-f2 :init="line"/>
    </demo-card>
    <demo-card>
      <v-f2 :init="area"/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import { line, area } from './examples'
import README from './README.md'

function random(x, y) {
  return Math.round(Math.random() * (y - x) + x)
}

export default {
  name: 'vf2',
  data() {
    return {
      active: 0,
      chartData: [
        { genre: 'Sports', sold: random(100, 500) },
        { genre: 'Strategy', sold: random(100, 500) },
        { genre: 'Action', sold: random(100, 500) },
        { genre: 'Shooter', sold: random(100, 500) },
        { genre: 'Other', sold: random(100, 500) },
      ]
    }
  },
  mounted() {
    setInterval(() => {
      this.$refs.basic.changeData([
        { genre: 'Sports', sold: random(100, 1000) },
        { genre: 'Strategy', sold: random(200, 1000) },
        { genre: 'Action', sold: random(400, 1000) },
        { genre: 'Shooter', sold: random(300, 1000) },
        { genre: 'Other', sold: random(300, 1000) },
      ])
    }, 1500)
  },
  methods: {
    basic(F2, options) {
      const chart = new F2.Chart(options)

      chart.source(this.chartData)
      chart.interval().position('genre*sold').color('genre')
      chart.line().position('genre*sold')

      chart.render()

      return chart
    },
    line,
    area
  },
  components: {
    README
  }
}
</script>

<style scoped>

</style>