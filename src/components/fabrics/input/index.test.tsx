import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from './index'

describe('Input component', () => {
  it('should render without crashing', () => {
    const { getByRole } = render(<Input />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('should call onChange when input value changes', () => {
    const handleChange = jest.fn()
    const { getByRole } = render(<Input onChange={handleChange} />)
    const input = getByRole('textbox')

    fireEvent.change(input, { target: { value: 'test' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('should pass other props to the input element', () => {
    const { getByRole } = render(<Input placeholder="Enter text" />)
    const input = getByRole('textbox')

    expect(input).toHaveAttribute('placeholder', 'Enter text')
  })
})
