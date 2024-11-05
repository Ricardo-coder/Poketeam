/**
 * Footer component that renders a footer HTML element.
 *
 * @param {React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>} props - The props for the footer component.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the footer.
 * @returns {JSX.Element} The rendered footer element.
 */
import { createElement } from 'react'

export function Footer({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>): JSX.Element {
  return createElement('footer', props, children)
}
