import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import MainFooter from '../components/MainFooter'

const MainLayout = () => {
  return (
    <div className=''>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
      <MainFooter />
    </div>
  )
}

export default MainLayout
