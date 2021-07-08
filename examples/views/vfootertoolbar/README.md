
### 基础用法

```html
<v-footer-tool-bar :siderWidth="220">
  <template #extra>#extra</template>
  <el-button type="default">取消</el-button>
  <el-button type="primary">确认保存</el-button>
</v-footer-tool-bar>
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| collapsed | 侧边菜单是否展开 | _boolean_  | `false`   |
| isMobile | 是否手机模式 | _boolean_  | `false`   |
| siderWidth | 侧边菜单宽度 | _number_  | _   |

### Slots

| 名称   | 说明           | 
| ------ | -------------- | 
| default | 默认内容   |
| extra | 扩展内容   |  