import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import Spinner from "./Spinner";



const MoviesGrid = ( {search} ) => {
  // let movies = []
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
      setIsLoading(true)
      const searchUrl = search
        ? "/search/movie?query=" + search
        : "/discover/movie";
      get(searchUrl).then((data) => {
        setMovies(data.results);
        setIsLoading(false);
        // movies= data.results;
        // console.log(movies);
      });
  }, [search]);
    
  

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
