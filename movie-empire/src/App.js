import './App.css';
import { useEffect } from 'react';
// 8b3d536b
const API_URL = 'http://www.omdbapi.com?apikey=8b3d536b';
const App = () => {

  const searchMovie = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(()=>{
     searchMovie('Superman');
  },[])
  return (
    <div className="App">
     <h1></h1>
    </div>
  );
}

export default App;
