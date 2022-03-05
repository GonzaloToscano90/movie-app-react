import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { get } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);//SPINNER
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true); //SPINNER

    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
      console.log(data);
    });
  }, [movieId]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  const imageUrl = "http://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        key={movie.id}
        alt={movie.title}
      />
      <div className={styles.col}>
        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genero:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <p>
          <strong>Año:</strong> {movie.release_date}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
