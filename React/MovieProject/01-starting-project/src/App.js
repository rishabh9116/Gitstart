import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Spinner from "./components/Spinner";

function App() {
 
  const [moviesArr, setMoviesArr] = useState([]);
  const[isLoader,setIsLoader] = useState(false);

  const fetchHandler = async() => {
    setIsLoader(true);
  const response =   await fetch("https://swapi.dev/api/films")
  const data = await response.json();  
  setMoviesArr(data.results);
      setIsLoader(false);
  };
 
 
  
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        {
          isLoader &&  <p>Loading...</p>
        }
       
          
        
        <MoviesList movies={moviesArr} />
      </section>
    </React.Fragment>
  );
}

export default App;
