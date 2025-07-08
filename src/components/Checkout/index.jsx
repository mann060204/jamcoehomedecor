import React from "react";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { IoBagCheckOutline } from "react-icons/io5";

const Checkout = () => {
  return (
    <section className="py-10">
        <div className="container flex gap-5">
            <div className="leftCol w-[70%]">
                <div className="Card bg-white shadow-md p-5 rounded-md w-full">
                    <h1>Billing Details</h1>

                    <form className="w-full mt-5">

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[50%]">
                                <TextField className="w-full" label="Full Name" variant="outlined" size="small" />
                            </div>

                            <div className="col w-[50%]">
                                <TextField type="email" className="w-full" label="Email ID" variant="outlined" size="small" />
                            </div>
                        </div>

                        <h6 className="text-[14px] font-[500] mb-3">Street Address *</h6>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField className="w-full" label="House No and Street Name" variant="outlined" size="small" />
                            </div>
                            </div>
                            <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField className="w-full" label="Apartment , Suite, Unit, etc. (Optional)" variant="outlined" size="small" />
                            </div>
                            </div>

                            <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[50%]">
                                <TextField className="w-full" label="Town / City *" variant="outlined" size="small" />
                            </div>

                            <div className="col w-[50%]">
                                <TextField type="text" className="w-full" label="State/ Country *" variant="outlined" size="small" />
                            </div>
                        </div>

                        <h6 className="text-[14px] font-[500] mb-3">Postel / ZIP Code *</h6>

                        <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[100%]">
                                <TextField className="w-full" label="Zip code*" variant="outlined" size="small" />
                            </div>
                            </div>

                            <div className="flex items-center gap-5 pb-5">
                            <div className="col w-[50%]">
                                <TextField className="w-full" label="Phone No*" variant="outlined" size="small" />
                            </div>

                            <div className="col w-[50%]">
                                <TextField type="email" className="w-full" label="E-Mail *" variant="outlined" size="small" />
                            </div>  
                        </div>
                            

                    </form>
                </div>
            </div>

            <div className="rightCol w-[30%]">
                <div className="card shadow-md bg-white p-5 rounded-md">
                    <h2 className="mb-4">Your Order</h2>
                    <div className="flex items-center justify-between py-3 border-t border-b border-[rgba(0,0,0,0.1)]">
                        <span className="text-[14px] font-[600]">Product</span>
                        <span className="text-[14px] font-[600]">Subtotal</span>
                    </div>

                    <div className="mb-5 scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2">
                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg" className="w-full transition-all group-hover:scale-105"/>
                            </div>

                            <div className="info">
                                <h4 className="text-[14px]">Niello-floral ....</h4>
                                <span className="text-[13px]">
                                    Qty: 1
                                </span>
                            </div>
                        </div>
                        <span className="text-[14px] font-[600]"> ₹5000.00</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg" className="w-full transition-all group-hover:scale-105"/>
                            </div>

                            <div className="info">
                                <h4 className="text-[14px]">Niello-floral ....</h4>
                                <span className="text-[13px]">
                                    Qty: 1
                                </span>
                            </div>
                        </div>
                        <span className="text-[14px] font-[600]"> ₹5000.00</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg" className="w-full transition-all group-hover:scale-105"/>
                            </div>

                            <div className="info">
                                <h4 className="text-[14px]">Niello-floral ....</h4>
                                <span className="text-[13px]">
                                    Qty: 1
                                </span>
                            </div>
                        </div>
                        <span className="text-[14px] font-[600]"> ₹5000.00</span>
                    </div>


                    <div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg" className="w-full transition-all group-hover:scale-105"/>
                            </div>

                            <div className="info">
                                <h4 className="text-[14px]">Niello-floral ....</h4>
                                <span className="text-[13px]">
                                    Qty: 1
                                </span>
                            </div>
                        </div>
                        <span className="text-[14px] font-[600]"> ₹5000.00</span>
                    </div><div className="flex items-center justify-between py-2">
                        <div className="part1 flex items-center gap-3">
                            <div className="img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer">
                                <img src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/1/213282_1_big.jpg" className="w-full transition-all group-hover:scale-105"/>
                            </div>

                            <div className="info">
                                <h4 className="text-[14px]">Niello-floral ....</h4>
                                <span className="text-[13px]">
                                    Qty: 1
                                </span>
                            </div>
                        </div>
                        <span className="text-[14px] font-[600]"> ₹5000.00</span>
                    </div>

                    
                    
                    </div>

                    <Button className="btn-org btn-lg w-full flex gap-2 items-center"><IoBagCheckOutline className="text-[22px] gap-2"/>Checkout</Button>                    

                </div>
            </div>
        </div>
    </section>
  )
};

export default Checkout;
