import { createElement } from 'react'

export function Spam({ children, className }: Fabric) {
  return createElement('spam', { className }, children)
}
