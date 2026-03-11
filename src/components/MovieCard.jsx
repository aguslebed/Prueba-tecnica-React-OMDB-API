
export function MovieCard({ movie }) {
    return (
        <div key={movie.imdbID} className='flex flex-col items-center hover:scale-105 
        transition-transform duration-300 cursor-pointer
        bg-slate-800 border border-slate-700 rounded-lg p-2
        shadow-lg
        h-full
        ' >
            <img src={movie.poster} alt={movie.title} className='w-72 h-96 rounded-lg' />
            <h2 className='text-lg flex justify-center font-bold w-48'>{movie.title}</h2>
            <p className='flex justify-center w-48'>{movie.year}</p>
        </div>
    )
}