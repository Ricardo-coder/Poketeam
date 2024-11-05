import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './index'

describe('Footer component', () => {
  it('should render without crashing', () => {
    const { container } = render(<Footer>Test Content</Footer>)
    expect(container).toBeInTheDocument()
  })

  it('should render children correctly', () => {
    const { getByText } = render(<Footer>Test Content</Footer>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('should pass additional props to the footer element', () => {
    const { container } = render(
      <Footer className="test-class">Test Content</Footer>,
    )
    expect(container.firstChild).toHaveClass('test-class')
  })
})
