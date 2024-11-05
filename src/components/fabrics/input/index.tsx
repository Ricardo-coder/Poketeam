import React, { createElement } from 'react'

export function Input({
  onChange,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return createElement('input', { onChange, ...props })
}
