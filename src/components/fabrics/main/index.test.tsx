import React from 'react'
import { render } from '@testing-library/react'
import { Main } from './index'
import '@testing-library/jest-dom'

describe('Main component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    const { getByText } = render(<Main>Test Child</Main>)
    expect(getByText('Test Child')).toBeInTheDocument()
  })

  it('passes props to the main element', () => {
    const { container } = render(<Main id="main-id" className="main-class" />)
    const mainElement = container.firstChild as HTMLElement
    expect(mainElement.id).toBe('main-id')
    expect(mainElement.className).toBe('main-class')
  })
})
