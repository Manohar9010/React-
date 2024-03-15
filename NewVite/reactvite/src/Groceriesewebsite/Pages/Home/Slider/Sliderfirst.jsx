import React from "react";
import "./Sliderfirst.css";
import slider1 from "../../../images/slider-1.png";
import slider2 from "../../../images/slider-2.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button, FormGroup, Input } from "reactstrap";
import { Send } from "lucide-react";
export default function Sliderfirst() {
  return (
    <div>
      <div className="m-2 swipermain">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={slider1}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
             <div className="swipertext">
   
   <h1>Don`t miss amazing</h1>
   <h1>grocery deals</h1>
   <p>
    sign up for the daily newsletter
   </p>
   
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slider2}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="swipertext">
              <div>
                <h1>Fresh Vegetables</h1>
                <h1>Big discount</h1>
                <p> save up to 50% off on your first order</p>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiperinput">
    <FormGroup className="d-flex ">
    <Send color="#b5b5b5"  className="sendicon"/>
     <Input type="text"  placeholder="Your Email Please"/>
      <Button>Subscribe</Button>
    </FormGroup>
   </div>
        </Swiper>
       
      </div>
    
      
    </div>
  );
}
