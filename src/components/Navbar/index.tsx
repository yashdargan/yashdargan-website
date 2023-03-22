import { AiFillThunderbolt, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className='flex h-[10vh] justify-between items-center text-xl '>
      <ul className='flex gap-4 cursor-pointer invisible md:visible'>
        <li className='hover:text-green-400'>
          <Link to='/' >Home</Link>
        </li>
        <li className='hover:text-green-400'>
          <Link to='https://github.com/yashdargan' target='_blank' >Projects</Link>
        </li>
        <li>
          <Link to='https://github.com/yashdargan'target='_blank' className='text-green-400 font-bold hover:text-white'>Follow</Link>
        </li>
      </ul>
      <button className='flex items-center gap-2 bg-green-400 rounded-xl px-4 py-2 text-black'>
        <AiFillThunderbolt />
        <span className='text-sm font-bold'>Tip</span>
      </button>
      <div className='absolute md:hidden'
        onClick={() => setOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}

        <div className={` fixed flex md:hidden flex-col justify-between bg-background 
        top-[10vh] h-[90vh] p-10 pb-24 pt-20 z-40 w-[40vw] ease-in-out backdrop-filter 
        backdrop-blur-lg bg-opacity-50 duration-500 ${isOpen ? 'left-0' : 'left-[-100vw]'} `}
        onClick={() => setOpen(!isOpen)}>
         <ul className='flex flex-col h-[100vh] mx-auto gap-8 cursor-pointer'>
          <li className='hover:text-green-400'>
            <Link to='/' >Home</Link>
          </li>
          <li className='hover:text-green-400'>
            <Link to='https://github.com/yashdargan' >Projects</Link>
          </li>
          <li>
            <Link to='https://github.com/yashdargan' className='text-green-400 font-bold hover:text-white'>Follow</Link>
          </li>
        </ul>
         </div>
      </div>
    </nav>
  )
}

export default Navbar;
