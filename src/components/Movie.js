import React from 'react'

const Movie = function ({ id, name, price }) {
  return (
    <div className="list-item">
      <h3>{name}</h3>
      &nbsp;
      <h3> ${price}</h3>
    </div>
  )
}
export default Movie
