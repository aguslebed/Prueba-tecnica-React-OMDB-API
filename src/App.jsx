import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import moviesResponse from './mocks/moviesResponse.json'
import { MovieCard } from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)
  const [hasMovies, setHasMovies] = useState(moviesResponse.Search.length > 0)
  const [movies, setMovies] = useState(moviesResponse.Search.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbID: movie.imdbID
    }
  }))
  return (
    <>
      <header className='flex justify-center w-full'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>Buscador de películas</h1>

          <form action="submit" className='flex flex-col gap-2 justify-center'>
            <label htmlFor="movie">Buscar película</label>
            <input className='border border-gray-300 rounded-md px-4 py-2' name='movieSearchInput' type="text" id='movie' placeholder='Spiderman, Gladiador, Star Wars, ...' />
            <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors cursor-pointer' >Buscar</button>
          </form>
        </div>
      </header>

      <main className='grid grid-cols-4 gap-4 place-items-center mt-6'>
        {hasMovies ? movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        )) : <p>No se encontraron películas</p>}
      </main>
    </>
  )
}

export default App
