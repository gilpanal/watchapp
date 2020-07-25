import React from 'react'
import Movie from './Movie'
import Spinner from './Spinner'
import LazyLoad from 'react-lazyload'

const List = ({ listdata }) => {
  if (!listdata) {
    return <Spinner />
  } else {
    return (
      <div className="movie-container">
        <ul>
          {listdata && listdata.results.map(movie => (
            <LazyLoad
              key={movie.id}
              height={50}
              offset={[-50, 50]}
              placeholder={listdata.page === listdata.total_pages ? null : <Spinner />}
            >
              <Movie key={movie.id} {...movie} />
            </LazyLoad>
          ))}
        </ul>
      </div>
    )
  }
}

export default List
