// vue版Fragment
const Fragment = {
  name: 'Fragment',
  functional: true,
  render(h, ctx) {
    return ctx.children.length > 1 ? h('div', {}, ctx.children) : ctx.children
  }
}

export default Fragment
