import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from '../MovieContext'

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div className="list">
      <h1>Our Special Offers</h1>
      <ul>
        {movies.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </ul>
    </div>
  )
}

export default MovieList
