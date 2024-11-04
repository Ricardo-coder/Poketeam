import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Logo } from './index'

describe('Logo Component', () => {
  it('renders correctly', () => {
    const { getByAltText, getByText } = render(<Logo />)

    expect(getByText('Poké')).toBeInTheDocument()
    expect(getByText('Team')).toBeInTheDocument()
    expect(getByAltText('Logo')).toBeInTheDocument()
  })

  it('has correct classes applied', () => {
    const { getByAltText, getByText } = render(<Logo />)

    expect(getByText('Poké')).toHaveClass(
      'text-3xl md:text-5xl font-display -mr-4 z-10 text-yellow text-shadow-lg shadow-blue',
    )
    expect(getByText('Team')).toHaveClass(
      'text-3xl md:text-5xl font-display -ml-4 z-10 text-blue text-shadow-lg shadow-yellow',
    )
    expect(getByAltText('Logo')).toHaveClass('z-0 w-16 md:w-24')
  })
})
