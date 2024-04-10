import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";

import "../styles/global.css";

export default function Carousel() {
  return (
    
      <Swiper className="mySwiper">
        <SwiperSlide><img src="IMG_2183.jpeg" alt="house image"></img></SwiperSlide>
        <SwiperSlide><img src="IMG_2505.jpeg"></img>;</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    
  );
}
