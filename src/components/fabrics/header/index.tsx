/**
 * A functional component that renders a header element.
 *
 * @param {React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>} props - The props for the header component.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the header.
 * @returns {JSX.Element} The rendered header element.
 */
import { createElement } from 'react'

export function Header({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>): JSX.Element {
  return createElement('header', props, children)
}
