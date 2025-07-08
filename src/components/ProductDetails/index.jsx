import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import QtyBox from "../QtyBox";
import { TiShoppingCart } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";


export const ProductDetailsComponents = () => {
    const [producutActionIndex, setProducutActionIndex] = useState(null);
  return (
    <>
    <h1 className="text-[28px] font-[600] mb-2">Teramo_large Door</h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-[13px]">
                Brands:{" "}
                <span className="font-[500] text-black opacity-75">
                  D’Decor Home Fabrics
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
              <span className="text-[13px] cursor-pointer col">Review (5)</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[400]">
                ₹3499.00
              </span>
              <span className="price text-primary text-[24px] font-bold">
                ₹2599.00
              </span>
              <span className="text-[14px]">
                Available In Stock:{" "}
                <span className="text-green-600 text-[14px] font-bold">
                  548 Items
                </span>
              </span>
            </div>
            <p className="mt-3 pr-10 mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.it has survived
              not only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>

            <div className="flex items-center gap-3 py-4">
              <span className="text-[16px]">Size: </span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    producutActionIndex === 0 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProducutActionIndex(0)}
                >
                  9 ft                               
                </Button>
                <Button
                  className={`${
                    producutActionIndex === 1 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProducutActionIndex(1)}
                >
                  7ft
                </Button>
                <Button
                  className={`${
                    producutActionIndex === 2 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProducutActionIndex(2)}
                >
                  6ft
                </Button>
                <Button
                  className={`${
                    producutActionIndex === 3 ? "!bg-primary !text-white" : ""
                  }`}
                  onClick={() => setProducutActionIndex(3)}
                >
                  5ft
                </Button>
              </div>
            </div>

            <p className="text-[14px] mt-5 mb-2 text-[#000]">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>

            <div className="flex items-center  gap-4 py-4">
              <div className="qtyBoxWrapper w-[70px]">
                <QtyBox />
              </div>

              <Button className="btn-org flex gap-2">
                <TiShoppingCart className="text-[22px]" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                {" "}
                <CiHeart className="text-[18px]" />
                Add to Wishlist
              </span>
              <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-[500]">
                <IoGitCompareOutline className="text-[18px]" />
                Compare Price
              </span>
            </div>
            </>
  );
};