import React from 'react'

const loading = () => {
  return (
    <div className='fixed right-0 left-0 top-0 bottom-0 flex items-center justify-center z-50'>
      <span className='fixed right-0 left-0 top-0 bottom-0 flex items-center justify-center bg-white opacity-50'></span>
      <span className='flex rounded-full w-10 h-10 border-[.4rem] border-t-ransparent border-l-transparent border-black animate-spin'></span>
    </div>
  )
}

export default loading