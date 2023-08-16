import React from 'react'
import Banner from '../../components/Banner'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useQuery } from 'react-query'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import axios from '../../api/api'

const ServicesPage = () => {
  const PageName = 'Services'

  const { data, isLoading, isError } = useQuery(['haircut'], async () => {
    const response = await axios.get('haircut/view')
    return response.data
  })

  return (
    <div>
      <Banner PageName={PageName} />
      <div className='serviceContainer'>
        <h2 className='title'>Haircut's</h2>
        <div className='mb-5'>
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
                  <h3 className='btnPrice text-center'>
                    {' '}
                    &#8369;{haircuts.price}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
