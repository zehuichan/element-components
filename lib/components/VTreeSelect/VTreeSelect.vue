<template>

</template>

<script>
export default {
  name: 'VTreeSelect'
}
</script>

<style lang="script">
.vue-treeselect {
  line-height: 18px;
  color: #606266;
}

.vue-treeselect__control {
  height: 32px;
  border-radius: 4px;
}

.vue-treeselect__input {
  -webkit-appearance: none;
  background-image: none;
  border-radius: 4px;
  display: block;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  outline: none;
}

.vue-treeselect__label {
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  cursor: pointer;
}

.vue-treeselect__option--selected .vue-treeselect__label {
  color: #409eff;
}

.vue-treeselect__placeholder, .vue-treeselect__single-value {
  padding-left: 10px;
  padding-right: 10px;
  line-height: 32px;
}
</style>