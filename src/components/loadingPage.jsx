import React, { useState } from 'react'

const LoadingPage = () => {
  const [load, setLoad] = useState("200%")

  const styels = {
    marginRight: load  
  }

  setTimeout(() => {
    setLoad('0')
  }, 10)

  return (
    <section className='flex items-center justify-center w-screen h-screen z-50'>
      <div className='flex flex-col items-center justify-center w-[50%] lg:gap-8 md:gap-6 gap-4 overflow-x-hidden max-w-[500px]'>
        <h1 className='font-primary lg:text-5xl md:text-4xl text-3xl'>
          Saeed
        </h1>
        <span style={styels} className='flex w-full lg:h-[.4rem] md:h-[.3rem] h-[.2rem] rounded-[1rem] bg-g_Text_White transition-all duration-[700ms]'></span>
      </div>
    </section>
  )
}

export default LoadingPage