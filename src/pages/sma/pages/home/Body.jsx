import React, { useEffect } from 'react'
import PostMaker from '../../components/post/PostMaker'
import PostCard from '../../components/post/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTargetUserPost } from '../../services/post'
import { setAllUserAddedPost } from '../../store/UiSlice'

const Body = () => {
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const allPosts = ui.allPosts
  useEffect(() => {
    allPosts && allPosts.map(async (post) => {
      const url = `https://saeedwebdev.ir/api/users/${post && post.user_id}`
      const targetUser = await getAllTargetUserPost(url)
      if(targetUser) {
        dispatch(setAllUserAddedPost(targetUser[0]))
      }
    })
  }, [allPosts])

  const allUserAddedPost = ui.allUserAddedPost
  
  return (
    <div className='flex flex-col h-screen w-full md:p-4 p-2 gap-6 overflow-y-scroll md:pb-20 pb-44'>
      <div className='h-[156px]'>
        <PostMaker /> 
      </div>
      <div className='flex flex-col-reverse gap-6 '>
        {allPosts[0] == '' ? '' :
          allPosts[0] !== 'no posts' ?
          allPosts.map((post) => {
            const targetUser = allUserAddedPost[0] && allUserAddedPost.find((user) => user && user.id == post.user_id)
            return (
              targetUser && <PostCard post={post} targetUser={targetUser} />
            )
          }) : <div className='flex justify-center w-full'>
            <div className='flex justify-center py-2 pb-4 px-3 w-full shadow-3xl rounded-[.6rem] max-w-[800px] bg-white'>هیچ پستی وجود ندارد</div>
          </div>
        }
      </div>     
    </div>
  )  
}

export default Body