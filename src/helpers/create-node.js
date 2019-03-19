const d = document

const EVENTS = {
  onClick: 'click',
  onKeyUp: 'keyup',
  onLoad: 'load',
  onFocus: 'focus',
  onBlur: 'blur'
}

export const createNode = (elem, attrs, ...children) => {
  let node = d.createElement(elem)
  if (attrs != null) {
    Object.keys(attrs).forEach(key => {
      if (EVENTS.hasOwnProperty(key)) {
        node.addEventListener(EVENTS[key], attrs[key])
      } else {
        node.setAttribute(key, attrs[key])
      }
    })
  }
  if (children.length > 0) {
    children.forEach(child => {
      if (typeof child === 'boolean') return
      if (typeof child === 'string') {
        child = d.createTextNode(child)
      }
      node.appendChild(child)
    })
  }

  return node
}
