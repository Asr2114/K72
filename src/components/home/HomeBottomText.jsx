import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='sm: px-10 font-[font2] flex items-center justify-center gap-2'>
        <div className='border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] lg:h-20 flex items-center lg:px-14 px-5 border-white rounded-full  uppercase'>
        <Link className='text-[6vw] lg:mt-5 mt-2' to='/projects'>Projects</Link>
        </div>
        <div className='border-3 hover:border-[#d3fd50] hover:text-[#d3fd50] lg:h-20 flex items-center lg:px-14 px-5 border-white rounded-full  uppercase'>
        
        <Link className='text-[6vw] lg:mt-5 mt-2' to='/agence'>Agency</Link>
        </div>
    </div>
  )
}

export default HomeBottomText