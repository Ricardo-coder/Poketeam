import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from './index'

describe('Header component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header>Test Header</Header>)
    expect(container).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    const { getByText } = render(<Header>Test Header</Header>)
    expect(getByText('Test Header')).toBeInTheDocument()
  })

  it('applies passed props to the header element', () => {
    const { container } = render(
      <Header className="test-class">Test Header</Header>,
    )
    expect(container.firstChild).toHaveClass('test-class')
  })
})
