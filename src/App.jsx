import { useState } from 'react'
import './App.css'
import moviesResponse from './mocks/moviesResponse.json'
import { MovieCard } from './components/MovieCard'

function App() {
  const [count, setCount] = useState(0)
  const [hasMovies, setHasMovies] = useState(moviesResponse.Search.length > 0)

  //Mapeo de la respuesta de la API a un objeto mas limpio
  const [movies, setMovies] = useState(moviesResponse.Search.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbID: movie.imdbID
    }
  }))


  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = new window.FormData(e.target)
    const movieSearchInput = fields.get('movieSearchInput')
    console.log(movieSearchInput)
  }

  return (
    <>
      <header className='flex justify-center w-full'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Buscador de películas</h1>

          <form action="submit" onSubmit={handleSubmit} className='flex flex-col gap-2 justify-center '>
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
