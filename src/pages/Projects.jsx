import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

function Projects(idx) {

  const projects = [
    {
      image1: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
    },
    {
      image1: 'https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg'
    },

    {
      image1: 'https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
    },

    {
      image1: 'https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg',
      image2: 'https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg'
    }


  ]

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',

      stagger: {
        amount: 0.1

      },
      scrollTrigger: {
        trigger: '.lol',
        markers: false,
        start: 'top 100%',
        end: 'top -150%',
        scrub: true




      }
    })

  })

  return (
    <div>
      <div className='bg-white lg:p-4'>
        <div className=' text-black pt-[45vh]'>
          <h2 className='font-[font2] uppercase lg:text-[9.5vw] text-[13vw]'> Projects</h2>
        </div>

        <div className='lol lg:-mt-10 -mt-5'>
          {projects.map(function (elem) {

            return <div key={idx} className='hero flex lg:flex-row flex-col w-full lg:h-[600px] h-[300px] lg:gap-3 gap-2 mb-3'>

              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })}


        </div>


      </div>

      <div className='h-auto bg-black'>
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
  )
}

export default Projects