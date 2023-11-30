import React from 'react'
import { Link } from 'react-router-dom'

import defaultAvatar from '../../../assets/images/testImg.png'

const SearchedUser = ({result}) => {

  return (
    <div className='flex justify-between w-full hover:bg-bg-hover'>
      <div className='flex items-center justify-start w-full gap-3 p-2'>
        <Link to={`/sma/profile/${result.id}`} className='flex items-center justify-start gap-2 w-[60%] '>
          <div className='md:w-[50px] md:min-w-[50px] md:h-[50px] w-[45px] min-w-[45px] h-[45px] bg-white rounded-full'>
            <img src={result.avatar ? `https://saeedwebdev.ir/avatar/${result.avatar}` : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/>
          </div>
          <div className='flex flex-col items-start w-full min-w-max md:text-[1rem] text-[.9rem] '>
            <span>{result.firstName + ' ' + result.lastName}</span>
            <span>@{result.username}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SearchedUser