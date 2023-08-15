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
import { UserReserve } from '../context/reserveContext'

const SelectHaircut = ({ setActiveStep }) => {
  const { setHaircut, haircut, setPrice } = UserReserve()
  const { data, isLoading, isError } = useQuery(['haircut'], async () => {
    const response = await axios.get('haircut/view')
    return response.data
  })
  const handleSelect = (id, price) => {
    setHaircut(id)
    setPrice(price)
    setActiveStep(2)
  }

  return (
    <div className='haircutContainer'>
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
        {data?.map((haircuts) => (
          <SwiperSlide key={haircuts._id}>
            <div className='cardContainer'>
              <img className='imgCard' src={haircuts.image} />

              <h1 className='titleCard'>{haircuts.name}</h1>
              <h3 className='priceCard'> &#8369; {haircuts.price}</h3>

              <button
                onClick={() => handleSelect(haircuts._id, haircuts.price)}
                className={`btnCard ${haircut === haircuts._id && 'selected'}`}
              >
                Select
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SelectHaircut
