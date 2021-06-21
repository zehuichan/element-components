// vue版Fragment
export default {
  name: 'Fragment',
  functional: true,
  render: (h, ctx) => {
    return ctx.children.length > 1 ? h('div', {}, ctx.children) : ctx.children
  }
}
