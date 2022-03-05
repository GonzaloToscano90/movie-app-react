import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import Spinner from "./Spinner";

const MoviesGrid = () => {
  // let movies = []
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(
    () => [
      setIsLoading(true),
      get("/discover/movie").then((data) => {
        setIsLoading(false);
        setMovies(data.results);
        // movies= data.results;
        console.log(movies);
      }),
    ],
    []
  );

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <ul className={styles.moviesGrid} width={300} height={450}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesGrid;
