<template>
  <demo-wrapper title="VTime 时间">
    <demo-card title="基础用法">
      <v-time :time="0"/>
      <br>
      <v-time :time="new Date(0)"/>
    </demo-card>
    <demo-card title="类型，支持 date、datetime 或者 relative。">
      <v-time :time="0" type="date"/>
      <br/>
      <v-time :time="new Date(0)" type="datetime"/>
    </demo-card>
    <demo-card title="相对时间">
      <v-time :time="0" :to="8640" type="relative"/>
      <br/>
      <v-time :time="0" :to="864000000" type="relative"/>
      <br/>
      <v-time :time="0" :to="8640000000" type="relative"/>
    </demo-card>
    <demo-card title="Unix 时间戳">
      <v-time :time="4320000000" :to="8640000000"/>
      <br/>
      <v-time :time="4320000" :to="8640000" unix/>
      <br/>
      <v-time :time="4320000000" format="yyyy-MM-dd hh:mm:ss"/>
      <br/>
      <v-time :time="4320000" format="yyyy-MM-dd hh:mm:ss" unix/>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vtime',
  components: {
    README
  }
}
</script>