import React, { useState } from 'react'
import Modal from './Modal'
import Img from '../assets/images/img1.jpg'
import Logo from '../assets/images/LogoLight.png'
import Login from './Login'
import Register from './Register'
const Auth = ({ setModal }) => {
  const [active, setActive] = useState('Login')
  return (
    <Modal>
      <div className='authContainer'>
        <div className='left'>
          <img className='background' src={Img} alt='BG' />
          <img className='logo' src={Logo} alt='LOGO' />
        </div>
        <div className='right'>
          <button onClick={() => setModal(false)}>Exit</button>
          <div className='d-flex'>
            <button onClick={() => setActive('Login')} className=''>
              Login
            </button>
            <button onClick={() => setActive('Register')} className=''>
              Register
            </button>
          </div>
          <div>
            {active === 'Login' ? (
              <Login />
            ) : active === 'Register' ? (
              <Register setActive={setActive} />
            ) : (
              <Login />
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Auth
