import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Button from "@mui/material/Button";


const HomeBannerV2 = () => {
  return (
   <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src="./public/bannerV2.2.jpg" />

            <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%] opacity-0 z-50 p-8 flex items-center flex-col justify-center transition-all duration-900">
                <h4 className="text-[18px] font-[500] w-full text-left mb-3 text-[#333333] relative -right-[100%] opacity-0 duration-1000 ">Big saving days Sale</h4>
                <h2 className="text-[35px] font-[700] w-full text-[#333333]">Quality You Can Rely On-
                Sofa</h2>
                <h3 className="flex items-center text-[18px] gap-3 font-[500] w-full text-left mb-3 text-[#333333] mt-3 relative -right-[100%] opacity-0 duration-1500">Starting at only
                <span className="text-[#cc5500] text-[30px] font-[700]"> Rs. 4999.00</span></h3>

                <div className="w-full ">
                    <Button className="btn-org">Buy Now</Button>
                </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden">
            <img src="./public/bannerV2.1.jpg" />
            <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%] opacity-0 z-50 p-8 flex items-center flex-col justify-center transition-all duration-900">
                <h4 className="text-[18px] font-[500] w-full text-left mb-3 text-[#333333] relative -right-[100%] opacity-0 duration-1000 ">Big saving days Sale</h4>
                <h2 className="text-[35px] font-[700] w-full text-[#333333]">Low cost, high quality-
                Single Sofa chair</h2>
                <h3 className="flex items-center text-[18px] gap-3 font-[500] w-full text-left mb-3 text-[#333333] mt-3 relative -right-[100%] opacity-0 duration-1200 ">Starting at only {" "}
                <span className="text-[#cc5500] text-[30px] font-[700]"> Rs. 2999.00</span></h3>

                <div className="w-full ">
                    <Button className="btn-org">Buy Now</Button>
                </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
};

export default HomeBannerV2;
