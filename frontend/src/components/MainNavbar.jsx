import React, { useEffect, useState } from 'react'
import Logo from '../assets/images/LogoLight.png'
import Logo1 from '../assets/images/LogoDark.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext'
import axios from '../api/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'
import { useMutation } from 'react-query'
const MainNavbar = () => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const { setModal, token, user, setToken, setUser } = UserAuth()

  const mutation = useMutation({
    mutationFn: () =>
      axios.post('/auth/logout', {
        headers: { 'Content-Type': 'application/json' },
      }),
    onError: (error) => {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    },
    onSuccess: () => {
      navigate('/')
      setUser({})
      setToken(false)
    },
  })
  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',

      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#000',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout',
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate()
      }
    })
  }

  const scrollTriggerHeight = 100

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
        {token ? (
          <>
            <NavLink to={'/reservations'} className='links'>
              Reservations
            </NavLink>
            <div className='btn-group'>
              <button
                type='button'
                className='btn btn-nav dropdown-toggle'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Welcome! {user?.name}
              </button>
              <ul className='dropdown-menu'>
                <li>
                  <a onClick={logout} className='dropdown-item' href='#'>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button className='btn btn-nav' onClick={() => setModal(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  )
}

export default MainNavbar
