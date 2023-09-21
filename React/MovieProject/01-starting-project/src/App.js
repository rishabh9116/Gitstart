import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import Spinner from "./components/Spinner";
import AddNewMovieForm from "./components/AddNewMovieForm";
var currInterval;

function App() {
  const [render, setRender] = useState(false);
  const [moviesArr, setMoviesArr] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [err, setErr] = useState(null);
  const [intervalStopped, setIntervalStopped] = useState(false);

  const fetchHandler = useCallback(async () => {
    setIsLoader(true);
    let errr = null;
    try {
      let response = await fetch(
        "https://react-http-4f29e-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      const loadeMovies = [];

      for (const key in data) {
        loadeMovies.push({
          id: key,
          title: data[key].title,
          opening_crawl: data[key].opening_Text,
          release_date: data[key].releaseDate,
        });
      }
      setMoviesArr(loadeMovies);
      console.log("inside fetchHandler , data = ", data);
    } catch (error) {
      setErr(error.message);
      errr = error.message;
    }
    if (!errr) {
      setIsLoader(false);
    }
  }, []);

  const retryCall = async () => {
    try {
      const response = await fetch(
        "https://react-http-4f29e-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong ...retrying");
      } else {
        setErr(null);
      }
    } catch (error) {
      setErr(error.message);
    }
  };

  if (err === "Something went wrong") {
    currInterval = setInterval(retryCall, 1000);
  }

  useEffect(() => {
    console.log("inside useEffect");
    fetchHandler();
  }, [fetchHandler]);

  const retryHandler = () => {
    setErr(null);
    clearInterval(currInterval);
    setIsLoader(false);
    setIntervalStopped(true);
  };

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://react-http-4f29e-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    console.log("inside add Hndler , data = ", data);

    fetchHandler();
  };

  const handleDelete = async (id) => {
    const response = await fetch(
      "https://react-http-4f29e-default-rtdb.firebaseio.com/movies/" +
        id +
        ".json",
      {
        method: "DELETE",
      }
    );
  fetchHandler();
  };
  return (
    <React.Fragment>
      <section>
        <AddNewMovieForm movies={moviesArr} addMovies={addMovieHandler} />
        <button onClick={fetchHandler}>Fetch Movies</button>
        <button onClick={retryHandler}>Cancel retrying</button>
      </section>
      <section>
        {isLoader && <Spinner />}

        {!intervalStopped ? err && <p>{err}</p> : <p>Retrying Stopped</p>}
        <MoviesList movies={moviesArr} handleDelete={handleDelete} />
      </section>
    </React.Fragment>
  );
}

export default App;
