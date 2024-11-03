import { createElement } from 'react'

interface HeaderProps {
  children: React.ReactNode
  className?: string
}

export function Header({ children, className }: HeaderProps) {
  return createElement(
    'header',
    {
      className,
    },
    children,
  )
}
