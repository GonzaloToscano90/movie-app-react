import React from "react";
import { Link } from "react-router-dom";
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
      <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
      <div className={styles.widthTitle}>{movie.title}</div>
      </Link>
    </li>
  );
};

export default MovieCard;
