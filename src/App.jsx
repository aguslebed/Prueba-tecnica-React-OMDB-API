import { useState } from 'react'
import './App.css'
import moviesResponse from './mocks/moviesResponse.json'
import { MovieCard } from './components/MovieCard'
import { getMovies } from './api'

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


  const handleSubmit = async (e) => {
    e.preventDefault()
    const fields = new window.FormData(e.target)
    const movieSearchInput = fields.get('movieSearchInput')
    const response = await getMovies(movieSearchInput)
    setMovies(response.Search.map((movie) => {
      return {
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
        imdbID: movie.imdbID
      }
    }))
  }

  return (
    <div className='min-h-screen bg-slate-900 text-slate-100'>
      <header className='flex justify-center w-full py-10'>
        <div className='flex flex-col gap-6 bg-slate-800 border border-slate-700 rounded-2xl px-8 py-8 shadow-2xl w-full max-w-md'>
          <h1 className='text-2xl font-bold text-indigo-400 text-center'>Buscador de películas</h1>

          <form action="submit" onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <label htmlFor="movie" className='text-sm font-medium text-slate-300'>Buscar película</label>
            <input
              className='bg-slate-700 border border-slate-600 text-slate-100 placeholder-slate-400 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'
              name='movieSearchInput'
              type="text"
              id='movie'
              placeholder='Spiderman, Gladiador, Star Wars, ...'
            />
            <button
              type="submit"
              className='bg-indigo-600 text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-indigo-500 active:scale-95 transition-all cursor-pointer w-full mt-1'
            >
              Buscar
            </button>
          </form>
        </div>
      </header>

      <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center mt-6'>
        {hasMovies ? movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        )) : <p>No se encontraron películas</p>}
      </main>
    </div>
  )
}

export default App
