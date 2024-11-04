import { createElement } from 'react'

interface SpamProps {
  children: React.ReactNode
  className?: string
}

export function Spam({ children, className }: SpamProps) {
  return createElement('spam', { className }, children)
}
