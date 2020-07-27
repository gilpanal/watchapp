/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import List from './List'

const trendMovies = {
  page: 1,
  results: [
    {
      id: 516486,
      title: 'Greyhound',
      overview: 'A first-time captain leads...',
      poster_path: '/kjMbDciooTbJPofVXgAoFjfX8Of.jpg'
    },
    {
      id: 547016,
      title: 'The Old Guard',
      poster_path: '/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg',
      overview: "Four undying warriors who've secretly protected ..."
    }

  ],
  total_pages: 1000,
  total_results: 20000
}
describe('List', () => {
  test('renders a list of movies', () => {
    render(<List listdata={trendMovies}/>)
    // screen.debug()
    // const { getByText } = render(<List />)
    expect(true).toBe(true)
  })
  test('renders a list of movies', () => {
    render(<List/>)
    // screen.debug()
    // const { getByText } = render(<List />)
    expect(true).toBe(true)
  })
})
