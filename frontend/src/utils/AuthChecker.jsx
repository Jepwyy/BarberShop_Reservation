import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'
const AuthChecker = () => {
  const { token, user } = UserAuth()

  return token == true && user?.role == 'admin' ? (
    <Navigate to={'/dashboard'} />
  ) : (
    <Outlet />
  )
}

export default AuthChecker
