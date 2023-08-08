import React, { useState } from 'react'
import { TextField } from '@mui/material'
const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form className='flex flex-col gap-2'>
      <h1>Sign In</h1>
      <div>
        <TextField
          fullWidth
          id='email'
          onChange={(e) => setUsername(e.target.value)}
          label='Email'
          variant='standard'
        />
      </div>
      <div>
        <TextField
          fullWidth
          id='password'
          onChange={(e) => setPassword(e.target.value)}
          label='Password'
          type='password'
          autoComplete='current-password'
          variant='standard'
        />
      </div>
      <button type='submit' className='bg-black py-2 px-4 rounded text-white'>
        Login
      </button>
    </form>
  )
}

export default Login
