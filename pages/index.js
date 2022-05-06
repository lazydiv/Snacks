import { useEffect, useState } from 'react'

const Home = () => {
  // get movies from api
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=8319cba0d367c9ab60f985d626f4cc9b`)
      .then(response => response.json())
      .then(window.scrollTo(0, 0))
      .then(data => setMovies(data.results))
      .then(error => console.log(error))
      .then(() => setLoading(false))
  }, [])
  console.log(movies)
  // render movies
  
  const renderMovies = movies.map((movie => 
    <li className='m-10 w-5/6 mx-auto max-w-[500px] rounded-md'> 
    <a href={`https://youtube.com/results?search_query=${movie.title || movie.name}+trailer`} target='_blank'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <h1 className='mt-4'>{movie.title}{movie.name}</h1>
        <p className='text-sm mt-2'>{movie.overview}</p>
        </a>
        <a/>
      </li>
  ))
  return (
    <div>

      <div className='inline-flex'>
        <p className='text-3xl   mt-14 ml-10 border-b-4 border-mainLightGray w-24 pb-2'>Home</p>
      </div>

      <ul className='grid w-full max-w-[2160px] mx-auto mt-20
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    md:w-5/6'>
        {renderMovies}
      </ul>
      <div className='flex'>
        <div className='inline-flex m-10 justify-between mx-auto text-xl  w-20'>
          <button>{'<'}</button>
          <p>1</p>
          <button>{'>'}</button>
        </div>
      </div>
    </div>
  )
}

export default Home