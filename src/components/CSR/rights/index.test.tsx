import React from 'react'
import { render } from '@testing-library/react'
import { Rights } from './index'
import { BRAND_NAME } from '@/data/constants'
import '@testing-library/jest-dom'

describe('Rights Component', () => {
  it('should render the brand name, current year, and all rights reserved message', () => {
    const { getByText } = render(<Rights />)
    const year = new Date().getFullYear()
    expect(
      getByText((content, element) => {
        const hasText = (node: Element) =>
          node.textContent ===
          `${BRAND_NAME}® - ${year} | All rights reserved.`
        const elementHasText = hasText(element as Element)
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child),
        )
        return elementHasText && childrenDontHaveText
      }),
    ).toBeInTheDocument()
  })

  it("should render the developer's name", () => {
    const { getByText } = render(<Rights />)
    expect(
      getByText((content, element) => {
        const hasText = (node: Element) =>
          node.textContent === 'Developed by: Ricardo Freitas'
        const elementHasText = hasText(element as Element)
        const childrenDontHaveText = Array.from(element?.children || []).every(
          (child) => !hasText(child),
        )
        return elementHasText && childrenDontHaveText
      }),
    ).toBeInTheDocument()
  })
})
