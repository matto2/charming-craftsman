import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "../styles/global.css";

import { Navigation } from 'swiper/modules';


export default function Carousel() {
  return (
    
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       <SwiperSlide><img src="IMG_2183.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2505.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2506.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2507.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2508.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2509.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2513.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2514.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2515.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2516.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2721.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2722.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2724.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2725.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2726.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2727.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2728.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2729.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2730.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2731.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2732.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2733.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2734.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2735.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2739.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2740.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2741.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2742.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2743.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2744.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2747.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2748.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2749.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2750.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2751.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2752.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2758.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2759.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2760.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2761.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2762.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2763.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2764.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2765.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2766.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2774.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2775.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2778.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2779.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2781.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2782.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2783.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2785.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2787.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2790.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2794.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2795.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2797.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2798.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2799.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2800.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2801.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2802.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2803.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2804.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2805.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2807.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2808.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2810.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2811.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2812.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="IMG_2814.jpeg" alt="house image"></img></SwiperSlide>
<SwiperSlide><img src="UnitA-kitchenCounter.jpeg" alt="house image"></img></SwiperSlide>

      </Swiper>

    
  );
}
