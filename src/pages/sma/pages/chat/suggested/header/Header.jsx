import React from 'react'

import { FaRegEdit } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const ui = useSelector((state) => state.ui)
  const targetUser = ui.targetUser

  return (
    <div className='sticky top-0 flex flex-col items-center w-full bg-white'>
      <div className='flex justify-between w-full px-6 pt-6 pb-4'>
        <Link to={`/sma/chat/${targetUser[0] && targetUser[0].id}`}>{targetUser[0] && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}</Link>
        <i className='text-2xl'><FaRegEdit /></i>
      </div>
      <div className='flex justify-between w-full px-6 py-2'>
        <span>Messages</span>
        <a href="">Requests</a>
      </div>
    </div>
  )
}

export default Header