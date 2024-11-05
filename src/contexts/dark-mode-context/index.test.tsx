import React from 'react'
import { render, screen } from '@testing-library/react'
import { DarkModeProvider, useDarkMode } from './index'
import '@testing-library/jest-dom'

const TestComponent = () => {
  const { isDarkModeActive, setDarkMode } = useDarkMode()
  return (
    <div>
      <span data-testid="dark-mode-status">{isDarkModeActive.toString()}</span>
      <button onClick={() => setDarkMode(!isDarkModeActive)}>Toggle</button>
    </div>
  )
}

describe('DarkModeContext', () => {
  it('should provide default dark mode value', () => {
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>,
    )
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('true')
  })

  it('should toggle dark mode value', async () => {
    render(
      <DarkModeProvider>
        <TestComponent />
      </DarkModeProvider>,
    )
    const toggleButton = screen.getByText('Toggle')
    await toggleButton.click()

    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('false')
    await toggleButton.click()
    expect(screen.getByTestId('dark-mode-status')).toHaveTextContent('true')
  })
})
