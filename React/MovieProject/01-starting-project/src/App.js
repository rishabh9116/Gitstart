import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Spinner from "./components/Spinner";
var  currInterval;
var err;
function App() {
  const [moviesArr, setMoviesArr] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
 
  const[intervalStopped,setIntervalStopped] = useState(false);

  const fetchHandler = useCallback (async() => {
    setIsLoader(true);
    err = null;
    try {
      let response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setMoviesArr(data.results);
    } catch (error) {
      err = error.message;
    }
    !err && setIsLoader(false);
  },[]);

  const retryCall = async() => {
    try{
      const response = await fetch("https://swapi.dev/api/films");
      if(!response.ok){
        throw new Error("Something went wrong ...retrying");
      } else{
        err = null;
      }
    } catch(error){
      err = error.message;
    } 
   
  };

  if (err) {
    currInterval = setInterval(retryCall, 1000);
  }
 
  useEffect(() => {
    console.log("inside useEffect")
    fetchHandler();
  
  
  }, [fetchHandler]);

  const retryHandler = () => {
    err = null;
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
