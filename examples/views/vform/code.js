export const vform = {
  template: `
  <v-form ref="form" v-model="dataForm" :options="form" label-position="right" label-width="80px">
    <template #custom="{scope}">
      <el-image lazy fit="contain" style="width: 100px; height: 100px">
        <div slot="placeholder" class="image-slot">
          <i class="el-icon-loading"></i>
        </div>
      </el-image>
    </template>
    <template #actions>
      <el-button type="primary" @click="submit">立即创建</el-button>
      <el-button @click="reset">取消</el-button>
    </template>
  </v-form>
  `,
  javascript: `
  export default {
    data() {
      return {
        dataForm: {}
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      reset() {
        this.$refs.form.resetFields()
      },
    }
  }
  `
}
