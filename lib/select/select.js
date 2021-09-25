export default {
	name: 'VSelect',
	inheritAttrs: false,
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: [String, Number, Array, Boolean],
		options: {
			type: Array,
			default: () => [],
			required: true
		},
		prop: {
			type: Object,
			default: () => ({ label: 'label', value: 'value' })
		}
	},
	computed: {
		_options() {
			return Array.from(this.options).map((item) => ({
				...item,
				text: item[this.prop.label],
				value: item[this.prop.value],
			}))
		}
	},
	render() {
		const data = {
			attrs: {
				...this.$attrs,
			},
			on: {
				...this.$listeners,
			},
		}

		return (
			<el-select
				{...data}
				value={this.value}
			>
				{this._options.map(item => <el-option label={item.label} value={item.value} disabled={item.disabled}/>)}
				{Object.keys(this.$slots).map(key => <template slot={key}>{this.$scopedSlots[key]()}</template>)}
			</el-select>
		)
	}
}