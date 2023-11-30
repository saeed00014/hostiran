import React, { useEffect, useState } from 'react'

import { getAllComment } from '../../../services/comment'
import { useDispatch, useSelector } from 'react-redux'
import { setAllComment } from '../../../store/UiSlice'
import Content from './content'
import SendBar from './SendBar'
import Loading from '../../loading'

const CommentBottom = ({post, targetUser}) => {
  const [allCommentsState, setAllCommentsState] = useState([])
  const [loadingComment, setLoadingComment] = useState(false)
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  const allPostComments = ui.allPostComments
  const dispatch = useDispatch()
  useEffect(() => {
    setLoadingComment(true)
    const url = `https://saeedwebdev.ir/api/comments/${post.id}`
    async function getAllCommnets() {
      const data = await getAllComment(url)
      if(data) {
        setAllCommentsState(data)
        setLoadingComment(false)
        dispatch(setAllComment(data))
      }
      if(!data) {
        setLoadingComment(false)
      }
    }
    getAllCommnets()
  }, [])

  return (
    <div className='relative flex items-start w-full h-full px-4 '>
      <div className='sticky top-0 flex flex-col items-start justify-between w-full h-full border-t-2'>
        <div className='flex flex-col w-full gap-3 pt-4'>
          {loadingComment ? 
            <Loading /> :
            allPostComments[0] ? allPostComments.map((comment) => {
              return (
                <Content comment={comment} loginUser={loginUser} targetUser={targetUser}/>
              )
            })
            : <div className='flex items-center justify-center font-medium'>هیچ نظری وجود ندارد</div>   
          }
        </div>
        <div className='sticky bottom-0 flex items-center justify-center w-full bg-bg-theme-body py-3'>
          <SendBar post={post} />
        </div>
      </div>
    </div>
  )
}

export default CommentBottom