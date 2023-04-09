import React, { useState } from 'react'
import { useMutation } from 'react-query'
import axios from 'axios'
import { MdVisibility } from 'react-icons/md'
import { MdVisibilityOff } from 'react-icons/md'
const Login = () => {
  const [visible, setVisile] = useState(false)
  const handleClick = () => {
    setVisile(!visible)
  }

  const { mutate, isLoading } = useMutation(
    async (token) => {
      const response = await axios.post('/auth/google', { token })
      const data = response.data
      if (data.user) {
        window.location.href = '/dashboard'
      } else {
        throw new Error('Login failed')
      }
    },
    {
      onError: (error) => {
        alert(error.message)
      },
    }
  )

  function handleGoogleLogin() {
    gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(({ accessToken }) => {
        mutate(accessToken)
      })
      .catch((error) => {
        alert(error.message)
      })
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
        <button onClick={handleGoogleLogin} disabled={isLoading}>
          Google Login
        </button>
      </form>
    </div>
  )
}

export default Login
