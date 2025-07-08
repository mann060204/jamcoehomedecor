import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-8 pt-4">
      <div className="container">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/curtain.jpg"
                  className="w-[150px] transition-all "
                />
                <h3 className="text-[18px] font-[500] mt-3">Curtain</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/mattress.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">Mattress</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/sofa cloth.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">Sofa Cloth</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/Roman Blind.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">Roman Blind</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/bed sheet.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">BedSheet</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/vertical Blind.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">Vertical Blind</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/Zebra Blind.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">Zebra Blind</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/pillow.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">Pillow</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item p-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="./public/Roller Blind.jpg"
                  className="w-[150px] transition-all"
                />
                <h3 className="text-[18px] font-[500] mt-3">Roller Blind</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
