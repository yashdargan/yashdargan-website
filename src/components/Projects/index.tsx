import { HiArrowLongRight } from 'react-icons/hi2'
import Bar from '../../shared/Bar'

interface ICreatePostsProps {
  className?: string
  noOfPost: string
  titleOfPost: string
  date: string
}

const CreatePosts: React.FC<ICreatePostsProps> = (props) => {
  return (
    <>
      <li className={`flex justify-between items-center cursor-pointer hover:text-green-400 ${props.className}`}>
        <ul className='flex gap-4'>
          <li className='text-[#71717a]'>{props.noOfPost}</li>
          <li>{props.titleOfPost}</li>
        </ul>
        <li className='text-[#71717a]'>{props.date}</li>
      </li>
      <Bar />
    </>
  )
}

const Projects: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-4xl font-bold my-4'>Latest Projects</div>
      <ul className='flex flex-col gap-4 text-xl my-4'>
        <CreatePosts noOfPost='01' titleOfPost='IOT Security based framework' date='19/04/23' />
        <CreatePosts noOfPost='02' titleOfPost='Google clone' date='19/04/23' />
        <CreatePosts noOfPost='03' titleOfPost='Superkart' date='1/04/23' />
        <CreatePosts noOfPost='04' titleOfPost='Simple Login Page' date='17/04/23' />
      </ul>
      <p className='flex items-center px-4 text-xl text-[#71717a] cursor-pointer hover:text-green-400'>
        All Projects{' '}<HiArrowLongRight />
      </p>
    </div>
  )
}

export default Projects
