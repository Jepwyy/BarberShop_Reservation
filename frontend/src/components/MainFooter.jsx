import React from 'react'
import Logo from '../assets/images/LogoLight.png'

import { MdLocationOn, MdPhone, MdMail, MdFacebook } from 'react-icons/md'
import {
  BsTwitter,
  BsInstagram,
  BsDribbble,
  BsLinkedin,
  BsScissors,
} from 'react-icons/bs'

const MainFooter = () => {
  return (
    <div className='footer'>
      <div className='footerTop gap-3'>
        <img className='footerLogo' src={Logo} alt='Logo' />
        <div className='footerDetails'>
          <div className='left '>
            <div className='d-flex align-items-center text-end gap-2'>
              <MdLocationOn size={20} /> Location: San Jose,
            </div>
            <div className='text-end'>Quezon City</div>
          </div>
          <div className='middle'>
            <BsScissors color='da9d40' size={60} />
          </div>
          <div className='right'>
            <div className='d-flex align-items-center gap-2'>
              <MdPhone size={20} /> Phone : +639344857354
            </div>
            <div className='d-flex align-items-center gap-2'>
              <MdMail size={20} /> Email : bentongbarberp@gmail.com
            </div>
          </div>
        </div>
        <div className='socials d-flex '>
          <div className='socialsLogo d-flex justify-content-center align-items-center'>
            <MdFacebook size={25} />
          </div>
          <div className='socialsLogo d-flex justify-content-center align-items-center'>
            <BsTwitter size={20} />
          </div>
          <div className='socialsLogo d-flex justify-content-center align-items-center'>
            <BsDribbble size={20} />
          </div>
          <div className='socialsLogo d-flex justify-content-center align-items-center'>
            <BsInstagram size={20} />
          </div>
          <div className='socialsLogo d-flex justify-content-center align-items-center'>
            <BsLinkedin size={20} />
          </div>
        </div>
      </div>
      <div className='footerBottom text-center'>
        © 2023 Bentong Barbershop. All Rights Reserved
      </div>
    </div>
  )
}

export default MainFooter
