import Bar from '../../shared/Bar'

interface ICreateLinksProps {
  first: string
  second: string
  third: string
}

const CreateLinks: React.FC<ICreateLinksProps> = (props) => {
  return (
    <ul className='flex flex-col gap-4 justify-around items-center text-md text-[#52525b] capitalize cursor-pointer'>
      <li className='hover:text-green-400'><a href=''>{props.first}</a></li>
      <li className='hover:text-green-400'><a href=''>{props.second}</a></li>
      <li className='hover:text-green-400'><a href=''>{props.third}</a></li>
    </ul>
  )
}

const Footer = () => {
  return (
  <>
    <Bar />
    <div className="flex justify-around my-8">
      <CreateLinks first='home' second='blog' third='donate' />
      <CreateLinks first='about' second='contact' third='privacy' />
      <CreateLinks first='terms' second='sitemap' third='faq' />
    </div>
  </>
  );
}

export default Footer;
