// vue版Fragment
const Fragment = ({ children }) => {
  return children.length > 1 ? <div>{children}</div> : children
}

export default Fragment
