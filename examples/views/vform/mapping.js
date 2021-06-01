
export const form = [
  {label: 'input', key: 'input', value: null, placeholder: '文本框', type: 'input'},
  {
    label: 'digit',
    key: 'digit',
    value: null,
    placeholder: '整数',
    type: 'digit',
    rules: [
      {required: true, message: '请输入整数', trigger: 'blur'}
    ],
  },
  {label: 'number', key: 'number', value: null, placeholder: '数字', type: 'number'},
  {label: 'textarea', key: 'textarea', value: null, placeholder: '文本域', type: 'textarea'},
  {
    label: 'radio',
    key: 'radio',
    value: null,
    placeholder: '单选框组',
    type: 'radio',
    options: [
      {label: '备选项3', value: '3',},
      {label: '备选项6', value: '6',},
      {label: '备选项9', value: '9',},
    ]
  },
  {
    label: 'checkbox',
    key: 'checkbox',
    value: [],
    placeholder: '多选框组',
    type: 'checkbox',
    options: [
      {label: '上海', value: '1',},
      {label: '北京', value: '2',},
      {label: '广州', value: '3',},
      {label: '深圳', value: '4',},
    ]
  },
  {
    label: 'select',
    key: 'select',
    value: null,
    placeholder: '选择器',
    type: 'select',
    options: [
      {value: '3', label: '备选项3'},
      {value: '6', label: '备选项6'},
      {value: '9', label: '备选项9'},
    ]
  },
  {
    label: 'date',
    key: 'date',
    value: null,
    placeholder: '日期选择器',
    type: 'date'
  },
  {
    label: 'week',
    key: 'week',
    value: null,
    placeholder: '选择周',
    type: 'week',
    format: 'yyyy 第 WW 周'
  },
  {
    label: 'month',
    key: 'month',
    value: null,
    placeholder: '选择月',
    type: 'month'
  },
  {
    label: 'year',
    key: 'year',
    value: null,
    placeholder: '选择年',
    type: 'year'
  },
  {
    label: 'dates',
    key: 'dates',
    value: null,
    placeholder: '选择一个或多个日期',
    type: 'dates'
  },
  {
    label: 'daterange',
    key: 'daterange',
    value: [],
    placeholder: '日期范围选择器',
    type: 'daterange'
  },
  {
    label: 'datetime',
    key: 'datetime',
    value: null,
    placeholder: '日期时间选择器',
    type: 'datetime'
  },
  {label: 'custom', key: 'custom'},
  {key: 'actions'},
]