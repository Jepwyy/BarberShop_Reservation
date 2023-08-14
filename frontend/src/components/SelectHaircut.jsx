import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useQuery } from 'react-query'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import axios from '../api/api'

const SelectHaircut = () => {
  const { data, isLoading, isError } = useQuery(['haircut'], async () => {
    const response = await axios.get('haircut/view')
    return response.data
  })
  console.log(data)
  return (
    <div className='haircutContainer'>
      {' '}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        {data.map((haircut) => (
          <SwiperSlide key={haircut._id}>
            <div className='cardContainer'>
              <img className='imgCard' src={haircut.image} />

              <h1 className='titleCard'>{haircut.name}</h1>
              <h3 className='priceCard'> &#8369; {haircut.price}</h3>

              <button className='btnCard'>Select</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SelectHaircut
