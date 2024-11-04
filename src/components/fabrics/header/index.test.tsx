import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './index'
import '@testing-library/jest-dom'

describe('Header component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Header>Test Header</Header>)
    expect(getByText('Test Header')).toBeInTheDocument()
  })

  it('applies className correctly', () => {
    const { container } = render(
      <Header className="test-class">Test Header</Header>,
    )
    expect(container.firstChild).toHaveClass('test-class')
  })

  it('renders without className', () => {
    const { container } = render(<Header>Test Header</Header>)
    expect(container.firstChild).not.toHaveClass()
  })
})
