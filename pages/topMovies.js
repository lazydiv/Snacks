import React from 'react'

const TopMovies = () => {
  return (
    <div>
      <p className='text-3xl   mt-14 ml-10 border-b-4 border-mainLightGray w-40 pb-2'>Top Movies</p>
      <ul className='grid w-full max-w-[2160px] mx-auto mt-20
    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    md:w-5/6'>
        <li className='md:w-full w-5/6 mx-auto max-w-[500px] rounded-md  opacity-10 bg-mainLightGray h-72'>
        </li>
      </ul>
    </div>
  )
}

export default TopMovies