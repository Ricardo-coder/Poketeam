/**
 * Footer component that renders a footer element with the provided className and children.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the footer.
 * @param {string} props.className - The CSS class name to apply to the footer element.
 * @returns {JSX.Element} The rendered footer component.
 */
import { createElement } from 'react'

export function Footer({ children, className }: Fabric): JSX.Element {
  return createElement(
    'footer',
    {
      className,
    },
    children,
  )
}
