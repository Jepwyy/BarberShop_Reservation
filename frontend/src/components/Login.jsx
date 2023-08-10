import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { useMutation } from 'react-query'
import LinearProgress from '@mui/material/LinearProgress'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import axios from '../api/api'
import { UserAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
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
const Login = ({ setActive, setModal }) => {
  const navigate = useNavigate()
  const { setToken, setUser } = UserAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const mutation = useMutation({
    mutationFn: (userdetails) =>
      axios.post('/auth/login', userdetails, {
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
    onSuccess: (data) => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Welcome ${data.data.user.name} !`,
        showConfirmButton: false,
        timer: 1500,
      })
      setUser(data.data.user)

      setToken(data.data.auth)
      setModal(false)
      navigate('/reservations')

      if (data.data.user.role == 'client') {
        navigate('/reservations')
      } else if (data.data.user.role == 'admin') {
        navigate('/dashboard')
      }
    },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    mutation.mutate({
      email: username,
      password: password,
    })
  }
  return (
    <ThemeProvider theme={customTheme}>
      <form className='Form' onSubmit={handleSubmit}>
        {mutation.isLoading && (
          <div className='Loader'>
            <LinearProgress color='secondary' />
          </div>
        )}
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
