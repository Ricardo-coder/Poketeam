import { createElement } from 'react'

export function Section({ children, className }: Fabric) {
  return createElement(
    'section',
    {
      className,
    },
    children,
  )
}
