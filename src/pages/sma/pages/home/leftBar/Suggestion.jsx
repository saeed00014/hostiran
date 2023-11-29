import React from 'react'

import defaultAvatar from '../../../assets/images/testImg.png'
import FollowBottun from '../../../components/FollowBottun'
import { Link } from 'react-router-dom'

const Suggestion = ({targetUser}) => {

  return (
    <div className='flex justify-between w-full'>
      <div className='flex items-center justify-between w-full py-2 md:px-3 px-2 gap-1 hover:bg-bg-hover'>
        <Link to={`/sma/profile/${targetUser.id}`} className='flex items-center justify-start gap-2 w-full overflow-hidden'>
          <div className='md:w-[50px] md:min-w-[50px] md:h-[50px] w-[45px] min-w-[45px] h-[45px] bg-white rounded-full'>
            <img src={targetUser.avatar ? `https://saeedwebdev.ir/avatar/${targetUser.avatar}` : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/>
          </div>
          <div className='flex flex-col w-full text-[.8rem]'>
            <span className='overflow-hidden min-w-max'>{targetUser && (targetUser.firstName + ' ' + targetUser.lastName)}</span>
            <span>@{targetUser.username}</span>
          </div>
        </Link>
        <FollowBottun targetUser={[targetUser]} />
      </div>
    </div>
  )
}

export default Suggestion