import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import Rating from '@mui/material/Rating';

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailabilityFilter, setIsOpenAvailabilityFilter] =
    useState(true);
  return (
    <aside className="sidebar py-5">
      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Shop by categories
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>

        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Curtain"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Sofa"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Blinds"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Mattress"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="BedSheet"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Pillow & Cushion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Mattress"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="BedSheet"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Pillow & Cushion"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Shop by Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]"
            onClick={() =>
              setIsOpenAvailabilityFilter(!isOpenAvailabilityFilter)
            }
          >
            {isOpenAvailabilityFilter === true ? (
              <FaAngleUp />
            ) : (
              <FaAngleDown />
            )}
          </Button>
        </h3>

        <Collapse isOpened={isOpenAvailabilityFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In stock"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Filter by Price
        </h3>
        <RangeSlider/>
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs:{100}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            From: <strong className="text-dark">Rs:{5000}</strong>
          </span>
        </div>
      </div>

<div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Filter by Rating
        </h3>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={5} readOnly/>
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={4} readOnly/>
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={3} readOnly/>
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={2} readOnly/>
        </div>
        <div className=" w-full">
          <Rating name="size-medium" defaultValue={1} readOnly/>
        </div>

      </div>




    </aside>
  );
};

export default Sidebar;
