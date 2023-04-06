import React from 'react'

const Register = () => {
  return (
    <div>
      <form>
        <input type='text' name='Name' />
        <input type='text' name='Email' />
        <input type='password' name='Password' />
        <input type='password' name='Confirm Password' />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
