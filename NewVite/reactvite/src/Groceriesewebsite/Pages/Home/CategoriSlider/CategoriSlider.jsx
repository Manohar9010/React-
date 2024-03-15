import React, { useState } from "react";
import "./CategoriSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
export default function CategoriSlider() {
  let cateslide = [
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-13.png",
      title: "Cake&nbsp;&&nbsp;Milk",
      stock: "26 items",
      bgcolor: "#fffceb",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-12.png",
      title: "Oganic&nbsp;Kiwi",
      stock: "28 items",
      bgcolor: "#ecffec",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-11.png",
      title: "Peach",
      stock: "14 items",
      bgcolor: "#feefea",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-9.png",
      title: "Red&nbsp;Apple",
      stock: "54 item",
      bgcolor: "#fff3eb",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-3.png",
      title: "Snack",
      stock: "56 items",
      bgcolor: "#fff3ff",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-1.png",
      title: "vegetables",
      stock: "72 items",
      bgcolor: "#f2fce4",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-2.png",
      title: "Strawberry",
      stock: "36 items",
      bgcolor: "#feefea",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-4.png",
      title: "Black&nbsp;plum", 
      stock: "123 items",
      bgcolor: "#fffceb",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-5.png",
      title: "Custard&nbsp;apple",
      stock: "34 items",
      bgcolor: "#feefea",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-14.png",
      title: "Coffe&nbsp;&&nbsp;tea",
      stock: "89 items",
      bgcolor: "#ecffec",
    },
    {
      photo: "https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-15.png",
      title: "Headphone",
      stock: "87 items",
      bgcolor: "#feefea",
    },
  ];

  const [itemBg, setItemBg] = useState([
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
  ]);
  return (
    <div className="catmain">
      <Swiper
        slidesPerView={10}
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
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {cateslide.map((e, i) => {
          return (
            <SwiperSlide style={{ backgroundColor: e.bgcolor,borderRadius:"15px"}}>
              <div className="">
                <div>
                  <img src={e.photo} alt="" />
                </div>
                <div>
                <h6 dangerouslySetInnerHTML={{ __html: e.title }}></h6>
                  <p>{e.stock}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <div className="swiperinput"></div>
      </Swiper>
    </div>
  );
}
