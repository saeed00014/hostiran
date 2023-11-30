import React from 'react'
import MassegeContainer from './MessageContainer'
import SendBar from './SendBar'

const Body = ({targetUser, loginUser}) => {
  return (
    <div className='flex flex-col justify-between h-full xl:px-8 md:px-4 px-2'>
      <div id='scroller' className='flex h-full overflow-y-scroll'>
        <MassegeContainer targetUser={targetUser} loginUser={loginUser}/>
      </div>
      <div className='sticky bottom-4 flex items-center justify-center h-fit'>
        <SendBar targetUser={targetUser} />
      </div>
    </div>
  )
}

export default Body