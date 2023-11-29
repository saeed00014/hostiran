import React, { useEffect, useState } from 'react'
import HocWraper from '../../components/Hoc'
import Header from './header/Header'
import Body from './body/Body'
import { useDispatch } from 'react-redux'
import { getTargetUser } from '../../services/user'
import { deleteTargetUserPost, setAllTargetUserPost, setTargetUser } from '../../store/UiSlice'
import { getAllTargetUserPost } from '../../services/post'
import Loadingb from '../../components/loadingb'

const ProfilePage = () => {
  const [targetUserST, setTargetUserST] = useState('')
  const [url, setUrl] = useState(window.location.href)
  const dispatch = useDispatch()
  const split = url.split('/')
  const id = split[split.length - 1]
  
  useEffect(() => {
    async function targetUserfetch() {
      const targetUserST = await getTargetUser(`https://saeedwebdev.ir/api/users/${id}`)
      if(targetUserST) {
        setTargetUserST(targetUserST)
        dispatch(setTargetUser(targetUserST))
      }
    }
    targetUserfetch()
  }, [url])
  
  useEffect(() => {
    dispatch(deleteTargetUserPost())
    async function getAllTargetUserPostFunc() {
      if(targetUserST[0]) {
        const allTargetUserPosts = await getAllTargetUserPost(`https://saeedwebdev.ir/api/posts/${targetUserST[0].id}`)
        if(allTargetUserPosts) {
          dispatch(setAllTargetUserPost(allTargetUserPosts))
        }
      }
    }
    getAllTargetUserPostFunc()
  }, [targetUserST, url])

  return (
    <section className='flex flex-col justify-start items-center w-full overflow-y-scroll md:pb-4 pb-16 max-h-screen h-full'>
      {targetUserST ?
      <>
        <Header targetUser={targetUserST} />
        <Body targetUser={targetUserST} />
      </> : 
      <div className='h-screen flex items-center'>
        <Loadingb color='black' />
      </div>
      }
    </section>
  )
}

export default HocWraper(ProfilePage, 'profile')