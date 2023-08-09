import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { useMutation } from 'react-query'
import LinearProgress from '@mui/material/LinearProgress'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import axios from '../api/api'
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#da9d40',
    },
  },
})
const Register = ({ setActive }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const mutation = useMutation({
    mutationFn: (userdetails) =>
      axios.post('/auth/register', userdetails, {
        headers: { 'Content-Type': 'application/json' },
      }),
    onError: (error) => {
      toast.error(`${error.response.data.message}`, {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    },
    onSuccess: () => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registered Successfully!',
        showConfirmButton: false,
        timer: 1500,
      })
      setActive('Login')
    },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (confirmPassword == password) {
      mutation.mutate({
        name: name,
        email: email,
        password: password,
      })
    } else {
      toast.warn('Password not match!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }
  return (
    <ThemeProvider theme={customTheme}>
      <form className='Form' onSubmit={handleSubmit}>
        {mutation.isLoading && (
          <div className='Loader'>
            <LinearProgress color='secondary' />
          </div>
        )}
        <h1 className='title'>Sign Up</h1>
        <div>
          <TextField
            fullWidth
            id='name'
            label='Name'
            variant='outlined'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id='email'
            label='Email'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setConfirmPassword(e.target.value)}
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
