import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import Auth from '../components/Auth'
import { UserAuth } from '../context/authContext'
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
    </div>
  )
}

export default MainLayout
