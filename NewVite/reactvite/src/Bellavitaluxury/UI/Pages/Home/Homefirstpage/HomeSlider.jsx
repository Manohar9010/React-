import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeSlider.css'
import 'swiper/css';
import homeslideimg1 from '../../../Images/homeslideimg1.webp'
import homeslideimg2 from '../../../Images/homeslideimg2.webp'
import homeslideimg3 from '../../../Images/homeslideimg3.webp'
import homeslideimg4 from '../../../Images/homeslideimg4.webp'
import homeslideimg5 from '../../../Images/homeslideimg5.webp'
export default function HomeSlider() {
  return (
    <div className='homemain'>
        
        <Swiper
      spaceBetween={0}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={homeslideimg1} alt="" /></SwiperSlide>
      <SwiperSlide><img src={homeslideimg2} alt="" /></SwiperSlide>
      <SwiperSlide><img src={homeslideimg3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={homeslideimg4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={homeslideimg5} alt="" /></SwiperSlide>
      ...
    </Swiper>

    </div>
  )
}
