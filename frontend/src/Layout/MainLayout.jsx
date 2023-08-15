import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import Auth from '../components/Auth'
import { UserAuth } from '../context/authContext'
import { ToastContainer } from 'react-toastify'
const MainLayout = () => {
  const { modal } = UserAuth()
  return (
    <div className='layoutContainer'>
      <MainNavbar />
      <div className='outlet'>
        <Outlet />
      </div>
      <MainFooter />
      {modal && <Auth />}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  )
}

export default MainLayout
