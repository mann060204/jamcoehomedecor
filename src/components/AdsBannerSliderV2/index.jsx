import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import BannerBoxV2 from "../BannerBoxV2";

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
                        <BannerBoxV2 info="right" image={'../public/bannerV2.1.2.jpg'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBoxV2 info="left" image={'../public/bannerV2.1.1.jpg'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBoxV2 info="right" image={'../public/bannerV2.1.2.jpg'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBoxV2 info="left" image={'../public/bannerV2.1.1.jpg'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBoxV2 info="left" image={'../public/bannerV2.1.1.jpg'} link={'/'}/>
                </SwiperSlide>
                <SwiperSlide>
                        <BannerBoxV2 info="left" image={'../public/bannerV2.1.1.jpg'} link={'/'}/>
                </SwiperSlide>

                </Swiper>
    </div>
  )
};

export default AdsBannerSlider;
