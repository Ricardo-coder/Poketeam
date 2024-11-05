import React from 'react'
import { render } from '@testing-library/react'
import { Span } from './index'

describe('Span component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Span />)
    expect(container).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    const { getByText } = render(<Span>Test Content</Span>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('passes props to the Span element', () => {
    const { container } = render(<Span className="test-class" />)
    expect(container.firstChild).toHaveClass('test-class')
  })
})
