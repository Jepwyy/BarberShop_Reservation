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
const Register = ({ setActive }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <form className='Form'>
        <h1 className='title'>Sign Up</h1>
        <div>
          <TextField fullWidth id='name' label='Name' variant='outlined' />
        </div>
        <div>
          <TextField fullWidth id='email' label='Email' variant='outlined' />
        </div>
        <div>
          <TextField
            fullWidth
            id='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='outlined'
          />
        </div>
        <div>
          <TextField
            fullWidth
            id='cpassword'
            label='Confirm Password'
            type='password'
            autoComplete='current-password'
            variant='outlined'
          />
        </div>
        <div>
          Already a member?
          <span className='link' onClick={() => setActive('Login')}>
            {' '}
            Sign In
          </span>
        </div>
        <button type='submit' className='btnForms'>
          Register
        </button>
      </form>
    </ThemeProvider>
  )
}

export default Register
