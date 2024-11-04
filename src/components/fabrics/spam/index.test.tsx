import React from 'react'
import { render } from '@testing-library/react'
import { Spam } from './index'

describe('Spam component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Spam>Test Content</Spam>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('applies the className prop correctly', () => {
    const { container } = render(
      <Spam className="test-class">Test Content</Spam>,
    )
    expect(container.firstChild).toHaveClass('test-class')
  })

  it('renders without className prop', () => {
    const { container } = render(<Spam>Test Content</Spam>)
    expect(container.firstChild).not.toHaveClass()
  })
})
