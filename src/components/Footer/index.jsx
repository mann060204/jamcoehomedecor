import React, { useContext } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { IoGift } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoMdChatboxes } from "react-icons/io";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


{/*Cart panel Imports */}
import Drawer from "@mui/material/Drawer";
import { IoClose } from "react-icons/io5";
import CartPanel from "../CartPanel";
import { MyContext } from "../../App";

const Footer = () => {

  
  const context =useContext(MyContext);

  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 py-8 pb-8">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[400]">
                For all Orders Over ₹1000
              </p>
            </div>

            <div className="col flex items-center justify-center flex-col group  w-[15%]">
              <TbTruckReturn className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[400]">For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group  w-[15%]">
              <MdPayments className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[400]">Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group  w-[15%]">
              <IoGift className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[400]">Our First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group  w-[15%]">
              <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[400]">Contact us Anytime</p>
            </div>
          </div>
          <br />

          <hr className="border-t-1 border-[rgba(0,0,0,0.7)] my-4" />

          <div className="footer flex py-12">
            <div className="part1 w-[25%] border-r border-[#2d4739]">
              <h2 className="text-[18px] font-[600] mb-4"> Contact Us</h2>
              <p className="text-[13px] font-[400] pb-4">
                JAMCO HOME DECOR <br />
                <br />
                12, Center Point, Opposite​ Sagar Complex, <br />
                Anand Mahal Rd, Adajan,
                <br />
                Surat, Gujarat 395009.
              </p>

              <Link
                className="link text-[13px]"
                to="mailto:jamcohomedecor@gmail.com"
              >
                jamcohomedecor@gmail.com
              </Link>

              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">
                (+91) 9428394412
              </span>

              <div className="flex items-center gap-2">
                <IoMdChatboxes className="text-[40px] text-primary" />

                <span className="text-[16px] font-[600]">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>

            <div className="part2 w-[40%] flex pl-8 ">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4"> Products</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Popular Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4"> Our Company</h2>

                <ul className="list">
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      About us
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Secure payment
                    </Link>
                  </li>
                  <li className="list-none text-[14px] w-full mb-2">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="part2 w-[35%] flex pl-8 flex-col pr-8 ">
              <h2 className="text-[18px] font-[600] mb-4">
                {" "}
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border border-gray-300  outline-none  pl-4 pr-4 rounded-sm mb-4 focus:border-[#2d4739]"
                  placeholder="Your Email Address"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                />

                <Button className="btn-org">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaFacebookSquare className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaSquareXTwitter className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <AiOutlineYoutube className="text-[20px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <FaPinterest className="text-[18px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary transition-all"
              >
                <AiFillInstagram className="text-[20px] group-hover:text-white" />
              </Link>
            </li>

          </ul>

            <p className="text-[13px] text-center">© 2025 - Jamco Home Decor</p>

            <div className="flex items-center">
                <img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" alt="image"/>
                <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="image"/>
                <img src="./public/master_card.png" alt="image"/>
                <img src="./public/american_express.png" alt="image"/>
                <img src="./public/paypal.png" alt="image"/>
            </div>

            

        </div>
      </div>
      <p className="text-[12px] text-center" >All rights reserved. Designed & Developed by Mann Monpara.</p>





      {/*Cart Panel */}

      <Drawer
        open={context.openCartPanel}
        onClose={context.toggleCartPanel(false)}
        anchor={"right"}
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)] overflow-hidden">
          <h4>Shooping Cart (1)</h4>{" "}
          <IoClose className="text-[20px] cursor-pointer" onClick={context.toggleCartPanel(false)} />
        </div>

        <CartPanel/>
        
      </Drawer>





    </>
  );
};

export default Footer;
