import { Button } from "@mui/material";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav>
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              {" "}
              <GiHamburgerMenu className="text-[18px]" />
              SHOP BY CATEGORIES{" "}
              <FaAngleDown className="text-[18px] ml-auto font-bold " />
            </Button>
          </div>
          <div className="col_2 w-[65%]">
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link
                  to="home"
                  className="link transition text-[14px] font-[600]"
                >
                  {" "}
                  <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.7)] hover:!text-[#2D4739] !py-4">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="curtain"
                  className="link transition text-[14px] font-[600]"
                >
                  <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.7)] hover:!text-[#2D4739]!py-4">
                    Curtain
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all ">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="curtain1" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                          Curatin1{" "}
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/productlisting" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                          Curatin2{" "}
                        </Button> 
                      </Link>
                    </li>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                          Curatin3 main{" "}
                        </Button>

                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all ">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="curtain1" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                                  Curatin1{" "}
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                                  Curatin2{" "}
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link">
                                  Curatin3{" "}
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                                  Curatin4{" "}
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                                  Curatin5{" "}
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                          Curatin4{" "}
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none hover:!text-[#2D4739] link ">
                          Curatin5{" "}
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="sofa"
                  className="link transition text-[14px] font-[600]"
                >
                  <Button className="link transition !font-[500] !text-[hsla(0,0%,0%,1)] hover:!text-[#2D4739] !py-4">
                    Sofa
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="blind"
                  className="link transition text-[14px] font-[600]"
                >
                  <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.7)] hover:!text-[#2D4739] !py-4">
                    Blind
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="mattress"
                  className="link transition text-[14px] font-[600]"
                >
                  <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.7)] hover:!text-[#2D4739] !py-4">
                    Mattress
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="bedsheet"
                  className="link transition text-[14px] font-[600]"
                >
                  <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.7)] hover:!text-[#2D4739] !py-4">
                    Bedsheet
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="pillow-cushion"
                  className="link transition text-[14px] font-[600]"
                >
                  <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.7)] hover:!text-[#2D4739] !py-4">
                    Pillow & Cushion
                  </Button>{" "}
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="other"
                  className="link transition text-[14px] font-[600]"
                >
                  <Button className="link transition !font-[500] !text-[rgb(0,0,0,0.7)] hover:!text-[#2D4739] !py-4">
                    Other
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[15%]">
            <p className="font-[500] flex items-center gap-3 mb-0 mt-0 text-[15px]">
              <TbTruckDelivery className="text-[20px]" />
              Free Delivery around 15Km
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
        setIsOpenCatPanel={setIsOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
