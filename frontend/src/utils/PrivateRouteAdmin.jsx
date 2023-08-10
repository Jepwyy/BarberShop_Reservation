import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'
import { toast } from 'react-toastify'
const PrivateRouteAdmin = () => {
  const navigate = useNavigate()
  const { token, user, setModal } = UserAuth()
  const redirect = () => {
    navigate('/')
    setModal(true)
    toast.error(`Unautorized! Login First...`, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      toastId: 'test',
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    })
  }

  return token == true && user?.role == 'admin' ? <Outlet /> : redirect()
}

export default PrivateRouteAdmin
