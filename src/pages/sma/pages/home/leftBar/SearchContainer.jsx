import React, { useEffect, useState } from 'react'
import { getFillterUser } from '../../../services/user'

import SearchedUser from './SearchedUser'
import Loadingb from '../../../components/loadingb'

const SearchContainer = ({sValue}) => {
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isThereUser, setIsThereUser] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const url =  `https://saeedwebdev.ir/api/users/s/${sValue}`
    async function getFillterUserFunc() {
      const fillterUsers = sValue && await getFillterUser(url)
      if(fillterUsers[0]) {
        setIsLoading(false)
        setIsThereUser(true)
        setResult(fillterUsers)
      }
      if(!fillterUsers[0]) {
        setIsLoading(false)
        setIsThereUser(false)
      }
    }
    getFillterUserFunc()
  }, [sValue])

  return (
    <div className='md:w-[289px] w-[240px] h-screen bg-white md:px-4 px-2 gap-2'>
      {isLoading && <Loadingb color='black' />}
      {!isThereUser && 
        <span>
          کاربری وجود ندارد
        </span>
      }
      {result && <div className='flex flex-col bg-bg-theme-darker rounded-[1rem] overflow-hidden'>
        {result && result.map((result) => {
          return (
            <SearchedUser result={result}/>
          )
        })}
      </div>}
    </div>
  )
}

export default SearchContainer