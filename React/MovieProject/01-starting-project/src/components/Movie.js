import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  console.log("inside Movie Component", "episode_id = ",props.id);
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      
    </li>
  );
};

export default Movie;
