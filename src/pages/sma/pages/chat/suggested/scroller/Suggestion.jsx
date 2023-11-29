import React from 'react'

import defaultAvatar from '../../../../assets/images/testImg.png'

const Suggestion = ({user}) => {

  return (
    <a href={`/sma/chat/${user.id}`} className='flex items-center py-2 px-6 gap-4 hover:bg-bg-hover'>
      <div className='w-14 h-14'>
        <img src={targetUser[0].avatar ? `https://saeedwebdev.ir/avatar/${targetUser[0].avatar}` : defaultAvatar} alt="" className='w-full h-full rounded-full' />
      </div>
      <div className='flex flex-col'>
        <span className='-mt-1'>{user && (user.firstName + ' ' + user.lastName)}</span>
        <small>هیچ پیامی ارسال نشده است .</small>
      </div>
    </a>
  )
}

export default Suggestion