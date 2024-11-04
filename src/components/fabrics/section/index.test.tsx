import React from 'react'
import { render } from '@testing-library/react'
import { Section } from './index'
import '@testing-library/jest-dom'

describe('Section component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Section>Test Section</Section>)
    expect(getByText('Test Section')).toBeInTheDocument()
  })

  it('applies className correctly', () => {
    const { container } = render(
      <Section className="test-class">Test Section</Section>,
    )
    expect(container.firstChild).toHaveClass('test-class')
  })

  it('renders without className', () => {
    const { container } = render(<Section>Test Section</Section>)
    expect(container.firstChild).not.toHaveClass()
  })
})
