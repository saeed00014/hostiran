import React from 'react'
import OnlineFriend from './FriendAcount'
import { useSelector } from 'react-redux'

const OnlineFriends = () => {
  const ui = useSelector((state) => state.ui)
  const myOnlineFriends = ui.myOnlineFriends

  return (
    <div className='flex flex-col bg-bg-theme-darker rounded-[1rem]'>
      <h2 className='font-bold md:text-[1.2rem] text-[1rem] p-2'>
       لیست دوستان  
      </h2>
      <div className='flex flex-col w-full'>
        {myOnlineFriends && myOnlineFriends.map((friend) => {
          return (
            friend && <span key={friend.id}>
              <OnlineFriend friend={friend} />
            </span>
          )
        })}
      </div>
      <button className='flex p-2 pb-3 hover:bg-bg-hover rounded-b-[1rem] text-[.8rem] font-bold cursor-pointer'>
        نشان دادن همه
      </button>
    </div>
  )
}

export default OnlineFriends