import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
    return (
        <div className='h-screen w-full bg-black fixed '>
            <div className='h-auto w-full bg-black'>
            <div>

                <div className='absolute lg:px-30 px-27 lg:pt-105 pt-55 justify-center text-center'>
                    <div className=' lg:text-[1vw] text-[4vw] font-[font1] '>On screen or in an office.</div>
                    <div className=' lg:text-[1vw] text-[4vw] font-[font1] '>Here. There.</div>
                    <div className=' lg:text-[1vw] text-[4vw] font-[font1] '>Anywhere.</div>
                </div>



                <div className='text-center lg:leading-[130px] leading-[50px]'>
                    <div className='font-[font1] items-center justify-center uppercase hover:text-[#d3FD50] lg:text-[10vw] text-[15vw] lg:mt-3 mt-25'>To Talk</div>
                    <div className='font-[font1] items-center justify-center uppercase hover:text-[#d3FD50] lg:text-[10vw] text-[15vw] '>about</div>
                    <div className='font-[font1] items-center justify-center uppercase hover:text-[#d3FD50] lg:text-[10vw] text-[15vw] '>your</div>
                    <div className='font-[font1] items-center justify-center uppercase hover:text-[#d3FD50] lg:text-[10vw] text-[15vw] '>project</div>
                </div>

                
                    <div className='absolute lg:ml-[80%] ml-[27%] lg:-mt-20 mt-30 justify-center text-center'>
                        <Link to='https://www.linkedin.com/in/abhishek219/' className=' lg:text-[1.2vw] text-[4vw] font-[font1] hover:text-[#d3FD50] '>Connect with Abhishek ➡</Link>
                    

                </div>
            </div>
        </div>

        <div>
            <div className='lg:h-35 lg:mt-10 mt-50 bg-[#D3FD50] text-center justify-center items-center rotate-8 leading-[1.3] hover:bg-gray-400 transition-all'>
                <div className='moveX font-[font2] text-black text-[9vw]'>
                    HELLO@K72.CA&nbsp;HELLO@K72.CA&nbsp;HELLO@K72.CA&nbsp;HELLO@K72.CA&nbsp;HELLO@K72.CA&nbsp;HELLO@K72.CA 
                    
                    

                </div>

            </div>
        </div>
        <div>
            <div className='mt-10 h-auto bg-black'>
                    <div className='flex lg:flex-row flex-col  justify-between'>
                      <div className='flex lg:p-2 px-16'>
                        <Link className='font-[font1] lg:text-[5vw] text-[7vw] border-3 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] lg:px-6 px-4 lg:h-18 h-12 lg:pb-24'>FB</Link>
                        <Link className='font-[font1] lg:text-[5vw] text-[7vw] border-3 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] lg:px-6 px-4 lg:h-18 h-12 lg:pb-24'>IG</Link>
                        <Link className='font-[font1] lg:text-[5vw] text-[7vw] border-3 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] lg:px-6 px-4 lg:h-18 h-12 lg:pb-24'>IN</Link>
                        <Link className='font-[font1] lg:text-[5vw] text-[7vw] border-3 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] lg:px-6 px-4 lg:h-18 h-12 lg:pb-24'>BE</Link>
            
                      </div>
                      <div className='lg:p-2 px-19 lg:pt-0 pt-20'>
                        <Link to='https://www.linkedin.com/in/abhishek219/' className='font-[font1] lg:text-[5vw] text-[10vw] border-3 rounded-full hover:border-[#D3FD50] hover:text-[#D3FD50] px-6 h-15 pt-3'>CONTACT</Link>
                      </div>
                    </div>
            
                    <div className='lg:mt-80 mt-5  bg-black lg:p-4 px-24'>
                      <div>
                        <Link to='https://www.linkedin.com/in/abhishek219/' className='uppercase lg:text-2xl text-1xl text-shadow-amber-200 hover:text-[#D3FD50]'>Made by Abhishek Singh </Link>
                      </div>
            
                    </div>
                  </div>
        </div>
        </div>
    )
}

export default Blog