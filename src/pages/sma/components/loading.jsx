import React from 'react'

const loading = () => {
  return (
    <div className='fixed right-0 left-0 top-0 bottom-0 flex items-center justify-center z-50'>
      <span className='fixed right-0 left-0 top-0 bottom-0 flex items-center justify-center bg-white opacity-70 z-50'></span>
      <span className='flex flex-row-reverse items-center justify-center w-[20rem] h-[12rem] z-50 gap-1'>
        <span className='relative flex w-[.65rem] h-[2rem] border-[1px] border-blue-500 overflow-hidden'>
          <span className='flex w-[.65rem] h-[7rem] bg-blue-500'></span>
          <div className='absolute h-[6rem] overflow-x-hidden animate-smaLoad1'>
            <span className='flex w-[.65rem] h-[5rem] bg-green-500'></span>
            <span className='absolute bottom-2 hidden w-[.65rem] h-[1rem] bg-blue-500 rotate-[60deg]'></span>
          </div>
        </span>
        <span className='relative flex w-[.65rem] h-[2rem] border-[1px] border-blue-500 overflow-hidden'>
          <span className='flex w-[.65rem] h-[7rem] bg-blue-500'></span>
          <div className='absolute h-[6rem] overflow-x-hidden animate-smaLoad2'>
            <span className='flex w-[.65rem] h-[5rem] bg-green-500'></span>
            <span className='absolute bottom-2 hidden w-[.65rem] h-[1rem] bg-blue-500 rotate-[60deg]'></span>
          </div>
        </span>
        <span className='relative flex w-[.65rem] h-[2rem] border-[1px] border-blue-500 overflow-hidden'>
          <span className='flex w-[.65rem] h-[7rem] bg-blue-500'></span>
          <div className='absolute h-[6rem] overflow-x-hidden animate-smaLoad3'>
            <span className='flex w-[.65rem] h-[5rem] bg-green-500'></span>
            <span className='absolute bottom-2 hidden w-[.65rem] h-[1rem] bg-blue-500 rotate-[60deg]'></span>
          </div>
        </span>
        <span className='relative flex w-[.65rem] h-[2rem] border-[1px] border-blue-500 overflow-hidden'>
          <span className='flex w-[.65rem] h-[7rem] bg-blue-500'></span>
          <div className='absolute h-[6rem] overflow-x-hidden animate-smaLoad4'>
            <span className='flex w-[.65rem] h-[5rem] bg-green-500'></span>
            <span className='absolute bottom-2 hidden w-[.65rem] h-[1rem] bg-blue-500 rotate-[60deg]'></span>
          </div>
        </span>
        <span className='relative flex w-[.65rem] h-[2rem] border-[1px] border-blue-500 overflow-hidden'>
          <span className='flex w-[.65rem] h-[7rem] bg-blue-500'></span>
          <div className='absolute h-[6rem] overflow-x-hidden animate-smaLoad5'>
            <span className='flex w-[.65rem] h-[5rem] bg-green-500'></span>
            <span className='absolute bottom-2 hidden w-[.65rem] h-[1rem] bg-blue-500 rotate-[60deg]'></span>
          </div>
        </span>
      </span>
    </div>
  )
}

export default loading