import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'
import Auth from '../components/Auth'
const MainLayout = () => {
  const [modal, setModal] = useState(false)
  return (
    <div className='layoutContainer'>
      <MainNavbar setModal={setModal} />
      <div className='outlet'>
        <Outlet />
      </div>
      <MainFooter />
      {modal && <Auth setModal={setModal} />}
    </div>
  )
}

export default MainLayout
