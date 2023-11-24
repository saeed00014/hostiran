import React from 'react'
import { Tilt } from 'react-tilt'

import HocWraper from '../components/hoc'

import { FaGithub } from "react-icons/fa";

import { MdOutlineArrowOutward } from "react-icons/md";

import { projects } from '../data/data'

const ProjectPage = () => {
  const options = {
    max: 10,
    scale: 1,
    speed: 350
  }


  return (
    <section className='flex items-start justify-center min-h-screen pt-[80px] pb-12 w-screen'>
      <div className='flex flex-col w-full max-w-[1400px] lg:gap-20 md:gap-16 gap-8 lg:pt-10 md:pt-8 pt-6'>
        <div className='flex flex-col md:gap-4 gap-3'>
          <span className='lg:text-5xl md:text-4xl text-3xl font-[600]'>
            projects .
          </span>
          <span className='lg:text-2xl md:text-[1.4rem] text-[1.3rem]'>
            Take a Look at my Best Work
          </span>
        </div>
        <div className='flex flex-wrap justify-evenly w-full md:gap-4 gap-3'>
          {projects.map((project) => {
            return (
              <Tilt options={options} key={project.id} className='flex max-w-[800px]'>
                <div className='relative flex flex-col justify-between md:p-4 p-2 bg-g_Background_Shaded rounded-[15px] gap-4'>
                  <img src={project.img} alt="project intro image" className='rounded-[10px]' />
                  <div className='flex flex-col gap-0'>
                    <div className='flex justify-end w-full md:text-[1.3rem] text-[1.1rem]'>
                      <span>{project.nameE}</span>
                      <span>{project.name}</span>
                    </div>
                    <span style={{direction: 'rtl'}} className='felx gap-1 [&>*]:w-full md:text-[1.1rem] text-[.9rem] mt-2'>{project.dis}</span>                    
                  </div>
                  <div className='flex absolute sm:top-6 top-4 md:right-6 right-4 gap-4'>
                    {project.Link.map((link) => {
                      return (
                        <a key={link.path} href={link.path} className='flex items-center justify-center w-8 h-8 bg-gray-900 rounded-full scale-125'>
                          {link.name == 'Github' ? <FaGithub /> : <MdOutlineArrowOutward /> }
                        </a>
                      )
                    })}
                  </div>
                </div>
              </Tilt>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HocWraper(ProjectPage, 'projects')