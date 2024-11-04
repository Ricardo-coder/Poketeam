/**
 * Header component that renders a header element with the given className and children.
 *
 * @param {Fabric} props - The properties for the Header component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the header.
 * @param {string} props.className - The CSS class to be applied to the header element.
 * @returns {JSX.Element} The rendered header element.
 */
import { createElement } from 'react'

export function Header({ children, className }: Fabric): JSX.Element {
  return createElement(
    'header',
    {
      className,
    },
    children,
  )
}
