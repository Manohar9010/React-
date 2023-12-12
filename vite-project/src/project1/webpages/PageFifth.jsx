import React from 'react'
import './PageFifth.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import imgslider from '../img/sidebar.png'
import imgecomers from '../img/ecommerce.png'
import imgmusicapp from '../img/musicapp.png'
import imghoc from '../img/hoc.png'
export default function PageFifth() {
  return (
    <div>
        <div className="main_slider">
            <div className="slider_text">
               <h1>Recent Projects</h1>
               <h1>Portfolio</h1>
            </div>
            <Swiper
             spaceBetween={30}
             slidesPerView={3}
             grabCursor={true}
             className="portfolio-slider"
            >
                 <SwiperSlide className='swiper_slider'>
                    <img src={imgslider} alt="" />
                 </SwiperSlide>
                 <SwiperSlide className='swiper_slider'>
                    <img src={imgecomers} alt="" />
                 </SwiperSlide >
                 <SwiperSlide className='swiper_slider'>
                    <img src={imgmusicapp} alt="" />
                 </SwiperSlide>
                 <SwiperSlide className='swiper_slider'>
                    <img src={imghoc} alt="" />
                 </SwiperSlide>
          
            </Swiper>
        </div>
      
    </div>
  )
}
