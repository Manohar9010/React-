import React from 'react'
import './pageSixth.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import imgpro1 from '../img/profile1.jpg'
import imgpro2 from '../img/profile2.jpg'
import imgpro3 from '../img/profile3.jpg'
import imgpro4 from '../img/profile4.jpg'
export default function PageSixth() {

    const clients = [
        {
          img: imgpro1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: imgpro2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: imgpro3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: imgpro4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];


  return (
    <div>
        <div className="main_clients">
           <div className="client_text">
            <h1>Clients always get <span>Exceptional work</span> from me...</h1>
           </div>
           <div className="client_slide">
            <div className="blur"></div>
            <div className="blur1"></div>

           <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
         {
            clients.map((ele,index)=>{
                return <SwiperSlide>
                <div className="slide1">
                    <div className="border_slide">
        
                    <div className="slideimg">
                        <img src={ele.img} alt="" />
                    </div>
                    <div className="slide1_text">
                      {ele.review}
                    </div>
                    </div>
                </div>
              </SwiperSlide>
            })
           }   
      
      
      ...
    </Swiper>
           </div>

        </div>


    </div>
  )
}
