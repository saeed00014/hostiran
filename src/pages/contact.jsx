import React, { useEffect, useRef, useState } from 'react'

import SideLoadingCommponent from '../components/loading'
import AlertComponent from '../components/alert'
import HocWraper from '../components/hoc'



const ContactPage = ({homeedition}) => {
  const [alert, setAlert] = useState('')
  const [loading, setLoading] = useState('')

  const form = useRef();

  const [error, setError] = useState(false)
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAlert('')
    }, 2500)
  }, [alert])

  const onChange = (e) => {
    if(e.target.name == 'message' && e.target.value.length < 9) {
      setError2(true)
    }else if (e.target.name == 'user_email' && !e.target.value.includes('@') && e.target.value.length < 3) {
      setError1(true)
    }else if (e.target.name == 'user_name' && e.target.value.length < 3 ) {
      setError(true)
    }if(e.target.name == 'message' && e.target.value.length >= 9) {
      setError2(false)
    }else if (e.target.name == 'user_email' && e.target.value.includes('@') && e.target.value.length >= 3) {
      setError1(false)
    }else if (e.target.name == 'user_name' && e.target.value.length >= 3) {
      setError(false)
    }
  }

  return (
    <section className='flex md:items-center justify-center w-screen min-h-screen h-full lg:pt-44 md:pt-40 pt-36'>
      <div className={`flex flex-col items-center justify-center w-full lg:gap-10 md:gap-8 gap-6`}>
        <div className='flex flex-col items-start justify-center w-full max-w-[750px] -mt-20 gap-2'>
          <h1 className='lg:text-5xl md:text-4xl text-3xl font-[600]'>
            contact me .
          </h1>
          <p className='lg:text-2xl md:text-[1.4rem] text-[1.3rem]'>
            send me a massage
          </p>
        </div>
        <form homeedition={homeedition} ref={form} className={`flex flex-col w-full max-w-[750px] gap-10 [&_textarea]:bg-g_Background_Shaded [&_input]:bg-g_Background_Shaded `}>
          <div className='flex md:flex-row flex-col gap-6'>
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor='name' className='lg:text-2xl md:text-[1.4rem] text-[1.3rem]'>Name</label>
              <input 
                onChange={(e) => onChange(e)}
                className='h-12 w-full pl-4'
                id='name'
                type="text" 
                name="user_name" 
                pattern="^[A-Za-z0-9]{3,12}$"
                required= {true}/>
                {error && <p>must contain 3-12 characters</p>}
            </div>
            <div className='flex flex-col w-full gap-2'>
              <label htmlFor='email' className='lg:text-2xl md:text-[1.4rem] text-[1.3rem]'>Email</label>
              <input 
                onChange={(e) => onChange(e)}
                className='h-12 w-full pl-4'
                id='email'
                type="email" 
                name="user_email"
                required= {true}/>
                {error1 && <p>not valid email</p>}
            </div>
          </div>
          <div className='flex flex-col gap-2'>
          <label htmlFor='text' className='lg:text-2xl md:text-[1.4rem] text-[1.3rem]'>Message</label>
          <textarea 
            onChange={(e) => onChange(e)}
            className='h-32 w-full pl-4 md:pt-2'
            id='text'
            type='text' 
            name="message" 
            pattern="^[A-Za-z0-9]{9,212}$"
            required= {true}/>
            {error2 && <p>must contain 9-212 characters</p>}
          </div>
            <div className='relative w-full h-14'>
              {loading && 
                <span>
                  <SideLoadingCommponent  />
                </span>
              }
              <input type="submit" value='Send' className={`gruop absolute flex items-center justify-center lg:w-56 md:w-52 w-44 lg:h-14 h-12 lg:text-2xl md:text-[1.4rem] text-[1.3rem] z-20 cursor-pointer bg-g_Background_Shaded`}/>
            </div>
        </form>
        {alert && <AlertComponent result={alert.text} content='contact' />}
      </div>
    </section>
  )
}

export default HocWraper(ContactPage, 'contact')