/**
 * A React component that renders a custom HTML element named 'spam'.
 *
 * @param {React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>} props - The props for the component.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the 'spam' element.
 * @returns {JSX.Element} The rendered 'spam' element with the provided props and children.
 */
import React, { createElement } from 'react'

export function Spam({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>): JSX.Element {
  return createElement('spam', props, children)
}
