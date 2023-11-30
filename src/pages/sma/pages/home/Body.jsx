import React, { useEffect } from 'react'
import PostMaker from '../../components/post/PostMaker'
import PostCard from '../../components/post/PostCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTargetUserPost } from '../../services/post'
import { setAllUserAddedPost } from '../../store/UiSlice'
import NoPost from '../../components/NoPost'

const Body = () => {
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const allPosts = ui.allPosts
  const loginUser = ui.loginUser
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
    <div className='flex flex-col h-screen w-full md:p-4 p-2 md:gap-6 gap-4
     overflow-y-scroll md:pb-20 pb-44'>
      <div className='md:h-[156px] h-[124px]'>
        <PostMaker /> 
      </div>
      <div className='flex flex-col-reverse gap-6 '>
        {allPosts[0] == '' ? '' :
          allPosts[0] !== 'no posts' ?
          allPosts.map((post) => {
            const targetUser = allUserAddedPost[0] && allUserAddedPost.find((user) => user && user.id == post.user_id)
            const isLoadingConfigure = post.post
            let post2
            isLoadingConfigure ? post2 = {"id": post.id, "user_id": post.id, "text": post.text , "media": post.media, "likes": 0, "comments": 0} 
            : post2 = post
            return (
              <span>
                {targetUser && <span key={post.id}>
                  <PostCard post={post2} targetUser={targetUser} />
                </span>}
                {isLoadingConfigure == 'empty' && loginUser && <span key={post.id}>
                  <PostCard post={post2} isLoading={post.post} targetUser={loginUser[0]} />
                </span>
                }
                {isLoadingConfigure && isLoadingConfigure !== 'empty' && loginUser && <span key={post.id}>
                  <PostCard post={post.post[0]} isLoading={post.post} targetUser={loginUser[0]} />
                </span>
                }
              </span>
            )
          }) : <div className='flex justify-center w-full'>
            <NoPost />
          </div>
        }
      </div>     
    </div>
  )  
}

export default Body