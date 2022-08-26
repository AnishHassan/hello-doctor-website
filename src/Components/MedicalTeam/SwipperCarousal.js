import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SliderMedTeam from './SliderMedTeam';

function SwipperCarousal() {
  return (
   <>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      ...
    </Swiper>
   </>
  )
}

export default SwipperCarousal