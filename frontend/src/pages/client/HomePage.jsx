import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner4.jpg'
import equipment from '../../assets/images/items.jpg'
import { RxScissors } from 'react-icons/rx'
import { BsTrophyFill, BsEmojiSmile } from 'react-icons/bs'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const HomePage = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mainContainer'
      >
        <SwiperSlide className='SlideContainer '>
          <img className='images' src={banner1} alt='' />
          <div className='items'>
            <div className='mainTitle'>
              WE MAKE YOUR HAIR
              <span className='move'>
                LOOK <span className='active'>PERFECT</span>
              </span>
            </div>
            <div className='subTitle'>Bentong Barbershop</div>
            <div className='btnContainer'>
              <button className='bannerBtn'>Read More</button>
              <button className='bannerBtn'>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='SlideContainer '>
          <img className='images' src={banner2} alt='' />
          <div className='items'>
            <div className='mainTitle'>
              Empowering Men with
              <span className='move'>
                Timeless <span className='active'>Elegance</span>
              </span>
            </div>
            <div className='subTitle'>Bentong Barbershop</div>
            <div className='btnContainer'>
              <button className='bannerBtn'>Read More</button>
              <button className='bannerBtn'>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='SlideContainer '>
          <img className='images' src={banner3} alt='' />
          <div className='items'>
            <div className='mainTitle'>
              Unlocking Your True Potential,
              <span className='move'>
                One Trim at a <span className='active'>Time</span>
              </span>
            </div>
            <div className='subTitle'>Bentong Barbershop</div>
            <div className='btnContainer'>
              <button className='bannerBtn'>Read More</button>
              <button className='bannerBtn'>Book Now</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <section className='description'>
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
        <img className='imgRight' src={equipment} alt='' />
      </section>
      <section className='discount'>
        <div className='discountMain'>
          <img className='discountImg' src={banner2} alt='' />
          <div className='discountContainer'>
            <h1 className='discountTitle'>
              Get Flat 25% Discount On Every{' '}
              <span className='down'>Sunday</span>
            </h1>
            <button className='discountBtn'>Make An Appointment</button>
          </div>
        </div>
      </section>
      <section class='facts'>
        <div className='factsTitle'>Why Choose Us</div>
        <div className='factsContext'>
          At Bentong Barber Shop, we believe that every client's appearance is a
          canvas, waiting to be transformed into a timeless masterpiece. We
          strive to redefine your style, one cut at a time, leaving you feeling
          confident and ready to conquer the world. Choose us for an artful
          grooming experience that celebrates your uniqueness and leaves a
          lasting impression.
        </div>
        <div className='factsContainer'>
          <div className='factsBox'>
            <BsTrophyFill color='#da9d40' size={30} />
            <h1 className='numbers'>10</h1>
            <h1 className='context'>
              BARBER <span className='next'>EXPERIENCED</span>
            </h1>
          </div>
          <div className='factsBox'>
            <RxScissors color='#da9d40' size={30} />
            <h1 className='numbers'>50+</h1>
            <h1 className='context'>
              AMAZING <span className='next'>HAIRSTYLES</span>
            </h1>
          </div>
          <div className='factsBox'>
            <BsEmojiSmile color='#da9d40' size={30} />
            <h1 className='numbers'>2000+</h1>
            <h1 className='context'>
              SATISFIED <span className='next'>CLIENTS</span>
            </h1>
          </div>
        </div>
      </section>
      <section className='extra'>
        <h1 className='extraTitle'>A Wide Range Of Male Grooming Services</h1>
        <button className='extraBtn'>Go To Our Services</button>
      </section>
    </div>
  )
}

export default HomePage
