/**
 * A functional component that renders an input element.
 *
 * @param {React.InputHTMLAttributes<HTMLInputElement>} props - The properties passed to the input element.
 * @param {React.ChangeEventHandler<HTMLInputElement>} props.onChange - The event handler for the input's change event.
 * @returns {JSX.Element} The rendered input element.
 */
import React, { createElement } from 'react'

export function Input({
  onChange,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>): JSX.Element {
  return createElement('input', { onChange, ...props })
}
