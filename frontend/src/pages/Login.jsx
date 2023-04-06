import React, { useState } from 'react'
import { MdVisibility } from 'react-icons/md'
import { MdVisibilityOff } from 'react-icons/md'
const Login = () => {
  const [visible, setVisile] = useState(false)
  const handleClick = () => {
    setVisile(!visible)
  }
  return (
    <div>
      <form>
        <input type='email' name='Email' />
        <input
          type={visible ? 'text' : 'password'}
          icon={
            visible ? <MdVisibility size={20} /> : <MdVisibilityOff size={20} />
          }
          name='Password'
          handleClick={handleClick}
        />
        <button>Login</button>
        <button>Google Login</button>
      </form>
    </div>
  )
}

export default Login
