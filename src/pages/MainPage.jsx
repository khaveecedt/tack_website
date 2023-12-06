import React from 'react'
import ProfileCard from '../components/ProfileCard'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/ProjectDetail'

function MainPage() {
  return (
    <div className='py-5'>
      <ProfileCard />
      <div className='flex flex-col mx-auto mt-5 max-w-[85rem] px-[2rem]'>
        <div className='text-[2rem] font-bold mb-5'>Featured Projects 🗂️</div>
        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1rem]'>
          {
            projects.map((project)=><ProjectCard title={project.title} desc={project.desc} url={project.url} img={project.img} />)
          }
        </div>
      </div>
    </div>
  )
}

export default MainPage
