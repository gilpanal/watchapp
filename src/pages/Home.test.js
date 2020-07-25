/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import Home from './Home'

describe('Home', () => {
  test('renders title and search button', () => {
    const { getByText } = render(<Home />)
    const titleElement = getByText(/Watch App/i)
    expect(titleElement).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })
  test('renders App component', async () => {
    render(<Home />)
    // expect(screen.queryByText(/Greyhound/)).toBeNull()
    // screen.debug()
    // expect(await screen.findByText(/Greyhound/)).toBeInTheDocument()
    // screen.debug()
  })
  /* test('renders App component', async () => {
    const stories = [
      { id: 1, title: 'Hello' },
      { it: 2, title: 'React' }
    ]
    render(<Home />)
    // screen.debug()
    fetch(() =>
      Promise.resolve({ data: { results: stories } })
    )
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'forrest' }
    })
    await userEvent.click(screen.getByRole('button'))
    const items = await screen.findAllByRole('listitem')
    screen.debug()
    expect(items).toHaveLength(2)
  }) */
})
