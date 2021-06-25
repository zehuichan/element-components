### 介绍

`el-dialog`的二次封装，支持双向数据绑定展示隐藏。

公共基础组件，可再次封装。

### 基础用法

```html
<!--基础用法-->
<el-button type="primary" @click="show = true">打开dialog</el-button>

<v-dialog v-model="show" title="v-dialog" :loading="loading" @confirm="onConfirm" @cancel="onCancel">
  <v-form v-model="form" :options="options"/>
</v-dialog>
```

```js
export default {
  data() {
    return {
      show: false,
    }
  }
}
```

### v-dialog 搭配 v-form 使用

```html
<!--list.vue-->
<el-button type="primary" @click="show2 = true">打开RoleDialog</el-button>

<role-dialog v-model="show2" @refresh="onRefresh"/>

<!--RoleDialog.vue-->
<v-dialog
  v-bind="$attrs"
  v-on="$listeners"
  title="角色操作"
  :loading="loading"
  @confirm="onConfirm"
  @cancel="onCancel"
>
  <v-form ref="form" v-model="form" :options="options" label-position="left" label-width="80px"/>
</v-dialog>
```

```js
export default {
  data() {
    return {
      show2: false,
      loading: false,
      form: {},
      options: [
        { label: '角色名称', key: 'name', value: null, placeholder: '角色名称', type: 'input' },
        { label: '角色值', key: 'val', value: null, placeholder: '角色值', type: 'input' },
        {
          label: '状态',
          key: 'status',
          value: null,
          placeholder: '角色值',
          type: 'switch',
          options: [
            { label: '启用', },
            { label: '停用', }
          ]
        },
        { label: '备注', key: 'remark', value: null, placeholder: '备注', type: 'textarea' },
      ]
    }
  },
  methods: {
    onConfirm() {
      // 关闭dialog
      this.$emit('input', false)
      // 派发refresh方法
      this.$emit('refresh')
    },
    onCancel() {
      // 重置表单
      this.$refs.form.resetFields()
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值 | _boolean_  | `false`   |
| 原生支持 el-dialog Attributes | 属性 | [el-dialog 文档](https://element.eleme.cn/#/zh-CN/component/dialog#attributes)  | _   |