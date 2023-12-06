import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-black py-2 shadow shadow-gray-900 sticky top-0 z-50">
      <div className="flex justify-center items-center max-w-[80rem] mx-auto px-[1rem]">
        <Link to={"/"} className='group mr-[2rem] p-[0.5rem] rounded-full hover:bg-white ease-in-out duration-100'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white group-hover:text-black ease-in-out duration-100">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </Link>
        <Link to={"/projects"} className="grow text-center py-[1rem] border rounded-l-md border-y-white border-l-white text-lg font-semibold ease-in-out duration-100 text-white hover:bg-white hover:text-black ">Project 🗂️</Link>
        <Link to={"/experiences"} className="grow text-center py-[1rem] border border-y-white text-lg font-semibold ease-in-out duration-100 text-white hover:bg-white hover:text-black">Experience 🚀</Link>
        <Link to={"/contact"} className="grow text-center py-[1rem] border rounded-r-md border-y-white border-r-white text-lg font-semibold ease-in-out duration-100 text-white hover:bg-white hover:text-black ">Contact ✉️</Link>
      </div>
    </div>
  )
}

export default Navbar
