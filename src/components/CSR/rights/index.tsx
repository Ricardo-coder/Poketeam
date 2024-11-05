/**
 * The `Rights` component displays the copyright information and the developer's name.
 * It uses the current year and a brand name constant.
 *
 * @returns {JSX.Element} A JSX element containing two paragraphs:
 * - The first paragraph shows the brand name, current year, and a message indicating all rights reserved.
 * - The second paragraph shows the developer's name.
 */
'use client'

import { Paragraph, Span } from '@/components/fabrics'
import { BRAND_NAME } from '@/data/constants'

export function Rights(): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <>
      <Paragraph className="text-sm text-center">
        <Span className="font-bold">{BRAND_NAME}®</Span> - {year} | All rights
        reserved.
      </Paragraph>
      <Paragraph className="text-sm text-center">
        <Span className="font-bold">Developed by: </Span>Ricardo Freitas
      </Paragraph>
    </>
  )
}
