import React, { useContext } from 'react'
import { MovieContext } from '../MovieContext'

const Nav = function () {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <nav>
      <span>DevEd</span>
      <span> List of Movies: {movies.length}</span>
    </nav>
  )
}
export default Nav
