import React from 'react'
import { render } from '@testing-library/react'
import { Spam } from './index'

describe('Spam component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Spam />)
    expect(container).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    const { getByText } = render(<Spam>Test Content</Spam>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('passes props to the spam element', () => {
    const { container } = render(<Spam className="test-class" />)
    expect(container.firstChild).toHaveClass('test-class')
  })
})
