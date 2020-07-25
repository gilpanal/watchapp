import React from "react";
import Movie from './Movie'
import Spinner from './Spinner'
import LazyLoad from "react-lazyload";

const List = ({ listdata }) => {

  if (!listdata) {
    return <Spinner />
  } else {
    
    return (
      <div className="post-container">
        {listdata.results.map(movie => (
          <LazyLoad
            key={movie.id}
            height={100}
            offset={[-100, 100]}
            placeholder={listdata.page === listdata.total_pages ? null : <Spinner />}
          >
            <Movie key={movie.id} {...movie} />
          </LazyLoad>
        ))}
      </div>
    )
  }


}

export default List;
