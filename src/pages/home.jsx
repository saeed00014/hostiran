import React from 'react'
import { Link } from 'react-router-dom'

import TagMaker from '../components/tagMaker'
import HocWraper from '../components/hoc'

import { h1 } from '../data/data'

const HomePage = () => {
  const H1Maker = ({letter}) => {
    return (
      <>
        {letter.name == 'I' || letter.name == 'S' || letter.name == 'W' || letter.name == 'D' ? <>&nbsp;</> : ''}
        <span key={letter.id} className='flex xl:text-7xl lg:text-6xl md:text-6xl text-clamp md:h-[initial] h-[14.5vw] font-medium hover:scale-125 transition-all duration-160 hover:text-g_Background_Shaded'>
          {letter.name}
        </span>
      </>
    )
  }

  return (
    <section className='flex items-center justify-center w-screen min-h-screen pt-[80px]'>
      <div className='relative flex flex-col items-start justify-center w-full lg:px-16 md:px-10 px-2 max-w-[1400px] gap-12'>
        <div className='relative flex flex-col gap-10'>
        <TagMaker tag='div' index='1'/>
          <div className='relative flex flex-wrap'>
            <TagMaker tag='h1' index='1'/>
            <div className='flex'>
              {h1.nameTop.map((letter) => {
                return (
                  <H1Maker letter={letter} />
                  )
                })}
            </div>
            <div className='flex'>
              {h1.nameLeft.map((letter) => {
                return (
                  <H1Maker letter={letter} />
                  )
                })}
            </div>
            <div className='flex'>
              {h1.nameRight.map((letter) => {
                return (
                  <H1Maker letter={letter} />
                )
              })}
            </div>
          </div>
          <div className='relative flex flex-col gap-2'>
            <TagMaker tag='p' index='1'/>
            <p className='lg:text-2xl md:text-[1.2rem] text-clamp2'>
              Im a Web Developer mainly Focused on Frontend (JavaScript).
            </p>
            <p className='lg:text-2xl md:text-[1.2rem] text-clamp2'>
            You Can Browse my Portfolio to know Me Better.
            </p>
          </div>
        </div>
        <Link to='/projects' className={`relative flex items-center justify-center md:w-56 md:h-14 w-[40vw] h-[10vw] min-w-[10rem] max-w-[14rem] min-h-[2.8rem] max-h-[3.5rem] md:text-2xl text-clamp3 border-[1px] before:content-['_'] before:absolute before:w-full before:h-full before:bg-g_Background_Shaded before:-left-[108%] hover:before:left-0 before:transition-all before:duration-700 before:z-0 after:content-['_'] after:absolute after:w-20 after:h-full after:bg-g_Background_Shaded after:right-[87%] after:top-5 after:rotate-[50deg] hover:after:-right-12 after:transition-all after:duration-700 after:z-0 overflow-hidden`} >
          <span className='absolute z-10'>
            Projects
          </span>
        </Link>
      </div>
    </section>
  )
}

export default HocWraper(HomePage, 'home')