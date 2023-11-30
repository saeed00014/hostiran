import React from 'react'
import PostCard from '../PostCard'
import CommentBottom from './Bottom'

const Comment = ({post, handleSetComment, targetUser}) => {
  
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-gray-400/25 md:py-4 pt-4 pb-16 lg:px-10 md:px-6 px-4 z-40 '>
      <div className='flex flex-col w-full h-full max-h-[800px] max-w-[700px] overflow-y-scroll rounded-[.6rem] bg-bg-theme-body'>
        <header className='sticky top-0 bg-white flex justify-center items-center w-full md:px-4 px-2 md:min-h-[70px] min-h-[50px] text-[1.3rem] gap-3 border-b-[1px] z-30'>
          <span className='md:text-[1.3rem] text-[1rem] '>{targetUser && (targetUser.firstName + ' ' + targetUser.lastName)}</span>
          <div className='absolute left-4'>
            <button onClick={handleSetComment} className='relative flex items-center justify-center font-normal w-10 h-10 md:scale-100 scale-75 bg-gray-300 rounded-full hover:bg-bg-hover'>
                <i className='absolute w-[.1rem] h-5 rotate-45 bg-black'></i>  
                <i className='absolute w-5 h-[.1rem] rotate-45 bg-black'></i>  
            </button>
          </div>
        </header>  
        <div>
          <PostCard post={post} edition='comment' handleSetCommentCall={handleSetComment}/>
        </div>
        <div className='h-full bg-bg-theme-body'>
          <CommentBottom post={post} targetUser={targetUser}/>
        </div>
      </div>
    </div>
  )
}

export default Comment