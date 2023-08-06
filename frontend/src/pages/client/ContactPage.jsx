import React from 'react'
import Banner from '../../components/Banner'
import { HiMail, HiPencil, HiUser, HiPhone } from 'react-icons/hi'
const ContactPage = () => {
  const PageName = 'Contact Us'
  return (
    <div>
      <Banner PageName={PageName} />
      <section className='contact py-sm-5 py-4'>
        <div className='container py-md-3'>
          <h2 className='heading text-capitalize text-center mb-lg-5 mb-sm-4 mb-3'>
            Contact Us
          </h2>
          <div className='contact-form'>
            <form action='#' method='post'>
              <div className='row main-w3layouts-sectns'>
                <div className='col-lg-3 col-md-6 w3-btm-spc form-text1'>
                  <label className='mb-2'>
                    <span>
                      <HiUser size={20} color='#da9d40' />
                    </span>{' '}
                    Your Name:
                  </label>
                  <input
                    type='text'
                    name='Name'
                    placeholder='Name'
                    required=''
                  />
                </div>
                <div className='col-lg-3 col-md-6 w3-btm-spc form-text2'>
                  <label className='mb-2'>
                    <span>
                      <HiPhone size={20} color='#da9d40' />
                    </span>{' '}
                    Phone Number:
                  </label>
                  <input
                    type='text'
                    name='Phone no'
                    placeholder='xxxxxxxxxx'
                    required=''
                  />
                </div>
                <div className='col-lg-3 col-md-6 w3-btm-spc form-text1'>
                  <label className='mb-2'>
                    <span>
                      <HiMail size={20} color='#da9d40' />
                    </span>{' '}
                    Email Address:
                  </label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    required=''
                  />
                </div>
                <div className='col-lg-3 col-md-6 w3-btm-spc form-text2'>
                  <label className='mb-2'>
                    <span>
                      <HiPencil size={20} color='#da9d40' />
                    </span>{' '}
                    Subject:
                  </label>
                  <input
                    type='text'
                    name='subject'
                    placeholder='Hair Style'
                    required=''
                  />
                </div>
              </div>
              <div className='main-w3layouts-sectns '>
                <div className='w3-btm-spc form-text2 p-0'>
                  <textarea placeholder='Enter Your Message Here'></textarea>
                </div>
              </div>
              <button className='btn'> Submit</button>
            </form>
          </div>
        </div>
      </section>
      <div className='map p-2'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3246.1132799016714!2d120.99328437255376!3d14.638847061589216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1691333288596!5m2!1sen!2sph'></iframe>
      </div>
    </div>
  )
}

export default ContactPage
