import React, { useEffect, useState } from 'react'
import HocWraper from '../../components/Hoc'
import Header from './header/Header'
import Body from './body/Body'
import { useDispatch } from 'react-redux'
import { getTargetUser } from '../../services/user'
import { deleteTargetUserPost, setAllTargetUserPost, setTargetUser } from '../../store/UiSlice'
import { getAllTargetUserPost } from '../../services/post'
import Loadingb from '../../components/loadingb'
import Loading from '../../components/loading'

const ProfilePage = () => {
  const [targetUser, setTargetUserST] = useState('')
  const dispatch = useDispatch()
  const url = window.location.href
  const split = url.split('/')
  const id = split[split.length - 1]
  
  useEffect(() => {
    async function targetUserfetch() {
      const targetUser = await getTargetUser(`https://saeedwebdev.ir/api/users/${id}`)
      if(targetUser) {
        setTargetUserST(targetUser)
        dispatch(setTargetUser(targetUser))
      }
    }
    targetUserfetch()
  }, [id])
  
  useEffect(() => {
    dispatch(deleteTargetUserPost())
    async function getAllTargetUserPostFunc() {
      if(targetUser[0]) {
        const allTargetUserPosts = await getAllTargetUserPost(`https://saeedwebdev.ir/api/posts/${targetUser[0].id}`)
        if(allTargetUserPosts) {
          dispatch(setAllTargetUserPost(allTargetUserPosts))
        }
      }
    }
    getAllTargetUserPostFunc()
  }, [targetUser])

  return (
    <section className='flex flex-col justify-start items-center w-full overflow-y-scroll md:pb-4 pb-16 max-h-screen h-full'>
      {targetUser ?
      <>
        <Header targetUser={targetUser} />
        <Body targetUser={targetUser} />
      </> : 
      <div className='h-screen flex items-center'>
        <Loadingb color='black' />
      </div>
      }
    </section>
  )
}

export default HocWraper(ProfilePage, 'profile')