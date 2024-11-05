import React from 'react'
import { render } from '@testing-library/react'
import { Section } from './index'

describe('Section component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Section />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    const { getByText } = render(<Section>Test Content</Section>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })

  it('passes additional props to the section element', () => {
    const { container } = render(
      <Section id="test-id" className="test-class" />,
    )
    const sectionElement = container.firstChild
    expect(sectionElement).toHaveAttribute('id', 'test-id')
    expect(sectionElement).toHaveClass('test-class')
  })
})
