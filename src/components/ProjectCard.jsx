import React from 'react'

function ProjectCard(props) {
  const {title, desc, url, img} = props;
  return (
    <div className='flex flex-col gap-2 max-w-[25rem] shadow-lg rounded-b-xl hover:scale-105 ease-in-out duration-100'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="github-banner" className='h-[15rem] object-cover rounded-t-xl select-none' />
        <div className='px-3 pb-3'>
          <div className='text-[1.5rem] font-semibold line-clamp-1'>{title}</div>
          <div className=' line-clamp-3'>{desc}</div>
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
