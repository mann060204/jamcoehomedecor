import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="homeSlider py-3">
        <div className="container">
            <Swiper slidesPerView={1} spaceBetween={10} navigation={true} loop={true} modules={[Autoplay, Navigation]} className="sliderHome" autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden ">
            <img src="./public/Slider 1.jpg" alt="Banner Slide" className="w-full" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden ">
        <img src="./public/Slider 2.jpg"alt="Banner Slide" className="w-full"></img>
        </div>
        </SwiperSlide>
         <SwiperSlide>
         <div className="item rounded-[20px] overflow-hidden ">
        <img src="./public/Slider 1.jpg" alt="Banner Slide" className="w-full" ></img>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden ">
        <img src="./public/Slider 2.jpg" alt="Banner Slide" className="w-full" ></img>
        </div>
        </SwiperSlide>
         <SwiperSlide>
         <div className="item rounded-[20px] overflow-hidden ">
        <img src="./public/Slider 1.jpg" alt="Banner Slide" className="w-full" ></img>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item rounded-[20px] overflow-hidden ">
        <img src="./public/Slider 2.jpg" alt="Banner Slide" className="w-full" ></img>
        </div>
        </SwiperSlide>
        
        
      </Swiper>
        </div>
    </div>
  )
};

export default HomeSlider;
