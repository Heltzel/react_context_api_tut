import React, { useState, useContext } from 'react'
import { MovieContext } from '../MovieContext'

const AddMovies = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [movies, setMovies] = useContext(MovieContext)

  const updateName = (e) => {
    setName(e.target.value)
  }
  const updatePrice = (e) => {
    setPrice(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: price, id: new Date().getTime() },
    ])
    setName('')
    setPrice('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="name" value={name} onChange={updateName} />
        <label htmlFor="">Price</label>
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddMovies
