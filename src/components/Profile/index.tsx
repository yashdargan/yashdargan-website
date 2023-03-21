const Profile: React.FC = () => {
  return (
    <section className='flex flex-col gap-6 md:flex-row justify-between my-8'>
      <div className='flex flex-col gap-2 md:gap-6 order-2 md:order-1'>
        <h1 className='text-4xl md:text-5xl font-bold'>Yash Raj Dargan</h1>
        <p className='font-lighter text-[#71717a]'>
          I am a skilled <span className='text-green-400'>Frontend Web Developer</span> who is adept at creating
          beautiful and functional user interfaces using HTML, CSS, and
          JavaScript.
        </p>
      </div>
      <img className='w-24 md:h-36 md:w-auto order-1' src='assets/profile.png' alt='profile-photo' />
    </section>
  )
}

export default Profile
