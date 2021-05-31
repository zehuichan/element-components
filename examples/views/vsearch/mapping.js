export const search = {
  options: [
    { label: 'Name', key: 'name', value: null, placeholder: 'Name', type: 'input' },
    { label: 'Age', key: 'age', value: null, placeholder: 'Age', type: 'input' },
    { label: 'Address', key: 'address', value: null, placeholder: 'Address', type: 'input' },
    { label: 'Tags', key: 'tags', value: null, placeholder: 'tags', type: 'input' },
    { label: 'Tags1', key: 'tags1', value: null, placeholder: 'tags1', type: 'input' },
    { label: 'digit', key: 'digit', value: null, placeholder: 'digit', type: 'digit' },
    { label: 'number', key: 'number', value: null, placeholder: 'number', type: 'number' },
    {
      label: 'Select',
      key: 'select',
      value: null,
      placeholder: 'Select',
      type: 'select',
      options: [
        { value: '3', label: '备选项' },
        { value: '6', label: '备选项' },
        { value: '9', label: '备选项' },
      ]
    },
    { label: 'Daterange', key: 'daterange', value: [], placeholder: 'Daterange', type: 'daterange' },
  ],
}