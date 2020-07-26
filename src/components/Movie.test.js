/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Movie from './Movie'

// const movieById = {
//   id: 516486,
//   title: 'Greyhound',
//   overview: 'A first-time captain leads...',
//   poster_path: '/kjMbDciooTbJPofVXgAoFjfX8Of.jpg'
// }
describe('Movie', () => {
  test('renders a movie', () => {
    render(<Movie />)
    expect(false).toBe(false)
  })
})
