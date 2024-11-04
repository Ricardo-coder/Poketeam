import { createElement } from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return createElement(
    'section',
    {
      className,
    },
    children,
  )
}
