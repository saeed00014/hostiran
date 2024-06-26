import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import defaultAvatar from '../../../assets/images/testImg.png'

import { BiSolidEdit } from 'react-icons/bi'
import FollowBottun from '../../../components/FollowBottun'
import { getAllUserFollow } from '../../../services/friend'
import { avatarUser, logout } from '../../../services/user'
import { createPostMedia } from '../../../services/post'
import { Link } from 'react-router-dom'

const Header = () => {
  const [followers, setFollowers] = useState('')
  const [followings, setFollowings] = useState('')
  const ui = useSelector((state) => state.ui)
  const isMyProfile = ui.isMyProfile
  const targetUser = ui.targetUser
  const loginUser = ui.loginUser

  useEffect(() => {
    const url = `https://saeedwebdev.ir/api/friends/q/${targetUser[0] && targetUser[0].id}`
    async function getAllUserFollowFunc() {
      const result = targetUser[0] && await getAllUserFollow(url)
      if(result) {
        setFollowers(result.followers)
        setFollowings(result.followings)
      }
    } 
    getAllUserFollowFunc()
  }, [targetUser[0]])

  const handleLogout = () => {
    const email = targetUser[0] && targetUser[0].email
    const url = `https://saeedwebdev.ir/api/auth/logout/${email}`
    async function handleLogoutFunc() {
      const result = email && await logout(url)
      if(result) {
        localStorage.setItem('token', '')
        localStorage.setItem('user', '')
        location.reload('/')
      }
    }
    handleLogoutFunc()
  }

  const handleSetAvatar = (e) => {
    const media = e.target.files[0]
    const url = 'https://saeedwebdev.ir/i'
    const url2 = `https://saeedwebdev.ir/api/users/${targetUser[0].id}`
    const fd = new FormData()
    fd.append('image', media)
    async function setAvatarFunc() {
      const result = await createPostMedia(url, fd)
      if(result) {
        const result2 = await avatarUser(url2, result)
        if(result2 == 'avatar added') {

        }
      }
    }
    setAvatarFunc()
  }

  return (
    <header className='relative flex flex-col w-full z-10'>
      <div className='flex w-full max-w-none h-72'>
        <img src={targetUser[0].avatar ? `https://saeedwebdev.ir/avatar/${targetUser[0].avatar}` : defaultAvatar} alt="" className='object-cover h-full w-full'/>
      </div>
      <div className='flex items-center justify-end w-full lg:gap-5 gap-2 py-5 lg:px-8 md:px-4 px-2'>
        {isMyProfile == '' ? '' 
        : isMyProfile !== loginUser[0].id ?  
        <>
          <button className='flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500 gap-2'>
            <i className='text-[1.2rem] pt-1'><BiSolidEdit /></i>
            <span className='md:flex hidden'>تغییر اطلاعات </span>
          </button>
          <button onClick={handleLogout} className='flex md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500'>
            <span>خروج از حساب </span>
          </button>
        </>
        : <>
          {targetUser && 
            <FollowBottun targetUser={targetUser}/>
          }
          <button className='md:flex hidden md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500'>شبکهای اجتماعی</button>
          <Link to={`/sma/chat/${targetUser[0] && targetUser[0].id}`} className='md:px-5 px-2 pt-1 pb-2 rounded-[.4rem] text-white bg-green-500'>ارسال پیام</Link>
        </>
        }
      </div>
      <div className='flex flex-col'>
      {isMyProfile == '' ? '' 
        : isMyProfile !== loginUser[0].id ? 
        <>
          <label htmlFor='image' className='absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-2 border-white rounded-full cursor-pointer z-30'>
            <img src={targetUser[0].avatar ? `https://saeedwebdev.ir/avatar/${targetUser[0].avatar}` : defaultAvatar} alt="" className='object-cover bg-white  h-full w-full rounded-full'/>
            <span className='absolute right-0 bottom-0 text-2xl'><BiSolidEdit /></span>
          </label>
          <input onChange={(e) => handleSetAvatar(e)} className='hidden' type="file" name='image' id='image' accept=".jpg, .jpeg, .png"  />
        </> :
        <div className='absolute xl:right-20 lg:right-8 md:right-4 right-2 md:bottom-10 bottom-14 w-32 h-32 border-2 border-white bg-white rounded-full z-50'>
          <img src={targetUser[0].avatar ? `https://saeedwebdev.ir/avatar/${targetUser[0].avatar}` : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/>
        </div>
        }
        <div className='relative flex flex-col w-full min-w-max px-3'>
          <div className='flex items-center md:justify-center justify-between h-full md:gap-8 gap-6 lg:px-6'>
            <div className='flex justify-center  min-w-max '>
              <span className='flex items-center'>{targetUser[0] && (targetUser[0].firstName + ' ' + targetUser[0].lastName)}</span>
              <span>{targetUser[0] && targetUser[0].dis}</span>
            </div>
            <div className='flex md:gap-4 gap-2 w-full'>
              <a href="" className='flex md:flex-row flex-col items-center min-w-max md:gap-1'>
                <span>{followings && followings}</span>
                <span>دنبال کننده</span>
              </a>
              <a href="" className='flex md:flex-row flex-col items-center min-w-max md:gap-1'>
                <span>{followers && followers}</span>
                <span>دنبال شده</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header