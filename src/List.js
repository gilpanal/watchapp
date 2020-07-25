import React, {useState, useEffect} from "react";
//import data from "./data";
import Movie from './Movie'
import Spinner from './Spinner'
import LazyLoad from "react-lazyload";

const API_KEY = "48ef1167e15f49af1e1c9e627854e7ef";

const List = () => {
  
  const [searchMovie, setSearchMovie] = useState(null);
  const [initialData, setInitialData] = useState(null)
  
  const handleSearchMovie = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		setSearchMovie(data.get("search"));
  };
  
  useEffect(() => {
		
		async function fetchData () {
			if(searchMovie){			

				const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}&page=1&include_adult=false`;
		
				await fetch(URL)
					.then((res) => res.json())
					.then((data) => {
            setInitialData(data.results)	
					});
			}
		}	

		fetchData()
		
  }, [searchMovie]);
  
  useEffect( () => {
    const fetchData = async () => {       		
        
        const URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;	
				await fetch(URL)
					.then((res) => res.json())
					.then((data) => {            
            setInitialData(data.results)	
          });
    }
    fetchData()
  }, [])
  
  if(!initialData){
    return <Spinner/>
  } else {
    return(
        <div className="App">        
          <h2>Watch App</h2>       
        <form onSubmit={handleSearchMovie}>
            <input
              type="text"
              name="search"
              className="field"
              placeholder="Type id imbd"
            />
            <button className="button">Search</button>
          </form>
        
        <div className="post-container">
          {initialData.map(movie => (
            <LazyLoad
              key={movie.id}
              height={100}
              offset={[-100, 100]}
              placeholder={<Spinner />}
            >
              <Movie key={movie.id} {...movie} />
            </LazyLoad>
          ))}
        </div>
      </div>
    )
  }
  
}

export default List;
