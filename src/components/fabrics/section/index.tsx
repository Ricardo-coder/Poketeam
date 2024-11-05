/**
 * A functional component that renders a section element.
 *
 * @param {React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>} props - The props for the section element.
 * @param {React.ReactNode} props.children - The children elements to be rendered inside the section.
 * @returns {JSX.Element} The rendered section element.
 */
import { createElement } from 'react'

export function Section({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>): JSX.Element {
  return createElement('section', props, children)
}
