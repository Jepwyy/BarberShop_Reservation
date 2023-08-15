import React from 'react'
import { UserReserve } from '../context/reserveContext'
import Qr from '../assets/images/qr.jpg'
const Reciept = () => {
  const { setReciept, price } = UserReserve()
  return (
    <div className='recieptContainer'>
      <h2>Scan the QR code and pay &#8369;{price} to proceed.</h2>
      <img className='recieptQr' src={Qr} />
      <div className='mb-3'>
        <label className='form-label'>Upload the reciept here :</label>
        <input
          className='form-control'
          type='file'
          id='formFile'
          accept='image/*'
          onChange={(e) => setReciept(e.target.files[0])}
        />
      </div>
    </div>
  )
}

export default Reciept
