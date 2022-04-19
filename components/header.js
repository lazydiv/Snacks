import React, { useState } from 'react'
import List from './Menu'

const Header = () => {
    return (
        <header className='sticky inline-flex top-0 h-16 w-full bg-black bg-opacity-20'>
            <div className='mx-5 items-center h-full w-full text-2xl flex '>
                <List className=''/>
                <p className='p-2 ml-5 rounded-md text-mainBlack bg-mainYellow'>Snacks</p>  
                <div className='w-full md:w-3/6 mx-auto '>
                    <input type="text" className='w-full invisible md:visible outline-none  p-2 items-center bg-mainLightGray opacity-20 focus:opacity-100 rounded-md text-mainBlack' placeholder='type here ...'/>
                </div>
                <i className='bi-search  mr-5 visible md:invisible float-right'/>
                <i className='bi-github float-right mr-5 text-3xl'/>
            </div>
        </header>
    )
}

export default Header