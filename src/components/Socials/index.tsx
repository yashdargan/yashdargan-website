


import React from 'react'
import { 
  SlSocialYoutube,
  SlSocialTwitter,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin
} from 'react-icons/sl'

const icons = [ SlSocialYoutube, SlSocialTwitter, SlSocialGithub, SlSocialInstagram, SlSocialLinkedin ]

interface ICreateIconsProps {
  icon: React.ComponentType;
}

const CreateIcons: React.FC<ICreateIconsProps> = (props) => {
  return (
    <div className='hover:text-green-400 cursor-pointer' >
      <props.icon />
    </div>
  )
}

const Socials: React.FC = () => {
  return (
    <div className="flex justify-around w-[85%] md:w-[60%] mx-auto text-4xl m-16">
      {icons.map((icon) => <CreateIcons icon={icon} />)}
    </div>
  );
}

export default Socials
