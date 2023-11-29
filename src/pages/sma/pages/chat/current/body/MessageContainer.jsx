import React, { useEffect, useState } from 'react'
import Massege from './Message'
import PreProfile from './PreProfile'
import { useSelector } from 'react-redux'
import Loadingb from '../../../../components/loadingb'

const MassegeContainer = ({targetUser, loginUser}) => {
  const ui = useSelector((state) => state.ui)
  const allMessages = ui.allMessages

  return (
    <div className='flex flex-col w-full gap-4 pt-4 pb-56'>
      {allMessages[0] == '' && 
        <div className='flex items-center justify-center w-full h-full'>
          <Loadingb color='black' />
        </div>
      }
      {allMessages[0] == '' ? ''
      : allMessages[0] == 'no message' ? 
        <PreProfile targetUser={targetUser} /> :
        allMessages.map((message) => {
          return ( 
            <span key={message.id}>
              <Massege message={message} loginUser={loginUser} targetUser={targetUser} />
            </span>
          )
        })
      }
    </div>
  )
}

export default MassegeContainer