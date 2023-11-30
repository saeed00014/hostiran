import React, { useRef, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import { FcGallery } from 'react-icons/fc'
import { HiLocationMarker } from 'react-icons/hi'
import { AiFillTags } from 'react-icons/ai'
import { createPost, createPostMedia } from '../../services/post'
import { useDispatch, useSelector } from 'react-redux'
import { setOneTargetUserPost } from '../../store/UiSlice'

import defaultAvatar from '../../assets/images/testImg.png'
import Loadingb from '../loadingb'

const PostMaker = () => {
  const [media, setMedia] = useState('')
  const [loadingSend, setLoadingSend] = useState(false)
  const dispatch = useDispatch()
  const ref = useRef()
  const ui = useSelector((state) => state.ui)
  const loginUser = ui.loginUser

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoadingSend(true)
    const url2 = 'https://saeedwebdev.ir/i'
    const user_id = loginUser[0].id
    const text = ref.current.text.value
    const like = 0
    const fd = new FormData()
    fd.append('image', media)
    const id = uuidv4()
    dispatch(setOneTargetUserPost([{post: "empty", "text": text, "media": "", "loading": true, "id": id}]))
    const url = 'https://saeedwebdev.ir/api/posts'
    async function createGetPost() {
      if(media) {
        const result = await createPostMedia(url2, fd)
        if(result) {
          const post = result && await createPost(url, user_id, text, result, like)
          if(post) {
            dispatch(setOneTargetUserPost([{post: post, "loading": false, "id": id}]))
            // const newAllPost = await getAllPost(url)
            setLoadingSend(false)
          }
        }
      }
      if(!media) {
        const result = ''
        const post = await createPost(url, user_id, text, result, like)
        if(post) {
          dispatch(setOneTargetUserPost([{post: post, "loading": false, "id": id}]))
          // const newAllPost = await getAllPost(url)
          // dispatch(setAllPost(newAllPost))
          setLoadingSend(false)
        }
        
      }
    }
    createGetPost()
  }

  return (
    <form enctype="multipart/form-data" onSubmit={(e) => handleSubmit(e)} ref={ref} className='flex justify-center w-full'>
      <div className='flex flex-col items-center justify-center w-full shadow-3xl rounded-[.6rem] max-w-[800px] bg-white'>
        <div className='flex w-full md:p-4 px-[5%] py-2 md:gap-2 gap-1'>
          <label htmlFor='text' className='md:max-w-[50px] max-w-[40px] md:h-[50px] h-[40px] bg-white rounded-full'>
            <img  src={loginUser[0].avatar ? `https://saeedwebdev.ir/avatar/${loginUser[0].avatar}` : defaultAvatar} className='md:max-w-[50px] max-w-[40px] md:h-[50px] h-[40px] object-cover rounded-full'/>
          </label>
          <input type="text" name='text' id='text' placeholder='به چه چیری فکر میکنید ؟' className='w-full pr-2 md:text-[1rem] text-[.9rem]'/>
        </div>
        <div className='flex items-center justify-center w-full md:px-10 px-[5%]'>
          <div className='flex items-center justify-between w-full border-t-[2px] py-4 '>
            <div className='flex w-full md:gap-5 gap-2 [&>div>label]:flex [&>div>label]:gap-1 [&>div>input]:hidden [&>div>label>span]:flex [&>div>label>span]:items-center md:[&>div>label>span]:text-[1.1rem] [&>div>label>span]:text-clamp1 [&>div>label>span]:text-orange-600'>
              <div className='flex items-center gap-2 font-semibold cursor-pointer'>
                <label htmlFor='image'>
                  <span>
                    <FcGallery />
                  </span>  
                  <span>
                    فیلم و عکس
                  </span>
                </label>
                <input onChange={ (e) => setMedia(e.target.files[0]) } type='file' name='image' id='image' accept=".jpg, .jpeg, .png" />
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <label htmlFor='location'>
                  <span>
                    <HiLocationMarker />
                  </span>
                  <span>
                    مکان
                  </span>
                </label>
                <input type='location' name='location' id='location' />
              </div>
              <div className='flex items-center gap-2 font-semibold'>
                <label>
                  <span>
                    <AiFillTags />
                  </span> 
                  <span>
                    تگها
                  </span>
                </label>
                <input type='file' name='image' id='image' />
              </div>
            </div>
            <div className='flex justify-end w-[30%]'>
              <div className='flex items-center bg-green-500 hover:bg-green-600 rounded-[.4rem] text-white font-semibold'>
                {loadingSend && 
                  <span className='md:pr-4 pr-[.7rem]'>
                    <Loadingb />
                  </span>
                }
                <input type='submit' name='submit' value='اشتراک' className='cursor-pointer md:py-2 py-[.4rem] md:px-4 px-[.7rem] md:text-[1rem] text-[.9rem]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PostMaker