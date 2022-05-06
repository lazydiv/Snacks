import List from './Menu'
import SearchList, {setSearchValue} from './searchList'
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { searchTerm } from '../Atoms/Searchitem';

const Header = () => {
    const [searchValue, setSearchValue] = useRecoilState(searchTerm);
    const [visible, setIsVisible] = useState(false)
    const [open, setIsOpen] = useState(false)
    return (
        <header className='sticky flex top-0 h-16 border-b border-mainBlack w-full bg-black bg-opacity-20
        before:absolute before:inset-0
        before:z-[-10]
        before:block
        before:w-full before:h-full
        before:backdrop-blur-md'>
            <div className='mx-5 items-center h-full w-full text-2xl flex '>
                <List className=''/>
                <p className='p-2 ml-5 rounded-md text-mainBlack bg-mainYellow'>Snacks</p>  
                <div className='w-full items-center text-center absoulute md:w-3/6 mx-auto '>
                    <input type="text" onBlur={() => setTimeout(() => {
                        setIsOpen(false)
                    }, 200)} onChange={(e) => setSearchValue(e.target.value) & setIsOpen(true)} className={`w-full  ${ !visible ? 'invisible' : 'visible w-[90%] absolute md:w-3/6 md:top-2 left-[50%] top-20 translate-x-[-50%]' }  outline-none md:visible md:mt-0 p-2 items-center bg-mainLightGray opacity-20 focus:opacity-100 rounded-md  text-mainBlack`} placeholder='type here ...'/>
                </div>
                    
                <button onClick={() => setIsVisible(!visible)}>
                    {visible ? <i className='bi-x-lg  mr-5 visible md:invisible float-right'/> : <i className='bi-search  mr-5 visible md:invisible float-right'/>}
                </button>  
                <a href="https://github.om/lazydiv/Snacks">

                <i className='bi-github float-right mr-5 text-3xl'/>
                </a>
            </div>
            {open && <SearchList/>}
        </header>
    )
}

export default Header