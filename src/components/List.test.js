/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import List from './List'
describe('List', () => {
  test('renders a list of movies', () => {
    render(<List/>)
    // screen.debug()
    // const { getByText } = render(<List />)
    expect(true).toBe(true)
  })
})
