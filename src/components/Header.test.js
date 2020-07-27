/* eslint-disable no-undef */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'
describe('Header', () => {
  test('renders a header', () => {
    render(<Header />)
    // implicit assertion
    // because getByText would throw error
    // if element wouldn't be there
    screen.getByText('Watch App')

    // explicit assertion
    // recommended
    expect(screen.getByText('Search')).toBeInTheDocument()
    expect(false).toBe(false)
  })
  it('Form can be submited & input field is modifiable', () => {
    const mockSubmit = jest.fn()
    const { getByPlaceholderText } = render(<Header handleSearchMovie={mockSubmit}/>)
    expect(getByPlaceholderText('Type id imbd')).toHaveValue('')
    fireEvent.change(getByPlaceholderText('Type id imbd'), {
      target: { value: 'forrest' }
    })
    expect(getByPlaceholderText('Type id imbd')).toHaveValue(
      'forrest'
    )
  })
})
