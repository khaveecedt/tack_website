import React from 'react'

function ProfileCard() {
  return (
    <div className='text-white flex flex-col md:flex-row justify-center items-center md:max-w-[60rem] max-w-[25rem] mx-auto gap-[2rem] bg-white p-3 md:p-2 rounded-profile-bg-large shadow-lg'>
      <img className='md:w-[20rem] w-[25rem] md:h-[20rem] h-[25rem] rounded-full object-cover select-none' src="/images/HoodieGuy.JPG" alt="HoodieGuy" />
      <div className='flex flex-col justify-center gap-[2rem]'>
        <div className='text-[2rem] font-bold bg-black text-center rounded-[5px]'>Welcome to my Web - Portfolio</div>
        <div className='text-[1.5rem] text-black'><span className='font-semibold'>Weerawat Wongmanit</span>, an Computer Engineering student who is passionated in Theoretical Computer Science ⚛, Robotics 🤖, and Data Engineering 📊</div>
        <a href='https://github.com/K1EW' target="_blank" rel="noopener noreferrer" className='group flex justify-center items-center gap-2 w-fit py-1 px-3 rounded-full bg-black hover:bg-white shadow-md ease-in-out duration-100'>
          <div className='text-white group-hover:text-black ease-in-out duration-100'>Github.</div>
          <img src="/github-mark-white.svg" alt="github" className='bg-black w-[2.25rem] h-[2.25rem] p-1 rounded-full' />
        </a>
      </div>
    </div>
  )
}

export default ProfileCard
