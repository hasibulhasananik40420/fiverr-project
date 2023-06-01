/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { FaRegCaretSquareLeft, FaRegCaretSquareRight } from 'react-icons/fa';
import Painting from '../../assets/images/Painting.jpg';
import carpenter from '../../assets/images/carpenter.jpg';
import electrician from '../../assets/images/electrician.jpg';
import plumber from '../../assets/images/plumber.jpg';
// Import Swiper React components
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSection = () => {
  const swiperRef = useRef();

  const autoplay = {
    delay: 3500,
    disableOnInteraction: false,
  };

  return (
    <div className=''>
      <Swiper
        modules={[Autoplay, Navigation]}
        // navigation={true}
        autoplay={autoplay}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper h-[300px] md:h-[450px] lg:h-[600px] xl:h-[100vh] w-full overflow-hidden relative">

        <SwiperSlide><img src={Painting} alt="" className='object-cover h-[100%] w-full' /></SwiperSlide>
        <SwiperSlide><img src={carpenter} alt="" className='object-cover h-[100%] w-full' /></SwiperSlide>
        <SwiperSlide><img src={electrician} alt="" className='object-cover h-[100%] w-full' /></SwiperSlide>
        <SwiperSlide><img src={plumber} alt="" className='object-cover h-[100%] w-full' /></SwiperSlide>

        <div className='absolute w-full flex justify-between px-10 top-[50%] translate-y-[-50%] z-10 text-5xl font-light text-[#1c1c11]'>
          {/* <button onClick={() => swiperRef.current?.slidePrev()} className='btn'>Previous</button> */}
          {/* <button onClick={() => swiperRef.current?.slideNext()} className='btn'>Next</button> */}
          <button onClick={() => swiperRef.current?.slidePrev()}><FaRegCaretSquareLeft /></button>
          <button onClick={() => swiperRef.current?.slideNext()}><FaRegCaretSquareRight /></button>
        </div>

      </Swiper>
    </div>

  )
}

export default HeroSection