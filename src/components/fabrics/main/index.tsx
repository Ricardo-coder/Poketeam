/**
 * Main component that renders a <main> HTML element.
 *
 * @param {React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>} props - The props for the component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the <main> element.
 * @returns {JSX.Element} The rendered <main> element with the provided props and children.
 */
import { createElement } from 'react'

export function Main({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>): JSX.Element {
  return createElement('main', props, children)
}
