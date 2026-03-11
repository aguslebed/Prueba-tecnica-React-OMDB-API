
export async function getMovies(movieSearchInput) {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=88754f02&s=${movieSearchInput}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}