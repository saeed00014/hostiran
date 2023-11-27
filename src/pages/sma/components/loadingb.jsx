import React from 'react'

const loadingb = ({color}) => {
  return (
    <span className={`flex rounded-full h-5 w-5 border-[.2rem] border-t-ransparent border-l-transparent ${color == 'black' ? 'border-black' : 'border-white'} animate-spin`}></span>
  )
}

export default loadingb