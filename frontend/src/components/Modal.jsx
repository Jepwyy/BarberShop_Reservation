import React from 'react'

const Modal = ({ children }) => {
  return (
    <div className='modalBg'>
      <div className='modalContainer'>{children}</div>
    </div>
  )
}

export default Modal
