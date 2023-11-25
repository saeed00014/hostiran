import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { lazy, useEffect } from "react"

import { setAllLoginUser, setAllOnlineFriends, setAllPost, setAllSuggestedFriends, setToken } from "./store/UiSlice"
import { getAllPost } from "./services/post"
import { getAllUser, validateToken } from "./services/user"
import { getAllFriend } from "./services/friend"

import Header from './components/Header'
const LoginContainer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/login/LoginContainer")), 0);
  })
})
const HomePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/home/Home")), 0);
  })
})
const ProfilePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/profile/Profile")), 0);
  })
})
const ChatPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/chat/Chat")), 0);
  })
})
const Resume = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./resume")), 0);
  })
})
function AppSma() {
  const dispatch = useDispatch()
  const ui = useSelector((state) => state.ui)
  const accessToken = ui.token
  const loginUser = ui.loginUser
  
    useEffect(() => {
      const url = 'https://saeedwebdev.ir/api/auth/vt'
      async function validateTokenFunc() {
        const result = await validateToken(url, accessToken)
        if(result == 'wrong username or password') {
          dispatch(setToken(''))
        }
        if(result && result !== 'wrong username or password') {
          dispatch(setToken(result))
        }
      }
      validateTokenFunc()
    }, [accessToken])

  useEffect(() => {
    async function getAllUsersFunc() {
      const allLoginUser = await getAllUser('https://saeedwebdev.ir/api/users')
      if(allLoginUser) {
        dispatch(setAllLoginUser(allLoginUser))
        dispatch(setAllSuggestedFriends(allLoginUser))
      }
    }
    getAllUsersFunc()
  }, [])
  
  useEffect(() => {
    async function getAllOnlineFriendsFunc() {
      const url = `https://saeedwebdev.ir/api/friends/${loginUser[0] && loginUser[0].id}`
      const allOnlineFriends = loginUser[0] && await getAllFriend(url)
      if(allOnlineFriends) {
        dispatch(setAllOnlineFriends(allOnlineFriends))
      }
    }
    getAllOnlineFriendsFunc()
  }, [loginUser[0]])

  useEffect(() => {
    async function allPost() {
      const allPost = await getAllPost('https://saeedwebdev.ir/api/posts')
      dispatch(setAllPost(allPost))
    }
    allPost()
  }, [])

  return (
    <BrowserRouter>
    <div  style={{direction: 'rtl'}} className="">
      {accessToken !== '' && <Header />}
      <Routes>
        {accessToken == '' ? <>
          <Route path="sma/*" element={<LoginContainer />} />
          <Route path="sma/resume" element={<Resume />} />
        </>  :  <>
          <Route path="sma/" element={<HomePage />} />
          <Route path="sma/profile/*" element={<ProfilePage />} />
          <Route path="sma/chat/*" element={<ChatPage />} />
          <Route path="sma/login" element={<LoginContainer />} />
        </>  
        }
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default AppSma
