import React from "react";
import { LuClock } from "react-icons/lu";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1741758867669_7-6.jpg"
          className="w-full transition-all  group-hover:rotate-1"
          alt="blogImg"
        />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary rounded-md p-1 text-[12px] font-[500] gap-1">
          <LuClock className="text-[16px]" /> 19 JUNE, 2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">
            This prefabrice passive house is highly sustainable
          </Link>
        </h2>
        <p className="text-[14px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry....
        </p>

        <Link className="link font-[500] text-[14px] flex items-center gap-1">
          Read More
          <MdArrowForwardIos />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
