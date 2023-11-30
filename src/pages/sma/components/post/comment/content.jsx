import React from 'react'
import { useSelector } from 'react-redux'

import defaultAvatar from '../../../assets/images/testImg.png'
import Loadingb from '../../loadingb'

const Content = ({comment, loginUser}) => {
  const ui = useSelector((state) => state.ui)
  const allLoginUsers = ui.allLoginUsers
  const commentUser = allLoginUsers.find((user) => user.id == comment.user_id)
  return (
    <>
      {commentUser ? 
        <div className={`flex ${comment.user_id == loginUser[0].id ? 'justify-end': 'justify-start gap-2'} min-w-max `}>
          {comment.user_id !== loginUser[0].id ?
            <div className='w-[40px] h-[40px] '>
              <img src={commentUser.avatar ? `https://saeedwebdev.ir/avatar/${commentUser.avatar}` : defaultAvatar} alt="" className='object-cover h-full w-full rounded-full'/> 
            </div>
            : <></>
          }
          <span className={`relative max-w-[22rem] px-3 py-2 rounded-[1.5rem] break-words ${comment.user_id == loginUser[0].id ? 'bg-blue-700 text-left text-white': 'bg-gray-300'} overflow-visible`}>
            {comment.user_id == loginUser[0].id && 
              <span className='absolute left-0 -top-4 text-black text-[.7rem] min-w-max'>{loginUser[0] && (loginUser[0].firstName + ' ' + loginUser[0].lastName)}</span>
            }
            {comment.user_id !== loginUser[0].id && 
              <span className='absolute right-3 -top-4 text-black text-[.7rem] min-w-max'>{commentUser && (commentUser.firstName + ' ' + commentUser.lastName)}</span>
            }
            {comment.text}
          </span>
        </div>
      :  
      <div className={`flex justify-end items-center ${comment.loading ? 'opacity-60' : ''}`}>
          {comment.loading && <Loadingb color='black' />}
          <span className={`relative max-w-[22rem] px-3 py-2 rounded-[1.5rem] break-words bg-blue-700 text-left text-white`}>
            <span className='absolute left-0 -top-4 text-black text-[.7rem] min-w-max'>{loginUser[0] && (loginUser[0].firstName + ' ' + loginUser[0].lastName)}</span>
            {comment.text}
          </span>
        </div>
      } 
    </>
  )
}

export default Content