import React, { useEffect, useState } from 'react'

import HocWraper from '../components/hoc'
import ResumeComponent from '../components/resume'

import { skill } from '../data/data'

import resume from '../assets/images/resume.pdf'

const AboutPage = () => {
  const [screen, setScreen] = useState(false)

  useEffect (() => {
    const mediaquery = window.matchMedia("(max-width: 540px)");

    setScreen(mediaquery.matches)
    
    const handleMediaquery = (event) => {
      setScreen(event.matches)
    }

    mediaquery.addEventListener("change", handleMediaquery)

    return () => {
      mediaquery.removeEventListener("change", handleMediaquery)
    }
  }, [])

  return (
    <section className='flex flex-col items-center justify-center w-screen h-full min-h-screen pt-[80px] '>
      <div className='flex lg:flex-row flex-col items-center lg:justify-between w-full max-w-[1400px] h-full xl:gap-16 gap-8'>
        <div className='flex flex-col w-full sm:gap-6 gap-[2vw]'>
          <span className='lg:text-5xl md:text-4xl text-3xl font-[600]'>  
            Get to know me
          </span>
          <span className='lg:text-2xl md:text-[1.4rem] text-[1.2rem]'>
            Im 21 Years old and started web porogramming 1year ago and im learning more about it everyday.Im looking for job opportunitys that i can grow more. i have some projects to show you more my skills and expriences.
          </span>
          <a href={resume} download className={`relative lg:flex hidden items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`}>
            <p className='sm:text-2xl text-clamp3 z-20'>
              Resume
            </p>
          </a>
        </div>
        <ul className='flex flex-wrap justify-center md:w-[40rem] w-full md:gap-4 gap-2'>
          {skill.map((skill) => {
            return (
              <li key={skill.name} className={`group relative flex items-center justify-center md:p-4 p-3 bg-g_Background_Shaded rounded-2xl`}>
                <img src={skill.img} alt={skill.name} className={`object-contain md:w-[48px] md:h-[48px] w-[40px] h-[40px]`}/>
                <span className='group absolute -top-7 bg-g_Border_Shaded px-2 hidden group-hover:flex transition-all duration-300 min-w-max'>
                  {skill.name}
                </span>
              </li>
            )
          })}
        </ul>
        <a href={resume} download className={`relative lg:hidden flex items-center justify-center md:w-56 md:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`}>
            <span className=' md:text-2xl text-clamp3 z-20'>
              Resume
            </span>
          </a>
      </div>
      <div className='hidden lg:flex-row flex-col w-full max-w-[1400px] gap-8'>
        <div className='flex flex-col w-full gap-8'>
          <h1 className='sm:text-4xl text-3xl font-[600] '>
            Download my Resume
          </h1>
          <a href={resume} download className={`relative flex items-center justify-center sm:w-56 sm:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`}>
            <span className='sm:text-2xl text-clamp3 z-20'>
              Download
            </span>
          </a>
        </div>
        <div className='w-full '>
          <ResumeComponent />
        </div>
      </div>
    </section>
  )
}

export default HocWraper(AboutPage, 'about')