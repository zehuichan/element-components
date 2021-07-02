<template>
  <demo-wrapper title="VDescriptions 描述列表">
    <demo-card>
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
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vdescriptions',
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
  },
  components: {
    README
  }
}
</script>