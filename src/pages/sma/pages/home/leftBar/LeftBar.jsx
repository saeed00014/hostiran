import React, { useState } from 'react'
import SearchBar from './SearchBar'
import SuggestedFriends from './SuggestedFriends'
import OnlineFriends from './FriendsList'


import ExpandButton from './ExpandButton'

const LeftBar = () => {
  const [leftBar, setLeftBar] = useState(false)

  return (
    <div className={`fixed ${leftBar ? 'md:left-0 -left-[40px]' : 'lg:left-0 lg:max-h-screen max-h-[63px] md:-left-[290px] -left-[300px]'} transition-all duration-200 top-0 flex items-start min-w-[290px] md:pb-0 pb-14 h-screen z-30`}>
      <div className='absolute md:-right-20 -right-[75px] lg:hidden flex items-center h-[63px] text-white md:ml-4 ml-2'>
        <ExpandButton setLeftBar={setLeftBar} leftBar={leftBar}/>
      </div>
      <div className='flex md:px-2 px-1 py-0 h-full bg-white border-r-[1px] md:max-w-[290px] max-w-[250px]'>
        <div className='flex flex-col w-full h-full pt-0 gap-2'>
          <div className='sticky top-0 left-0 py-[.7rem] px-2 -mb-2 z-50'>
            <SearchBar />
          </div>
          <div className='flex flex-col overflow-y-scroll px-2 md:py-[.8rem] py-[.4rem] md:gap-6 gap-4 h-full z-40 '>
            <SuggestedFriends />
            <OnlineFriends />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar