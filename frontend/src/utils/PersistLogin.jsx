import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useCookie from '../hooks/useCookie'
import { UserAuth } from '../context/authContext'
const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useCookie()
  const { user } = UserAuth()

  useEffect(() => {
    let isMounted = true

    const verifyRefreshToken = async () => {
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !user?.user ? verifyRefreshToken() : setIsLoading(false)

    return () => (isMounted = false)
  }, [])

  return <>{isLoading ? <></> : <Outlet />}</>
}

export default PersistLogin
