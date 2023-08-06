import React from 'react'
import Banner from '../../components/Banner'
import equip from '../../assets/images/4.jpg'
const AboutPage = () => {
  const PageName = 'About Us'
  return (
    <div>
      <Banner PageName={PageName} />
      <section className='aboutPage'>
        <div className='textLeft'>
          <h2 className='mainTitle'>WELCOME TO BENTONG BARBERSHOP</h2>
          <h2 className='subTitle mt-4'>
            We Make Your Hair Look Great, Perfect!
          </h2>
          <p className='textBody mt-4'>
            Welcome to Bentong Barber Shop, we take pride in being more than
            just a place to get a haircut. We are a haven for men seeking
            unparalleled grooming experiences, where precision and artistry
            converge to create the perfect look. Our team of skilled barbers is
            dedicated to unleashing your true confidence by crafting hairstyles
            that not only suit your personality but also enhance your unique
            features. Step into our stylish and contemporary space, and you'll
            discover a realm where traditional barbering techniques meet the
            latest trends, resulting in cutting-edge styles that leave a lasting
            impression.
          </p>
        </div>
        <img className='imgRight' src={equip} alt='' />
      </section>
      <section className='extra'>
        <h1 className='extraTitle'>A Wide Range Of Male Grooming Services</h1>
        <button className='extraBtn'>Go To Our Services</button>
      </section>
    </div>
  )
}

export default AboutPage
