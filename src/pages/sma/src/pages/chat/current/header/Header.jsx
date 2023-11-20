import React, { useEffect, useState } from 'react'

import defaultAvatar from '../../../../assets/images/testImg.png'

import {BiVideo} from 'react-icons/bi'
import {BiPhone} from 'react-icons/bi'
import {BiInfoCircle} from 'react-icons/bi'

const Header = ({targetUser}) => {
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
          const response = targetUser[0] && await import(/* @vite-ignore */`../../../../assets/avatar/${targetUser[0].avatar}`)
          setAvatar(response.default)
      } catch (err) {
          //setError(err)
      } finally {
          //setLoading(false)
      } 
    }
    fetchImage()
  }, [targetUser])

  return (
    <div className='sticky top-0 flex items-center justify-between w-full min-h-[75px] xl:px-8 md:px-4 px-2 bg-white'>
      <div className='flex items-center w-full gap-3'>
        <div className='w-[50px] h-[50px]'>
          <img src={avatar ? avatar : defaultAvatar} alt="" className='w-full h-full rounded-full'/>
        </div>
        <span className='-mt-1'>
        {targetUser && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}
        </span>
      </div>
      <div className='flex gap-4 text-3xl'>
        <i><BiPhone /></i>
        <i><BiVideo /></i>
        <i><BiInfoCircle /></i> 
      </div>
    </div>
  )
}

export default Header