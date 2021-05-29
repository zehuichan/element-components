// 是否定义
export function isDef(val) {
  return !isUnDef(val)
}

// 是否没定义
export function isUnDef(val) {
  return val === null || val === undefined
}

// 判断是否为函数
export function isFunction(val) {
  return typeof val === 'function'
}

// 判断类型
export function is(val, type) {
  const typeArr = Array.isArray(type) ? type : [type]
  const valType = Object.prototype.toString.call(val)
  return typeArr.some(type => `[object ${type}]` === valType)
}
