import React, { useState, useEffect, Fragment } from "react";
import {   
    Link
  } from "react-router-dom";
import Spinner from './Spinner'
const API_KEY = "48ef1167e15f49af1e1c9e627854e7ef";
const Detail = (props)  => {
    const [initialData, setInitialData] = useState(null)
    const movie_id = props.match.params.movieId
    useEffect( () => {
        const fetchData = async () => {       		
            
            const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;	
                    await fetch(URL)
                        .then((res) => res.json())
                        .then((data) => {            
                setInitialData(data)	
              });
        }
        fetchData()
      }, [movie_id])
      if(!initialData){
        return <Spinner/>
      } else {
	return (
        <div>
            <div className="abcde" id="abcde">
                <Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}><div className="Fresh Mango"></div></Link>
                <h1 className="sky14">{initialData ? initialData.title : 'No Info'}</h1>
                <div className="Fresh Orange"></div>
            </div>
            <div className="movie-card">
                {initialData ? (
                    <Fragment>                        
                        <img src={`https://image.tmdb.org/t/p/w300${initialData.backdrop_path}`} alt={initialData.title} />
                        <p>{initialData.overview}</p>
                    </Fragment>
                ) : (
                    "No hay pelicula."
                )}
            </div>
        </div>
    );
    }
}

export default Detail