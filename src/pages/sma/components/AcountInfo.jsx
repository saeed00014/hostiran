import React from 'react'

import defaultAvatar from '../assets/images/testImg.png'

import { BsThreeDots } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AcountInfo = () => {
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser

  return (
    <div className='flex xl:justify-between justify-center xl:w-[259px] md:w-[88px] w-full md:p-2 '>
      <div className='flex items-center justify-center w-full p-2 rounded-full gap-3 xl:hover:bg-bg-hover'>
        <Link to={`/sma/profile/${loginUser[0] && loginUser[0].id}`} className='flex items-center xl:justify-start justify-center gap-3 w-full'>
          <div className='xl:w-[50px] xl:h-[50px] h-10 w-10 xl:mr-0 md:-mr-4 bg-white rounded-full'>
            <img src={loginUser[0].avatar ? `https://saeedwebdev.ir/avatar/${loginUser[0].avatar}` : defaultAvatar} alt="" className='object-cover md:min-w-[50px] md:min-h-[50px] min-w-[40px] min-h-[40px] rounded-full'/>
          </div>
          <div className='xl:flex hidden flex-col w-full min-w-max'>
            <span>{loginUser[0] && (loginUser[0].firstName + ' ' + loginUser[0].lastName)}</span>
            <span className=''>@{loginUser[0] && loginUser[0].username}</span>
          </div>
        </Link>
        <span className='xl:flex hidden items-center justify-center h-full text-[1.3rem] cursor-pointer w-[3rem]'>
          <BsThreeDots />
        </span>
      </div>
    </div>
  )
}

export default AcountInfo