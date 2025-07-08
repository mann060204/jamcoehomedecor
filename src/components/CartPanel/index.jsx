import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[550px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/545653" className="block group">
            <img
              src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg"
              className="w-full group-hover:scale-105"
            /></Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <Link to="/product/531213" className="link transition-all"><h4 className="text-[16px] font-[500]">Niello-floral</h4></Link>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>5</span>
              </span>
              <span className="text-primary font-bold">Price : ₹5000</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/545653" className="block group">
            <img
              src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg"
              className="w-full group-hover:scale-105"
            /></Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <Link to="/product/531213" className="link transition-all"><h4 className="text-[16px] font-[500]">Niello-floral</h4></Link>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>5</span>
              </span>
              <span className="text-primary font-bold">Price : ₹5000</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/545653" className="block group">
            <img
              src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg"
              className="w-full group-hover:scale-105"
            /></Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <Link to="/product/531213" className="link transition-all"><h4 className="text-[16px] font-[500]">Niello-floral</h4></Link>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>5</span>
              </span>
              <span className="text-primary font-bold">Price : ₹5000</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/545653" className="block group">
            <img
              src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg"
              className="w-full group-hover:scale-105"
            /></Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <Link to="/product/531213" className="link transition-all"><h4 className="text-[16px] font-[500]">Niello-floral</h4></Link>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>5</span>
              </span>
              <span className="text-primary font-bold">Price : ₹5000</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/545653" className="block group">
            <img
              src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg"
              className="w-full group-hover:scale-105"
            /></Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <Link to="/product/531213" className="link transition-all"><h4 className="text-[16px] font-[500]">Niello-floral</h4></Link>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>5</span>
              </span>
              <span className="text-primary font-bold">Price : ₹5000</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/545653" className="block group">
            <img
              src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg"
              className="w-full group-hover:scale-105"
            /></Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <Link to="/product/531213" className="link transition-all"><h4 className="text-[16px] font-[500]">Niello-floral</h4></Link>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>5</span>
              </span>
              <span className="text-primary font-bold">Price : ₹5000</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>

         <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/545653" className="block group">
            <img
              src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg"
              className="w-full group-hover:scale-105"
            /></Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <Link to="/product/531213" className="link transition-all"><h4 className="text-[16px] font-[500]">Niello-floral</h4></Link>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                {" "}
                Qty: <span>5</span>
              </span>
              <span className="text-primary font-bold">Price : ₹5000</span>
            </p>
            <MdDelete className="absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        
      </div>

      <br />

      <div className="bottomSec absolute bottom-[10px] left-[10px] w-full pr-2 pl-2">
        <div className="bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">1 Item</span>
            <span className="text-primary font-bold">₹4,785.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-primary font-bold">₹60.00</span>
          </div>
        </div>

        <div className="bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (tax excl.)</span>
            <span className="text-primary font-bold">₹4,785.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-[600]">Total (tax incl.)</span>
            <span className="text-primary font-bold">₹60.00</span>
          </div>
        </div>

        <br />

        <div className="flex items-center justify-between w-full gap-5 p-2">
         <Link to="/cart" className="w-[50%] d-block"><Button className="btn-org btn-lg w-full ">View Cart</Button></Link> 
         <Link to="/checkout" className="w-[50%] d-block"><Button className="btn-org btn-lg w-full "> Checkout </Button></Link> 
        </div>
      </div>
    </>
  );
};

export default CartPanel;
