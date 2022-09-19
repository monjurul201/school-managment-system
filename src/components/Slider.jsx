import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "./asset/student.webp"
import slide2 from "./asset/game.jpg"
import slide3 from "./asset/download.jpg"
import slide5 from "./asset/female-student-reading-book-university-library_43157-3925.webp"
// Import Swiper 

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";





const Slider = () => {
    return (
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={slide1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={slide5} alt="" /></SwiperSlide>
      </Swiper>
    </>
    );
};

export default Slider;