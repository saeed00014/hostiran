import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../../../../components/post/PostCard'
import NoPost from '../../../../components/NoPost'

const AllPosts = ({targetUser}) => {
  const ui = useSelector((state) => state.ui)
  const allTargetUserPosts = ui.alltargetUserPosts
  return (
    <div className='flex flex-col w-full md:gap-6 gap-4'>
      {allTargetUserPosts[0] == '' ? '' : 
      allTargetUserPosts[0] !== 'no post' ? allTargetUserPosts.map((post) => {
      return (
        <PostCard post={post} targetUser={targetUser[0]}/>
      )
      }) : 
      <div className='flex justify-center w-full'>
        <NoPost />
      </div>
      }
    </div>
  )
}

export default AllPosts