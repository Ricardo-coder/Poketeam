/**
 * A functional component that renders a section element with the specified class name and children.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * @param {string} props.className - The class name to be applied to the section element.
 * @returns {React.ReactElement} The rendered section element.
 */
import { createElement } from 'react'

export function Section({ children, className }: Fabric): JSX.Element {
  return createElement(
    'section',
    {
      className,
    },
    children,
  )
}
