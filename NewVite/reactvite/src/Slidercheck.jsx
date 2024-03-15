// import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// export default function Slidercheck() {
//   return (
//     <div>

//         <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>

//     </div>
//   )
// }

// import React, { useState } from 'react';
// import './slider.css'
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from 'reactstrap';

// const items = [
//   {
//     src: 'https://picsum.photos/id/123/1200/400',
//     altText: 'Slide 1',
//     caption: 'Slide 1',
//     key: 1,
//   },
//   {
//     src: 'https://picsum.photos/id/456/1200/400',
//     altText: 'Slide 2',
//     caption: 'Slide 2',
//     key: 2,
//   },
//   {
//     src: 'https://picsum.photos/id/678/1200/400',
//     altText: 'Slide 3',
//     caption: 'Slide 3',
//     key: 3,
//   },
// ];

// function Slidercheck(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     return (

//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <img  src={item.src} alt={item.altText} />
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// export default Slidercheck;

import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";

export default function Slidercheck() {
  let data = [
    "hello1",
    "hello2",
    "hello3",
    "hello4",
    "hello5",
    "hello6",
    "hello7",
    "hello8",
    "hello10",
    "hello11",
    "hello12",
    "hello13",
    "hello14",
    "hello15",
    "hello16",
    "hello17",
    "hello18",
    "hello19",
  ];

  const [userdata, setUserdata] = useState(data);
  const [inputval, setInputval] = useState("");
  const [allcat, setAllcat] = useState("allcat");
  const [opendrop, setOpendrop] = useState(false);

  const dropopefun = () => {
    setOpendrop(!opendrop);
  };

  const livalufun = (item, indexx) => {
    setAllcat(item);
    setOpendrop(false);
  };



  useEffect(()=>{
     
  })
  return (
    <div
      
    >

      <div style={{ border: "1px solid ", marginTop: "25px" }}
      onClick={dropopefun}>
{allcat}
      </div>
      
      <div>
        <div>
          <Input type="text" onChange={(e) => setInputval(e?.target?.value)} />
        </div>
        {opendrop && (
          <div className="" style={{ height: "200px", overflow: "scroll" }}>
            {userdata.map((e, i) => {
              return (
                <li key={i} onClick={() => livalufun(e, i)}>
                  {e}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
