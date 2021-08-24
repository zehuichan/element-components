### 介绍

Time 提供一些基本的时间格式化功能。

### 基础用法

```html
<!--基础用法-->
<v-time :time="0"/>
<v-time :time="new Date(0)"/>

<!--类型，支持 date、datetime 或者 relative。-->
<v-time :time="0" type="date"/>
<v-time :time="new Date(0)" type="datetime"/>

<!--相对时间-->
<v-time :time="0" :to="8640" type="relative"/>
<v-time :time="0" :to="864000000" type="relative"/>
<v-time :time="0" :to="8640000000" type="relative"/>

<!--Unix 时间戳-->
<v-time :time="4320000000" :to="8640000000"/>
<v-time :time="4320000" :to="8640000" unix/>
<v-time :time="4320000000" format="yyyy-MM-dd hh:mm:ss"/>
<v-time :time="4320000" format="yyyy-MM-dd hh:mm:ss" unix/>
```

## API

### Base Props

| 参数   | 说明           | 类型      | 默认值 |
| ------ | -------------- | --------- | ------ |
| format | 时间格式化 | _string_  | _    |
| time | 时间 | _number \| date_  | `Date.now()`    |
| to | 目标时间 | _number \| date_  | `Date.now()`    |
| type | 时间类型，relative \| date \| datetime | _number \| date_  | `datetime`    |
| unix | `unix` 时间戳 | _boolean_  | `false`    |
