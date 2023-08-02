import React from 'react'
import Banner from '../../components/Banner'
const AboutPage = () => {
  const PageName = 'About Us'
  return (
    <div>
      <Banner PageName={PageName} />
      <section className='aboutHeader'></section>
    </div>
  )
}

export default AboutPage
