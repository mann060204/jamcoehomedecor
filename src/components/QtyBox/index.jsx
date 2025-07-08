import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {

    const[qtyvalue, setQtyVal] = useState(1);

    const plusQty=()=>{
        setQtyVal(qtyvalue+1)
    }
    const minusQty=()=>{
        if (qtyvalue===1){
            setQtyVal(1)
        }else{
            setQtyVal(qtyvalue-1)
        }
    }
  return (
    <div className="qtyBox flex items-center relative">

        <input type="number" className="w-full h-[40px] p-2 pl-3 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.1)] rounded-md" value={qtyvalue}/>

            <div className="flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50 border-l-1 border-[rgba(0,0,0,0.1)]" >
                <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-[#000] !rounded-none !border-b-1 !border-[rgba(0,0,0,0.1)]" onClick={plusQty}><FaAngleUp className="text-[12px] opacity-75"/></Button>
                <Button className="!min-w-[30px] !w-[30px] !h-[20px] !text-[#000] !rounded-none" onClick={minusQty}><FaAngleDown className="text-[12px] opacity-75"/></Button>
            </div>

            
            
    </div>
  )
};

export default QtyBox;
