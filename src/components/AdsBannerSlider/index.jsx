import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className=" adsbanner py-5 w-full">
        <Swiper
                slidesPerView={props.items}
                spaceBetween={10}
                modules={[Navigation]}
                navigation={true}
                className="smlBtn"
              >
                <SwiperSlide>
                        <BannerBox img="./public/banner3.jpg" link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBox img="./public/banner3.jpg" link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBox img="./public/banner3.jpg" link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBox img="./public/banner3.jpg" link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBox img="./public/banner3.jpg" link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBox img="./public/banner3.jpg" link={'/'}/>
                </SwiperSlide>

                </Swiper>
    </div>
  )
};

export default AdsBannerSlider;
