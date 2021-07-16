<template>
  <demo-wrapper title="VInput 输入框">
    <demo-card>
      <v-input v-model="digit" type="digit" clearable placeholder="整数">
        <template #prepend>我是正整数</template>
      </v-input>
      <div style="margin-bottom: 16px;"></div>
      <v-input v-model="number" type="number" clearable placeholder="数字">
        <template #append>我是数字</template>
      </v-input>
      <div style="margin-bottom: 16px;"></div>
      <v-input v-model="text" type="text" clearable placeholder="文本" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"/>
          <el-option label="订单号" value="2"/>
          <el-option label="用户电话" value="3"/>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </v-input>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vinput',
  data() {
    return {
      digit: '',
      number: '',
      text: '',
      select: '',
    }
  },
  components: {
    README
  }
}
</script>

<style>
.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>