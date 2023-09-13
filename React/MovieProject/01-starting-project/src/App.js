import React, { useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Spinner from "./components/Spinner";
var  currInterval;
function App() {
  const [moviesArr, setMoviesArr] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [err, setErr] = useState(null);
  const[intervalStopped,setIntervalStopped] = useState(false);

  const fetchHandler = async () => {
    setIsLoader(true);
    setErr(null);
    try {
      let response = await fetch("https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setMoviesArr(data.results);
    } catch (error) {
      setErr(error.message);
    }
 
  };

  const retryCall = async() => {
    try{
      const response = await fetch("https://swapi.dev/api/film");
      if(!response.ok){
        throw new Error("Something went wrong ...retrying");
      }
    } catch(error){
      setErr(error.message);
    } 
  };
 
  useEffect(() => {
   
    if (err) {
      currInterval = setInterval(retryCall, 1000);
    }
  
  }, [err]);

  const retryHandler = () => {
    clearInterval(currInterval);
    setIsLoader(false);
   setIntervalStopped(true);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
        <button onClick={retryHandler}>Cancel retrying</button>
      </section>
      <section>
        {isLoader && <Spinner />}
        {!intervalStopped ? (err && <p>{err}</p>):(<p>Retrying Stopped</p>)}
        <MoviesList movies={moviesArr} />
      </section>
    </React.Fragment>
  );
}

export default App;
