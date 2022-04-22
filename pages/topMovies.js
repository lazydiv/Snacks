import { useEffect, useState } from 'react'

const TopMovies = () => {
  // get movies from api
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page , setPage] = useState(1) 
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=8319cba0d367c9ab60f985d626f4cc9b&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}&with_watch_monetization_types=flatrate`)
      .then(response => response.json())
      .then(window.scrollTo(0, 0))
      .then(data => setMovies(data.results))
      .then(error => console.log(error))
      .then(() => setLoading(false))
  }, [page])
  // render movies
  console.log(movies)
  
  const renderMovies = movies.map((movie => 
     <li className='m-10 w-5/6 mx-auto max-w-[500px] rounded-md'> 
     {/* <a href={movie.}></a> */}
     <a href={`https://youtube.com/results?search_query=${movie.title || movie.name}+trailer`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h1 className='mt-4'>{movie.title}</h1>
        <p className='text-sm mt-2'>{movie.overview}</p>
        </a>
      </li>
  ))
  let min = () => {
    if(page === 1) {
      return 1

    } else {
      setPage(page - 1)
    }
  }
  return (
    <div>
      <p className='text-3xl   mt-14 ml-10 border-b-4 border-mainLightGray w-40 pb-2'>Top Movies</p>
      <ul className='grid w-full max-w-[2160px] mx-auto mt-20
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    md:w-5/6'>
        {renderMovies}
      </ul>
      <div className='flex'>
      <div className='inline-flex m-10 justify-between mx-auto text-xl  w-20'>
        <button onClick={() => setPage(min)}>{'<'}</button>
        <p>{page}</p>
        <button onClick={() => setPage(page + 1)}>{'>'}</button>
      </div>
      </div>
    </div>
  )
}

export default TopMovies