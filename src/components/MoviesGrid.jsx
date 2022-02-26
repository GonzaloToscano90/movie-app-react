import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import styles from './MoviesGrid.module.css'
import {get} from '../utils/httpClient'


const MoviesGrid = () => {
  // let movies = []
  const [movies, setMovies] = useState([])
  useEffect(() =>[
        get('/discover/movie').then(data =>{
        setMovies(data.results)
        // movies= data.results;
        console.log(movies)
      })
  ],[])

  return (
    <div>
        <ul className={styles.moviesGrid} width={300} height={450}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} /> )}
        </ul>
    </div>
  )
}

export default MoviesGrid