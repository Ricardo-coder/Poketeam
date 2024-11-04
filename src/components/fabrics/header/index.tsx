import { createElement } from 'react'

export function Header({ children, className }: Fabric) {
  return createElement(
    'header',
    {
      className,
    },
    children,
  )
}
