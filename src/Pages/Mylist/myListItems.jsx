import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Button, Rating } from "@mui/material";


const MyListItems = (props) => {

  return(
    <div className="cartItem  w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
              <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/product/465487" className="group">
                  <img
                    src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/1/7/172864_medium.jpg"
                    className="w-full group-hover:scale-105 transition-all"
                  />
                </Link>
              </div>

              <div className="info w-[85%] relative">
                <IoCloseCircleOutline className="cursor-pointer absolute top-[0px] right-[10px] text-[22px] link transition-all" />
                <span className="text-[13px]">
                  D’Decor Home Fabrics Pvt. Ltd.
                </span>
                <h3 className="text-[16px]">
                  <Link className="link">Fitzrovia- Abstract</Link>
                </h3>
                <Rating
                  name="size-small"
                  defaultValue={4}
                  size="small"
                  readOnly
                />

                <div className="flex items-center gap-4 mt-2 mb-2">
                  <span className="price text-[18px] font-bold">₹2599.00</span>

                  <span className="oldPrice line-through text-gray-500 text-[15px] font-[400]">
                    ₹3499.00
                  </span>

                  <span className="price text-primary text-[15px] font-bold">
                    25% OFF
                  </span>
                </div>
                

              

                <Button className="btn-org btn-sm">Add to Cart</Button>
              </div>
            </div>  
  );
};

export default MyListItems;
