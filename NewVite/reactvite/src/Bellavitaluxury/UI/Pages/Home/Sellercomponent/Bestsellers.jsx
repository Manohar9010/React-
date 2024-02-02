import React from "react";
import BestSellercard from "./BestSellercard";
import bestsellerimg from "../../../Images/bestsellerimg.webp";
import bestsellerimg1 from "../../../Images/bestsellerimg1.webp";
import bestsellerimg2 from "../../../Images/bestsellerimg2.webp";
import bestsellerimg3 from "../../../Images/bestsellerimg3.webp";
import bestsellerimg4 from "../../../Images/bestsellerimg4.webp";
import bestsellerimg5 from "../../../Images/bestsellerimg5.webp";
import bestsellerimg6 from "../../../Images/bestsellerimg6.webp";
import bestsellerimg7 from "../../../Images/bestsellerimg7.webp";
//  import dewdew from "../../../Images/bestsellerimg1.webp"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
let bestsellercarddata = [
  {
    image: bestsellerimg,
    type: "EAU DE PARFUM",
    brandname: "Luxurv Perume Gift Sets For Men",
    rating: "4.4 (261 reviews)",
    price: "₹ 565.00",
    oldprice: "₹649.00",
    percentage:"-33% ",
  },
  {
    image: bestsellerimg1,
    type: "Eau De Parfum For All ",
    brandname: "OUD GOLD - 100ml",
    rating: "5 (17 reviews)",
    price: "₹ 849.00",
    oldprice: "₹1099.00",
    percentage:"-23% ",
  },
  {
    image: bestsellerimg2,
    type: "EAU DE PARFUM ",
    brandname: "CEO Man",
    rating: "4.3 (192 reviews)",
    price: "₹ 449.00",
    percentage:"-44%",
    oldprice: "₹099.00",
  },
  {
    image: bestsellerimg3,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Unisex Perfume Gift Set-4",
    rating: "4.3 (338 reviews)",
    price: "₹ 565.00",
    oldprice: "₹049.00",
    percentage:"-33% ",
  },

  {
    image: bestsellerimg4,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Unisex Perfume Gift",
    rating: "4.3 (338 reviews)",
    price: "₹ 765.00",
    oldprice: "₹059.00",
    percentage:"-34% ",
  },
  {
    image: bestsellerimg1,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Pefume",
    rating: "4.3 (338 reviews)",
    price: "₹ 765.00",
    oldprice: "₹059.00",
    percentage:"-34% ",
  },{
    image: bestsellerimg6,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Pefume",
    rating: "4.3 (338 reviews)",
    price: "₹ 765.00",
    oldprice: "₹059.00",
    percentage:"-34% ",
  },
  {
    image: bestsellerimg7,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Pefume",
    rating: "4.3 (338 reviews)",
    price: "₹ 765.00",
    oldprice: "₹059.00",
    percentage:"-34% ",
  },
];
import { Pagination } from 'swiper/modules';
export default function Bestsellers() {
  return (
    <div>
      <div className="bestsellertitle">
        <h1>Bestsellers</h1>
      </div>
      <div className="bestsellermain">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {bestsellercarddata.map((data, i) => {
            return (
              <SwiperSlide>
                <div key={i} className="cardmain ">
                  <BestSellercard
                    imag1={data.image}
                    type={data.type}
                    brandname={data.brandname}
                    rating={data.rating}
                    price={data.price}
                    oldprice={data.oldprice}
                    percentage={data.percentage}

                  />
                  
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
