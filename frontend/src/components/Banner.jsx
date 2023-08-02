import React from 'react'
import banner from '../assets/images/banner1.jpg'
import { Link } from 'react-router-dom'
const Banner = (props) => {
  return (
    <div className='bannerContainer'>
      <img className='bannerImg' src={banner} alt='banner' />
      <div className='breadcrumb'>
        <Link to={'/'} className='Link'>
          Home
        </Link>{' '}
        <span>/</span> <span>{props?.PageName}</span>
      </div>
    </div>
  )
}

export default Banner
