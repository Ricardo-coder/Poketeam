import React from 'react'
import { render } from '@testing-library/react'
import { Paragraph } from './index'

describe('Paragraph component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Paragraph>Test Paragraph</Paragraph>)
    expect(getByText('Test Paragraph')).toBeInTheDocument()
  })

  it('passes additional props to the paragraph element', () => {
    const { container } = render(
      <Paragraph className="test-class">Test Paragraph</Paragraph>,
    )
    expect(container.firstChild).toHaveClass('test-class')
  })
})
