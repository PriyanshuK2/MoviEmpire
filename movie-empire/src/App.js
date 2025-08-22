import './App.css';
import { useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// 8b3d536b
const API_URL = 'http://www.omdbapi.com?apikey=8b3d536b';
const App = () => {
  const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState('');
  const searchMovie = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
     searchMovie('Avengers');
  },[])
  return (
    <div className="app">
      <h1>MoviEmpire</h1>
      <div className='search'>
        <input 
        placeholder="Search the Movie"
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt="Search"
        onClick={()=> searchMovie(searchTerm)}
        />
      </div>

      {
        movies?.length>0 ? (
          <div className="container">
          {movies.map((movie)=>
          (
            <MovieCard movie = {movie} />
          ))}
  
          </div>
        ) : (

          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }

     
     </div>
  );
};

export default App;
