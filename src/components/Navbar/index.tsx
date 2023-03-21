import { AiFillThunderbolt } from 'react-icons/ai'

const Navbar: React.FC = () => {
  return (
    <nav className='flex h-[10vh] justify-between items-center text-xl'>
      <ul className='flex gap-4 cursor-pointer'>
        <li className='hover:text-green-400'>
          <a>Home</a>
        </li>
        <li className='hover:text-green-400'>
          <a>Projects</a>
        </li>
        <li>
          <a className='text-green-400 font-bold hover:text-white'>Follow</a>
        </li>
      </ul>
      <button className='flex items-center gap-2 bg-green-400 rounded-xl px-4 py-2 text-black'>
        <AiFillThunderbolt />
        <span className='text-sm font-bold'>Tip</span>
      </button>
    </nav>
  )
}

export default Navbar
