import React from 'react'
import { string, number } from 'prop-types'
import {
  Link
} from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import './Movie.css'

// eslint-disable-next-line camelcase
const Movie = ({ id, title, overview, poster_path }) => {
  // eslint-disable-next-line camelcase
  const poster = `https://image.tmdb.org/t/p/w200${poster_path}`
  const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
      <div className="movie">
        <LazyLoad
          once={true}
          placeholder={<img src={placeHolder} alt="..." />}

        >
          <div className="movie-img">
            <img src={poster} alt="..." />
          </div>
        </LazyLoad>
        <div className="movie-body">
          <h4>{title}</h4>
          <p>{overview}</p>
        </div>
      </div>
    </Link>
  )
}

Movie.propTypes = {
  id: number,
  title: string,
  overview: string,
  poster_path: string
}
export default Movie
