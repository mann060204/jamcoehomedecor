import React, { useContext } from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import { TiShoppingCart } from "react-icons/ti";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)] flex items-center">
     <div className="group imgWrapper w-[25%] h-[220px] overflow-hidden rounded-md relative">
  
  <Link to="/">
  <div className="img h-[220px] overflow-hidden">
  <img
    src="https://cdn.ddecor.com/media/catalog/product/cache/3c8f1b83ac74fb128ae5bef7e1f0d7a4/2/0/206201_big.jpg"
    className="w-full h-full object-cover"
  />
  <img
    src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_2_big.jpg"
   className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
    />

  </div>
  </Link>

  {/* Discount should stay fixed */}
  <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md p-1 text-[12px] font-[500]">
    25.72 %
  </span>

  {/* Button group hidden initially, shown on hover */}
  <div className="absolute top-[-200px] right-[5px] z-50 flex flex-col items-center gap-5 w-[50px] transition-all duration-300 ease-in-out group-hover:top-[15px] opacity-0 group-hover:opacity-100">
  <Tooltip title="Whishlist" placement="left-start">
    <button className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center">
      <CiHeart className="text-[18px]" />
    </button>
    </Tooltip>
    <Tooltip title="compare" placement="left-start">
    <button className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center">
      <IoGitCompareOutline className="text-[18px]" />
    </button>
    </Tooltip>
    <Tooltip title="View Details" placement="left-start">
    <button className="w-[35px] h-[35px] min-w-[35px] rounded-full bg-white text-black hover:bg-primary hover:text-white flex items-center justify-center" onClick={() => {
                console.log("View Details clicked");
                context.setOpenProductDetailsModel(true);
              }}>
      <MdOutlineZoomOutMap className="text-[18px]" />
    </button>
    </Tooltip>
  </div>
</div>

      <div className="info p-3 py-5 px-8 w-[75%] ">
        <h6 className="text-[16px] !font-[400]"> <Link to="/" className="link transition-all">D'Decor</Link> </h6>
        <h3 className="text-[20px] title mt-4 font-[500] mb-1 text-[#000] "> <Link to="/" className="link transition-all">Teramo_large Door 9 Ft</Link></h3>

        <p className="text-[14px] mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
         <Rating name="size-small" defaultValue={5} size="small" readOnly />

         <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[400]">₹3499.00</span>
          <span className="price text-primary text-[16px] font-bold">₹2599.00</span>
         </div>

      <div className="mt-3">
        <Button className="btn-org flex gap-2"><TiShoppingCart className="text-[22px]"/> Add to cart</Button>
      </div>


      </div>
    </div> 
  )
};

export default ProductItem;
 