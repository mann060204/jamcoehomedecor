import React from "react";
import "../BannerBoxV2/style.css";
import { PiDropSimple } from "react-icons/pi";
import { Link } from "react-router-dom";

const BannerBoxV2 = (props) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-md group relative">
        <img src={props.image} className="w-full transition-all duration-150 group-hover:scale-105"/>
    
    <div className={`info absolute p-5 top-0 ${props.info==="left" ? 'left-0':'right-0'} w-[50%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 ${props.info==="left" ? '':'pr-5'} `}>
        <h2 className="text-[35px] font-[600] w-full">Urban Glow</h2>
        <span className="text-[25px] text-primary font-[600] w-full">₹5000.00</span>
        <div className="w-full">
            <Link to="/" className="text-[20px] font-[600] link underline">Buy Now</Link>
        </div>
    </div>
    
    
    </div>
  )
};

export default BannerBoxV2;
