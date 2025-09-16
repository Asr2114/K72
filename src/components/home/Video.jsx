import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src='/video.mp4'></video>
    </div>
  )
}

export default Video