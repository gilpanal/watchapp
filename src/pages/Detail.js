import React, { useState, useEffect, Fragment } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { queryIMDB } from '../components/Helper'
import './Detail.css'

const Detail = (props) => {
  const [initialData, setInitialData] = useState(null)
  const movieId = props.match.params.movieId
  useEffect(() => {
    const fetchData = async () => {
      const query = `movie/${movieId}?`
      const data = await queryIMDB(query, 1)
      setInitialData(data)
    }
    fetchData()
  }, [movieId])
  if (!initialData) {
    return <Spinner/>
  } else {
    return (
      <div>
        <div className="header-detail">
          <BrowserRouter>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}><div className="nav-back"></div></Link>
            <h1 className="movie-detail-title">{initialData ? initialData.title : 'No Info'}</h1>
          </BrowserRouter>
        </div>
        <div className="movie-card">
          {initialData ? (
            <Fragment>
              <img src={`https://image.tmdb.org/t/p/w300${initialData.poster_path}`} alt={initialData.title} />
              <p>{initialData.overview}</p>
            </Fragment>
          ) : (
            'No film to display.'
          )}
        </div>
      </div>
    )
  }
}

export default Detail
