import React, { useState, useEffect } from 'react'
import List from '../components/List'
import Header from '../components/Header'
import { queryIMDB } from '../components/Helper'
import './Home.css'

const Home = () => {
  const [searchMovie, setSearchMovie] = useState(null)
  const [initialData, setInitialData] = useState(null)

  const handleSearchMovie = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    setSearchMovie(data.get('search'))
  }

  useEffect(() => {
    const fetchData = async () => {
      let query = 'trending/all/week?'
      if (searchMovie) {
        query =
          `search/movie?query=${searchMovie}&`
      }
      const data = await queryIMDB(query, 1)
      setInitialData(data)
    }
    fetchData()
  }, [searchMovie])

  return (
    <div className="home">
      <Header handleSearchMovie={handleSearchMovie} />
      <List listdata={initialData} />
    </div>
  )
}

export default Home
