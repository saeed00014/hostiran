import React, { useEffect, useState } from 'react'
import HocWraper from '../../components/Hoc'
import Current from './current/Current'
import Suggested from './suggested/Suggested'
import { getOneMessage } from '../../services/message'
import { getTargetUser } from '../../services/user'
import { useDispatch, useSelector } from 'react-redux'
import { setAllMessage, setTargetUser } from '../../store/UiSlice'
import Loadingb from '../../components/loadingb'

const ChatPage = () => {  
  const dispatch = useDispatch()
  const [targetUserSt, setTargetUserst] = useState()
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser
  const url = window.location.href
  const split = url.split('/')
  const id = split[split.length - 1]

  useEffect(() => {
    async function targetUserfetch() {
      const url = `https://saeedwebdev.ir/api/users/${id}`
      const targetUser = await getTargetUser(url)
      if(targetUser) {
        setTargetUserst(targetUser)
        dispatch(setTargetUser(targetUser[0]))
      }
    }
    targetUserfetch()
  }, [id])
  
  useEffect(() => {
    async function getAllMessagesFunc() {
      const allMessages = (targetUserSt && loginUser[0]) && await getOneMessage(`https://saeedwebdev.ir/api/messages/${loginUser[0].id}=${targetUserSt[0].id}`)
      if(allMessages) {
          dispatch(setAllMessage(allMessages))
        }
      }
    getAllMessagesFunc()
  }, [targetUserSt])

  return (
    <section className='flex w-full max-h-screen min-h-screen overflow-hidden'>
      {(targetUserSt && loginUser) ? 
        <>
          <Suggested />
          <Current targetUser={targetUserSt} loginUser={loginUser}/>
        </> :
        <div className='flex items-center justify-center w-full h-full'>
          <Loadingb color='black' />
        </div>
      }
    </section>
  )
}

export default HocWraper(ChatPage, 'chat')