import React from 'react'
import { useEffect, useState, useLayoutEffect } from 'react'
import { useRecoilState } from 'recoil';
import { searchTerm } from '../Atoms/Searchitem';
const SearchList = () => {
        // get search value from input
        const [searchValue, setSearchValue] = useRecoilState(searchTerm);
        const [searchResults, setSearchResults] = useState([])
        const [loading, setLoading] = useState(false)
        // get search results from api
        useLayoutEffect(() => {
            setLoading(true)
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=8319cba0d367c9ab60f985d626f4cc9b&language=en-US&query=${searchValue}&page=1&include_adult=true`)
              .then(response => response.json())
              .then(window.scrollTo(0, 0))
              .then(data => setSearchResults(data.results))
              .then(error => console.log(error))
              .then(() => setLoading(false))
          }, [searchValue])
        
        
        // render search results
        if (loading) {
            return <p className='absolute w-full text-center mt-32'>Data is loading...</p>;
          }
        if (searchValue === '') {
            setSearchValue(searchTerm)
        }
          
        const renderSearchResults = searchResults.map((result =>
            <li className='border-b  border-mainBlack border-opacity-20  w-5/6 mx-auto'>
                <div className='inline-flex pb-5 mt-5 items-center'>
                    
                <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} className='h-14 mr-5'/>
                <h1 className=''>{result.title}{result.name}</h1>
                </div>
            </li>
        ))
  return (
        <div className='absolute mt-20 w-full'>
            <div className='w-full md:w-3/6   mx-auto'>
                <ul className='no-scrollbar w-full flex-col overflow-y-scroll bg-opacity-20 max-h-96 bg-white rounded-md'>
                   {renderSearchResults}
                </ul>
            </div>
        </div>
  )
}

export default SearchList