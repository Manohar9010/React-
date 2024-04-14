import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeSlider.css'
import 'swiper/css';
import homeslideimg1 from '../../../../../assets/Images/homeslideimg1.webp'
import homeslideimg2 from '../../../../../assets/Images/homeslideimg2.webp'
import homeslideimg3 from '../../../../../assets/Images/homeslideimg3.webp'
import homeslideimg4 from '../../../../../assets/Images/homeslideimg4.webp'
import homeslideimg5 from '../../../../../assets/Images/homeslideimg5.webp'
export default function HomeSlider() {


  let data=[homeslideimg1,homeslideimg2,homeslideimg3,homeslideimg4,homeslideimg5]
  return (
    <div className='homemain'>
        
        <Swiper
      spaceBetween={0}
      slidesPerView={2}
      onSlideChange={() =>('slide change')}
      onSwiper={(swiper) =>(swiper)}
    >
      {
        data.map((e,i)=>{
          return(
            <SwiperSlide key={i}><img src={e} alt="" /></SwiperSlide>
          )
        })
      }
      
     
      
    </Swiper>

    </div>
  )
}
