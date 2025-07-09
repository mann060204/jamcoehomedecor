import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { Button, Rating } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CartItems = (props) => {

    {/*For Size DropDwon*/}
  const [sizeanchorEl, setSizeAnchorE1] = useState(null);
  const [selectedSize, setCartItems] =useState(props.size);
  const openSize = Boolean(sizeanchorEl);

  {/*For Qty DropDwon*/}

 const [qtyanchorEl, setQtyAnchorE1] = useState(null);
  const [selectedQty, setSelectedQty] =useState(props.qty);
  const openQty = Boolean(qtyanchorEl);



{/*For Size DropDwon*/}
  const handleClickSize = (event) => {
    setSizeAnchorE1(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorE1(null);
    if(value!==null){
        setCartItems(value)
    }
    
  };

  {/*For Qty DropDwon*/}
  const handleClickQty = (event) => {
    setQtyAnchorE1(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorE1(null);
    if(value!==null){
        setSelectedQty(value)
    }
    
  };





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

                <div className="flex items-center gap-4 mt-2">
                  <div className="relative">
                    <span className="flex  items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer"  onClick={handleClickSize}>
                      Size :{selectedSize} <GoTriangleDown />{" "}
                    </span>

                    <Menu
                      id="size-menu"
                      anchorEl={sizeanchorEl}
                      open={openSize}
                      onClose={()=>handleCloseSize(null)}
                      slotProps={{
                        list: {
                          "aria-labelledby": "basic-button",
                        },
                      }}
                    >
                      <MenuItem onClick={()=>handleCloseSize('9 ft.')}>9 Ft.</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('7 ft.')}>7 Ft.</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('6 ft.')}>6 Ft.</MenuItem>
                      <MenuItem onClick={()=>handleCloseSize('5 ft.')}>5 Ft.</MenuItem>
                    </Menu>
                  </div>

                  <div className="relative">
                    <span className="flex  items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] py-1 px-2 rounded-md cursor-pointer"onClick={handleClickQty} >
                      Qty :{selectedQty}<GoTriangleDown />{" "}
                    </span>


                    <Menu
                      id="size-menu"
                      anchorEl={qtyanchorEl}
                      open={openQty}
                      onClose={()=>handleCloseQty(null)}
                      slotProps={{
                        list: {
                          "aria-labelledby": "basic-button",
                        },
                      }}
                    >
                      <MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(6)}>6</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(7)}>7</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(8)}>8</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(9)}>9</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(10)}>10</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(11)}>11</MenuItem>
                      <MenuItem onClick={()=>handleCloseQty(12)}>12</MenuItem>
                    </Menu>


                  </div>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <span className="price text-[18px] font-bold">₹2599.00</span>

                  <span className="oldPrice line-through text-gray-500 text-[15px] font-[400]">
                    ₹3499.00
                  </span>

                  <span className="price text-primary text-[15px] font-bold">
                    25% OFF
                  </span>
                </div>
              </div>
            </div>  
  );
};

export default CartItems;
