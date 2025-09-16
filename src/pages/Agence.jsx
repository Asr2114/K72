import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

function Agence() {

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',

    

  ]


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 27.5%',
        end:'top -100%',
        pin:true,
        scrub:1,
        onUpdate:function(elem){
          let imageIndex;

          if(elem.progress < 1){
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else{
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
  

    })
  })


  return (
    <div className='bg-black'>
      <div className='section1'>

      <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[25vw] lg:rounded-3xl rounded-2xl lg:w-[15vw] w-[20vw] top-60 left-[30vw]'>
        <img ref={imageRef} className='h-full w-full object-cover ' src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'/>
      </div>



      <div className='relative font-[font1]'>
      <div className='lg:mt-[55vh] mt-[80vw]'>
        <h1 className='text-[19vw] uppercase leading-[17vw] text-center'>Seven7y <br/>
        Two</h1>
      </div>
      <div className='lg:pl-[40%] mt-20 lg:px-0 px-2'>
        <p className='lg:text-6xl'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.
        </p>
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
          <div className='lg:p-2 px-19 lg:pt-0 pt-40'>
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

export default Agence