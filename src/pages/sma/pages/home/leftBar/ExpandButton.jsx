import React from 'react'
import {FaUserFriends} from 'react-icons/fa'

const ExpandButton = ({setLeftBar, leftBar}) => {
  return (
    <button  onClick={() => setLeftBar(!leftBar)}className='flex items-center md:gap-3 gap-2 bg-green-500 hover:bg-green-600 rounded-full md:px-3 px-2 md:py-2 py-[.4rem]'>
      <span className='relative flex items-center justify-center font-normal w-3 h-full [&>i]:bg-white'>
        <i className={`absolute w-[.1rem] h-2 mb-[.37rem] ${leftBar ? 'rotate-45' : '-rotate-45'} bg-black`}></i>  
        <i className={`absolute w-2 h-[.1rem] mt-[.36rem] ${leftBar ? 'rotate-45' : '-rotate-45'} bg-black`}></i>  
      </span>
      <span className='md:text-2xl text-[1.4rem]'><FaUserFriends /></span>
    </button>
    )
}

export default ExpandButton