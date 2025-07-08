import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmal = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSmal.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-3">
        <div className="slider w-[15%]">
          <Swiper
            ref={zoomSliderSmal}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={0}
            modules={[Navigation]}
            navigation={true}
            className="zoomProductSliderThumbs h-[500px] overflow-hidden"
          >
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 0 ? "opacity-100" : "opacity-30"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_big.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 1 ? "opacity-100" : "opacity-30"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_2_big.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`item rounded-md overflow-hidden cursor-pointer group ${
                  slideIndex === 2 ? "opacity-100" : "opacity-30"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_3_big.jpg"
                  className="w-full transition-all group-hover:scale-105"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide></SwiperSlide>
          
          </Swiper>
        </div>

        <div className="zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md">
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
            onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_big.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_2_big.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1}
                src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_3_big.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
