
export function MovieCard({ movie }) {
    return (
        <div key={movie.imdbID} className='flex flex-col items-center hover:scale-105 
        transition-transform duration-300 cursor-pointer
        border border-gray-300 rounded-lg p-2
        shadow-lg
        ' >
            <img src={movie.poster} alt={movie.title} className='w-48 h-64 rounded-lg' />
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
        </div>
    )
}