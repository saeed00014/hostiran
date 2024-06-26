import React from 'react'

import defaultAvatar from '../../../assets/images/testImg.png'
import { Link } from 'react-router-dom'

const OnlineFriend = ({friend}) => {

  return (
    <Link to={`/sma/profile/${friend && friend.id}`} className='flex items-center w-full gap-3 py-2 md:px-3 px-2 hover:bg-bg-hover overflow-x-hidden'>
      <div className='relative md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-white rounded-full'>
        <img src={friend.avatar ? `https://saeedwebdev.ir/avatar/${friend.avatar}` : defaultAvatar} alt="" className='object-cover md:min-w-[50px] md:min-h-[50px] min-w-[45px] min-h-[45px] rounded-full' />
        <span className='absolute flex items-center justify-center -right-1 -bottom-1 bg-white w-4 h-4 rounded-full'>
          <span className='bg-green-400 w-3 h-3 rounded-full'></span>
        </span>
      </div>
      <div className='flex flex-col w-full text-[.8rem]'>
            <span className='overflow-hidden min-w-max'>{friend && (friend.firstName + ' ' + friend.lastName)}</span>
            <span>@{friend && friend.username}</span>
          </div>
    </Link>
  )
}

export default OnlineFriend