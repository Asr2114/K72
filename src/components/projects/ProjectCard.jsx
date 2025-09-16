import React from 'react'

function ProjectCard(props) {
  return (
    <>
        
          <div className='group lg:w-1/2 w-full h-full relative transition-all hover:rounded-[70px] overflow-hidden'>
          <img className=' w-full h-full object-cover' src={props.image1}/>
          <div className='transition-shadow opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/40'>
            <h2 className='uppercase lg:text-5xl text-3xl font-[font1] border-3 pt-2 px-4 rounded-full'>View Project</h2>
          </div>
          </div>

           <div className='group lg:w-1/2 w-full h-full relative transition-all hover:rounded-[70px] overflow-hidden'>
          <img className='w-full h-full object-cover' src={props.image2}/>
          <div className='transition-shadow opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/40'>
            <h2 className='uppercase lg:text-5xl text-3xl font-[font1] border-3 pt-2 px-4 rounded-full'>View Project</h2>
          </div>
          </div>

        
          
        
    </>
  )
}

export default ProjectCard