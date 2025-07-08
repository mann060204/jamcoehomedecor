import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import Footer from "../../components/Footer";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <HomeSlider /> */}


      <section className="py-5">
        <div className="container flex  gap-5">
          <div className="part1 w-[65%]">
            <HomeBannerV2/>
          </div>

          <div className="part2 w-[35%] flex items-center justify-between  flex-col">
            <BannerBoxV2 info="left" image={'../public/bannerV2.1.1.jpg'}/>
            <BannerBoxV2 info="right" image={'../public/bannerV2.1.2.jpg'}/>
          </div>


        </div>
      </section>


      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[25px] font-[600]">Popular Products</h2>
              <p className="text-[15px] font-[400]">
                Do not miss the current offers until the end of this Monsoon.
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Curtain" />
                <Tab label="Mattress" />
                <Tab label="Sofa Cloth" />
                <Tab label="Roman Blind" />
                <Tab label="Bedsheet" />
                <Tab label="Vertical Blind" />
                <Tab label="Pillow" />
                <Tab label="zebra blind" />
                <Tab label="roller Blind" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className=" py-16 pt-2 bg-white">
        <div className="container">
          <div className="freeshiping w-[80%] m-auto p-4 border-2 border-[#2D4739] flex items-center justify-between rounded-md mb-7">
            <div className="col 1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[30px] font-[600] uppercase">
                Free Shiping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and over ₹5000
              </p>
            </div>

            <p className="font-bold text-[30px]">- Only ₹5000*</p>
          </div>

          {/* <AdsBannerSliderV2 items={4} /> */}
          <AdsBannerSlider items={4}/>
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600]">Latest Products</h2>

          <ProductsSlider items={6} />
          <AdsBannerSliderV2 items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600]">Feature Products</h2>

          <ProductsSlider items={6} />

          <AdsBannerSliderV2 items={3} />
        </div>
      </section>

      <section className="blogSection py-5 pb-8 pt-0 bg-white">
        <div className="container">
          <h2 className="text-[25px] font-[600] mb-4">From the Blog</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={true}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>

            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      
    </>
  );
};

export default Home;
