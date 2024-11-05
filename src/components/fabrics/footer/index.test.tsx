import React from 'react'
import { render } from '@testing-library/react'
import { Footer } from './index'
import '@testing-library/jest-dom'

describe('Footer component', () => {
  it('renders the footer with the provided className and children', () => {
    const { getByText } = render(
      <Footer className="test-class">
        <div>Test Content</div>
      </Footer>,
    )

    const footerElement = getByText('Test Content').parentElement
    expect(footerElement).toBeInTheDocument()
    expect(footerElement).toHaveClass('test-class')
  })

  it('renders the footer without className', () => {
    const { getByText } = render(
      <Footer>
        <div>Test Content</div>
      </Footer>,
    )

    const footerElement = getByText('Test Content').parentElement
    expect(footerElement).toBeInTheDocument()
    expect(footerElement).not.toHaveAttribute('class')
  })
})
