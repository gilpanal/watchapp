/* eslint-disable no-undef */
/* https://www.leighhalliday.com/mock-fetch-jest */

import { queryIMDB } from './Helper'

beforeEach(() => {
  fetch.resetMocks()
})

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

const movieById = {
  id: 516486,
  title: 'Greyhound',
  overview: 'A first-time captain leads...',
  poster_path: '/kjMbDciooTbJPofVXgAoFjfX8Of.jpg'
}
it('get trending movies this week', async () => {
  fetch.mockResponseOnce(JSON.stringify(trendMovies))
  const query = 'trending/all/week?'
  const page = 1
  const data = await queryIMDB(query, page)

  expect(data.results[0].title).toEqual('Greyhound')
  expect(fetch).toHaveBeenCalledTimes(1)
})

it('returns error when exception for trending movies', async () => {
  const error = 'API is down'
  fetch.mockReject(() => Promise.reject(error))
  const query = 'trending/all/week?'
  const page = 1
  const API_KEY = process.env.REACT_APP_API_KEY
  const data = await queryIMDB(query, page)
  expect(data.error).toEqual(error)
  expect(fetch).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/${query}api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  )
})

it('get specific movie by id', async () => {
  const movieId = 547016
  fetch.mockResponseOnce(JSON.stringify(movieById))
  const query = `movie/${movieId}?`
  const page = 1
  const data = await queryIMDB(query, page)

  expect(data.title).toEqual('Greyhound')
  expect(fetch).toHaveBeenCalledTimes(1)
})

it('returns error when exception getting movie by id', async () => {
  const error = 'API is down'
  fetch.mockReject(() => Promise.reject(error))
  const movieId = 547016
  const query = `movie/${movieId}?`
  const page = 1
  const data = await queryIMDB(query, page)
  const API_KEY = process.env.REACT_APP_API_KEY
  expect(data.error).toEqual(error)
  expect(fetch).toHaveBeenCalledWith(
    `https://api.themoviedb.org/3/${query}api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  )
})
