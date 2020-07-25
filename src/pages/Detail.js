import React, { useState, useEffect, Fragment } from "react";
import {   
    Link
  } from "react-router-dom";
import Spinner from '../components/Spinner'
import { queryIMDB } from '../components/Helper'

const Detail = (props)  => {
    const [initialData, setInitialData] = useState(null)
    const movie_id = props.match.params.movieId
    useEffect( () => {
        const fetchData = async () => {       	
            const query = `movie/${movie_id}?`	
            const data = await queryIMDB(query, 1)
            setInitialData(data)       
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
                        <img src={`https://image.tmdb.org/t/p/w300${initialData.poster_path}`} alt={initialData.title} />
                        <p>{initialData.overview}</p>
                    </Fragment>
                ) : (
                    "No film to display."
                )}
            </div>
        </div>
    );
    }
}

export default Detail