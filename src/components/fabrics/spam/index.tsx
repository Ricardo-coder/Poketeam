/**
 * A functional component that renders a custom HTML element 'spam'.
 *
 * @param {Fabric} props - The properties object.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the 'spam' element.
 * @param {string} [props.className] - An optional class name to apply to the 'spam' element.
 * @returns {React.ReactElement} The rendered 'spam' element with the provided children and class name.
 */
import { createElement } from 'react'

export function Spam({ children, className }: Fabric): JSX.Element {
  return createElement('spam', { className }, children)
}
