import React, { useState } from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  const[render,setRender] = useState(false);

  
  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <div>
          <Movie
           key={movie.id}
            id={movie.id}
            title={movie.title}
            releaseDate={movie.release_date}
            openingText={movie.opening_crawl}
          />
          <button onClick={() => props.handleDelete(movie.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
};

export default MovieList;
