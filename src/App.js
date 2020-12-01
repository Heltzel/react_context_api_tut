import './App.css'
import Nav from './components/Nav'
import MovieList from './components/MovieList'
import AddMovies from './components/AddMovies'
import { MovieProvider } from './MovieContext'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovies />
        <MovieList />
      </div>
    </MovieProvider>
  )
}

export default App
