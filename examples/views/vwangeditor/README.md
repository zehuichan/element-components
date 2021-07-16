### 介绍

wangEditor，Web 富文本编辑器。

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `config` 设置扩展更多方法。[wangeditor文档](https://www.wangeditor.com/doc/)

### 设置编辑区域的高度

```html
<!--支持多个富文本编辑器-->
<v-wang-editor v-model.sync="editor1" :config="config"/>
```

```js
export default {
  computed: {
    config() {
      return {
        height: 500
      }
    }
  },
  data() {
    return {
      editor1: '<p>支持回填</p>',
    }
  },
}
```

```html
<!--支持回填值-->
<v-wang-editor v-model="editor2"/>
```

```js
export default {
  data() {
    return {
      editor2: '',
    }
  },
  created() {
    setTimeout(() => {
      this.editor2 = '<p>异步回填</p>'
    }, 2000)
  },
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| value / v-model | 绑定值，支持`.sync`修饰符 | _string_  | _    |
| config | 对象配置项 | _Config{}_  | `{}`    |
