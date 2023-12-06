import React from 'react'

function ExpPage() {
  return (
    <div className='py-5'>
      <div className='flex flex-col mx-auto mt-5 max-w-[85rem] px-[2rem]'>
        <div className='text-[2rem] font-bold mb-5'>Experiences 🚀</div>
        <div className='flex flex-col justify-between items-center gap-[2rem]'>
          <div className='flex flex-col md:flex-row gap-[1rem]'>
            <img src="/images/fest-teaching.jpg" alt="fest-teaching" className='w-[25rem] h-[15rem] object-cover p-2 rounded-2xl shadow-xl hover:shadow-2xl ease-in-out duration-100 select-none' />
            <img src="/images/fest-guiding.JPG" alt="fest-guiding" className='w-[25rem] h-[15rem] object-cover p-2 rounded-2xl shadow-xl hover:shadow-2xl ease-in-out duration-100 select-none' />
          </div>
          <div className='flex flex-col gap-[0.75rem]'>
            <div className='font-semibold text-[1.25rem]'>✍️ Teaching Basic Computer Programming using C, C++, and Python to college students</div>
            <div className='font-semibold text-[1.25rem]'>✍️ Teaching Data Structures and Algorithms to college students</div>
            <div className='font-semibold text-[1.25rem]'>✍️ Teaching A-Level Mathematics 1 in Fundamental Engineering Simulation Test 17th</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpPage
