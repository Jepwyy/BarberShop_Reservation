import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/LogoLight.png'
import Logo1 from '../assets/images/LogoDark.png'
import { NavLink } from 'react-router-dom'

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false)

  // Set the height at which you want to change the background color
  const scrollTriggerHeight = 100 // Replace 100 with the desired scroll height

  const handleScroll = () => {
    const scrollY = window.scrollY
    setScrolled(scrollY > scrollTriggerHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`top-bar d-flex align-items-center justify-content-between ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <img className='navLogo' src={scrolled ? Logo1 : Logo} alt='logo' />

      <div className='navRight'>
        <NavLink to={'/'} className='links'>
          Home
        </NavLink>
        <NavLink to={'/about'} className='links'>
          About Us
        </NavLink>
        <NavLink to={'/services'} className='links'>
          Services
        </NavLink>
        <NavLink to={'/contact'} className='links'>
          Contact
        </NavLink>
        <NavLink to={'/reservations'} className='links'>
          Reservations
        </NavLink>
        <div className='btn-group'>
          <button
            type='button'
            className='btn btn-primary dropdown-toggle'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Action
          </button>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MainNavbar
