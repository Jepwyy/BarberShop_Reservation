import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
})
const Login = ({ setActive }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <ThemeProvider theme={customTheme}>
      <form className='Form'>
        <h1 className='title'>Sign In</h1>
        <div>
          <TextField
            fullWidth
            id='email'
            onChange={(e) => setUsername(e.target.value)}
            label='Email'
            variant='outlined'
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
            variant='outlined'
          />
        </div>
        <div>
          Not a member?
          <span className='link' onClick={() => setActive('Register')}>
            {' '}
            Sign Up
          </span>
        </div>
        <button type='submit' className='btnForms'>
          Login
        </button>
      </form>
    </ThemeProvider>
  )
}

export default Login
