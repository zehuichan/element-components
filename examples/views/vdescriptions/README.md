### 介绍

成组展示多个只读字段。

### 基础用法

代码演示

```html

<v-descriptions :data="data" :columns="columns">
  <template #date="{scope}">
    {{ scope.datetime.split(' ')[0] }}
  </template>
  <template #time="{scope}">
    {{ scope.datetime.split(' ')[1] }}
  </template>
  <template #custom>
    自定义插槽
  </template>
</v-descriptions>
```

```js
export default {
  data() {
    return {
      data: {
        product: 'Cloud Database',
        billing: 'Prepaid',
        datetime: '2021-6-21 10:43:59',
        amount: '$80.00',
        discount: '$20.00',
        official: '$60.00',
        extra: {
          a: 'aa',
          b: 'bbb',
          c: 'cccc'
        },
        custom: 'custom',
      },
      columns: [
        { label: 'Product', key: 'product' },
        { label: 'Billing', key: 'billing' },
        { label: 'date', key: 'date' },
        { label: 'time', key: 'time' },
        { label: 'Amount', key: 'amount' },
        { label: 'Discount', key: 'discount' },
        { label: 'Official', key: 'official' },
        { label: 'Extra.a', key: 'extra.a' },
        { label: 'Extra.b', key: 'extra.b' },
        { label: 'Extra.c', key: 'extra.c' },
        { label: 'Custom', key: 'custom' },
      ]
    }
  }
}
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| data | 源数据 | _object_  | `{}`   |
| columns | 对象数组，配置每一列   | _Column[]_  | `[]`    |