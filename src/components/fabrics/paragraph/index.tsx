/**
 * A functional component that renders a paragraph element.
 *
 * @param {React.PropsWithChildren<React.HTMLAttributes<HTMLParagraphElement>>} props
 * The props for the paragraph element, including any children and additional HTML attributes.
 *
 * @returns {JSX.Element} The rendered paragraph element.
 */
import { createElement } from 'react'

export function Paragraph({
  children,
  ...props
}: React.PropsWithChildren<
  React.HTMLAttributes<HTMLParagraphElement>
>): JSX.Element {
  return createElement('p', props, children)
}
