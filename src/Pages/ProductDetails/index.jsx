import React, { useState } from "react";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import { Link as RouterLink } from "react-router-dom";
import { Link, Breadcrumbs, Button } from "@mui/material";
import Rating from "@mui/material/Rating";

import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";
import { ProductDetailsComponents } from "../../components/ProductDetails";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              component={RouterLink}
              to="/"
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/curtain"
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Curtain
            </Link>
            <Link
              underline="hover"
              color="inherit"
              className="link transition !text-[14px]"
            >
              Teramo_large Door
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] pr-10 pl-10 ">
            <ProductDetailsComponents />
          </div>
        </div>

        <div className="container pt-10">
          <div className="flex items-center gap-10 mb-5">
            <span
              className={`link text-[20px] cursor-pointer font-[500] ${
                activeTab === 0 && "text-primary"
              }`}
              onClick={() => setActiveTab(0)}
            >
              Description
            </span>
            <span
              className={`link text-[20px] cursor-pointer font-[500] ${
                activeTab === 1 && "text-primary"
              }`}
              onClick={() => setActiveTab(1)}
            >
              Product Details
            </span>
            <span
              className={`link text-[20px] cursor-pointer font-[500] ${
                activeTab === 2 && "text-primary"
              }`}
              onClick={() => setActiveTab(2)}
            >
              Reviews (5)
            </span>
          </div>

          {activeTab === 0 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              <p>
                {" "}
                Add a refreshing touch of nature to your home with the Teramo
                Botanical Leaves Curtain, specially designed for large doors (9
                feet). This elegant curtain features a delicate all-over print
                of botanical leaves in soothing shades of blue, green, and
                yellow on a soft pastel base, creating a serene and stylish
                ambiance in any room.{" "}
              </p>

              <h4>Design: Subtle and charming botanical leaf print</h4>
              <p>
                The curtain features a delicate botanical print with gracefully
                scattered leaves, adding a natural and refreshing feel to your
                space. Its timeless design blends effortlessly with both modern
                and classic interiors.
              </p>
              <h4>Color: Multi-colored foliage on a neutral background</h4>
              <p>
                The soft neutral base is beautifully adorned with shades of
                green, blue, and yellow, evoking a sense of calm and elegance.
                This versatile color scheme complements a wide range of home
                décor styles.
              </p>
              <h4>Top Finish: Eyelet ring for hassle-free hanging</h4>
              <p>
                Equipped with sturdy metal eyelets, the curtain glides smoothly
                on rods for easy setup and daily use. The eyelet design also
                adds a neat, modern finish to your window or door.
              </p>
              <h4>Fabric: Durable, easy-care, and wrinkle-resistant</h4>
              <p>
                Crafted from premium-quality fabric, it offers long-lasting
                performance while resisting wrinkles and fading. The material is
                lightweight yet strong, ensuring elegance and durability.
              </p>
            </div>
          )}

          {activeTab === 1 && (
            <div className="shadow-md w-full py-5 px-8 rounded-md">
              {/* Logo and Manufacturer Name */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://cdn.ddecor.com/static/version1749197653/frontend/Ddecor/nextgen/en_US/images/logo.svg"
                  alt="D'Decor Logo"
                  className="h-10 w-auto object-contain"
                />
                <h2 className="text-[18px] font-semibold">
                  D’Decor Home Fabrics
                </h2>
              </div>

              {/* Product Details Table */}
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b">
                    <td className="font-medium py-2 px-2 bg-gray-100 w-1/3">
                      Product Name
                    </td>
                    <td className="py-2 px-2">Teramo_large Door 9 Ft</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium py-2 px-2 bg-gray-100">
                      Design Style
                    </td>
                    <td className="py-2 px-2">Botanical Leaves</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium py-2 px-2 bg-gray-100">Size</td>
                    <td className="py-2 px-2">135 cm x 270 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium py-2 px-2 bg-gray-100">
                      Curtain Type
                    </td>
                    <td className="py-2 px-2">Large Door Curtain</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-medium py-2 px-2 bg-gray-100">
                      Dimensions
                    </td>
                    <td className="py-2 px-2">1.35 m x 2.7 m</td>
                  </tr>
                  <tr>
                    <td className="font-medium py-2 px-2 bg-gray-100">Qty</td>
                    <td className="py-2 px-2">1 N</td>
                  </tr>
                </tbody>
              </table>

              {/* Care Instructions Image */}
              <div className="mt-6">
                <h4 className="text-[16px] font-semibold mb-2">
                  Care Instructions
                </h4>
                <ul className="text-sm text-gray-700 space-y-1 list-none">
                  <li>🧼 30° Wash</li>
                  <li>🚫 Do Not Bleach</li>
                  <li>💧 Do Not Wet Clean</li>
                  <li>🌀 Low Tumble Dry</li>
                  <li>❌ Do Not Iron</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productREviewsContainer">
                <h2 className="text-[20px]">Customer Questions & Answers</h2>

                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review pb-5 pt-2 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4D03AQFChbM09OHueQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718257964816?e=1756339200&v=beta&t=cLZ3ZHNlm5XkBTZKpYOhhdSM4deFcdpIo0FCQ5xnos4"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="!text-[16px]">Mann Monpara</h4>
                        <h5 className="!text-[14px] !mb-0">25-06-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown p
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pb-5 pt-2 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4D03AQFChbM09OHueQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718257964816?e=1756339200&v=beta&t=cLZ3ZHNlm5XkBTZKpYOhhdSM4deFcdpIo0FCQ5xnos4"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="!text-[16px]">Mann Monpara</h4>
                        <h5 className="!text-[14px] !mb-0">25-06-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown p
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pb-5 pt-2 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4D03AQFChbM09OHueQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718257964816?e=1756339200&v=beta&t=cLZ3ZHNlm5XkBTZKpYOhhdSM4deFcdpIo0FCQ5xnos4"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="!text-[16px]">Mann Monpara</h4>
                        <h5 className="!text-[14px] !mb-0">25-06-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown p
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pb-5 pt-2 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4D03AQFChbM09OHueQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718257964816?e=1756339200&v=beta&t=cLZ3ZHNlm5XkBTZKpYOhhdSM4deFcdpIo0FCQ5xnos4"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="!text-[16px]">Mann Monpara</h4>
                        <h5 className="!text-[14px] !mb-0">25-06-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown p
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                  <div className="review pb-5 pt-2 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://media.licdn.com/dms/image/v2/D4D03AQFChbM09OHueQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718257964816?e=1756339200&v=beta&t=cLZ3ZHNlm5XkBTZKpYOhhdSM4deFcdpIo0FCQ5xnos4"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="!text-[16px]">Mann Monpara</h4>
                        <h5 className="!text-[14px] !mb-0">25-06-2025</h5>
                        <p className="!mt-0 !mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown p
                        </p>
                      </div>
                    </div>
                    <Rating name="size-small" defaultValue={4} readOnly />
                  </div>
                </div>
                <br />

                <div className="reviewForm bg-[#fafafa] p-4 rounded-md">
                  <h2 className="text-[18px]">Add a Review</h2>
                  <form className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Your Review"
                      className="w-full"
                      multiline
                      rows={5}
                    />
                    <br />
                    <br />
                    <Rating name="size-small" defaultValue={4} />

                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="container pt-10">
          <h2 className="text-[25px] font-[600] pb-0">Related Products</h2>

          <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
