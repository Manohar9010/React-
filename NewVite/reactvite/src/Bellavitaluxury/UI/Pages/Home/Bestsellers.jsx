import React from "react";
import BestSellercard from "./BestSellercard";
import bestsellerimg from "../../Images/bestsellerimg.webp";
import bestsellerimg1 from "../../Images/bestsellerimg1.webp";
import bestsellerimg2 from "../../Images/bestsellerimg2.webp";
import bestsellerimg3 from "../../Images/bestsellerimg3.webp";
import bestsellerimg4 from "../../Images/bestsellerimg4.webp";
import bestsellerimg5 from "../../Images/bestsellerimg5.webp";
import bestsellerimg6 from "../../Images/bestsellerimg6.webp";
import bestsellerimg7 from "../../Images/bestsellerimg7.webp";
import Slider from "react-slick";
let bestsellercarddata = [
  {
    image: bestsellerimg,
    type: "EAU DE PARFUM",
    brandname: "Luxurv Perume Gift Sets For Men",
    rating: "4.4 (261 reviews)",
    price: "-33% ₹ 565.00",
    oldprice: "₹649.00",
  },
  {
    image: bestsellerimg1,
    type: "Eau De Parfum For All ",
    brandname: "OUD GOLD - 100ml",
    rating: "5 (17 reviews)",
    price: "-23% ₹ 849.00",
    oldprice: "₹1099.00",
  },
  {
    image: bestsellerimg2,
    type: "EAU DE PARFUM ",
    brandname: "CEO Man",
    rating: "4.3 (192 reviews)",
    price: "-44% ₹ 449.00",
    oldprice: "₹099.00",
  },
  {
    image: bestsellerimg3,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Unisex Perfume Gift Set-4",
    rating: "4.3 (338 reviews)",
    price: "-33% ₹ 565.00",
    oldprice: "₹049.00",
  },

  {
    image: bestsellerimg4,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Unisex Perfume Gift",
    rating: "4.3 (338 reviews)",
    price: "-34% ₹ 765.00",
    oldprice: "₹059.00",
  },

  {
    image: bestsellerimg7,
    type: "EAU DE PARFUM ",
    brandname: "Luxurv Pefume",
    rating: "4.3 (338 reviews)",
    price: "-34% ₹ 765.00",
    oldprice: "₹059.00",
  },
];

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function Bestsellers() {
  return (
    <div>
      <div className="bestsellermain">
        <Slider {...settings}>
          {bestsellercarddata.map((data) => {
            return (
              <div className="cardmain ">
                <BestSellercard
                  imag1={data.image}
                  type={data.type}
                  brandname={data.brandname}
                  rating={data.rating}
                />
                ;
              </div>
            );
          })}
        </Slider>

        <img src={bestsellerimg} alt="" />
        <img src={bestsellerimg1} alt="" />
        <img src={bestsellerimg2} alt="" />
        <img src={bestsellerimg3} alt="" />
        <img src={bestsellerimg4} alt="" />
        <img src={bestsellerimg5} alt="" />
        <img src={bestsellerimg6} alt="" />
        <img src={bestsellerimg7} alt="" />
      </div>
    </div>
  );
}
7;
