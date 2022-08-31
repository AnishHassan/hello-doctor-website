import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderMedTeam from './SliderMedTeam';



function SwipperCarousal() {
  return (
   <>
    <Swiper
    style={{
      "--swiper-navigation-color": "#000",
      "--swiper-navigation-size": "50px",
    }}
     modules={[Navigation, Pagination, Scrollbar, A11y]}
     spaceBetween={50}
     slidesPerView={3}
     navigation
     pagination={{ clickable: true }}
    //  scrollbar={{ draggable: true }}
     onSwiper={(swiper) => console.log(swiper)}
     onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
      <SwiperSlide><SliderMedTeam/></SwiperSlide>
  
    </Swiper>
   </>
  )
}

export default SwipperCarousal