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
      <div className='d-mobile'>
        <div>
          <h2>
            We apologize for the inconvenience! Our website is currently
            undergoing maintenance to enhance your mobile browsing experience.
          </h2>
          <h6>
            We appreciate your patience and understanding. In the meantime, you
            can still access our site on a desktop or laptop computer for
            uninterrupted service. We are working diligently to bring our mobile
            platform back online as soon as possible. Thank you for your
            understanding.
          </h6>
        </div>
      </div>
      <div className='d-desktop'>
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
    </div>
  )
}

export default MainLayout
