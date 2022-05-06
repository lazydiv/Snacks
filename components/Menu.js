import React from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'

const List = () => {
  return (
    <Menu>
    <Menu.Button>
      <i className='bi-list text-2xl' />
    </Menu.Button> 
    <Menu.Items className='absolute flex-col items-center top-0 z-50 left-0 w-full h-screen bg-opacity-50 backdrop-blur-md bg-mainBlack'>
      <Menu.Button>
        <i className='bi-x-lg  flex p-5  text-2xl' />
      </Menu.Button>
        <Link
            className=''
            href="/"
          >
        <Menu.Item className='flex cursor-pointer  justify-center mb-10' as='fragment'>
            Home
        </Menu.Item>
        </Link>
        <Link
            className=''
            href="/topMovies"
          >
        <Menu.Item className='flex cursor-pointer  justify-center mb-10' as='fragment'>
            Top 250 Movie
        </Menu.Item>
        </Link>
        <Link
            className=''
            href="/topShows"
          >
        <Menu.Item className='flex cursor-pointer justify-center mb-10' as='fragment'>
        
            Top 250 TV Show
     
        </Menu.Item>
        </Link>
    </Menu.Items>
  </Menu>
  )
}

export default List