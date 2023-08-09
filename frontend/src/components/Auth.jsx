import React, { useState } from 'react'
import Modal from './Modal'
import Img from '../assets/images/img1.jpg'
import Logo from '../assets/images/LogoLight.png'
import Login from './Login'
import Register from './Register'
import { MdClose } from 'react-icons/md'
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
          <div className='close'>
            <MdClose
              color='#aaaaaa'
              size={25}
              onClick={() => setModal(false)}
            />
          </div>

          <div className='forms'>
            {active === 'Login' ? (
              <Login setActive={setActive} />
            ) : active === 'Register' ? (
              <Register setActive={setActive} />
            ) : (
              <Login setActive={setActive} />
            )}
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Auth
