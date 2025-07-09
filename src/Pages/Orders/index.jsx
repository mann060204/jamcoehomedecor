import React, { useState } from "react";
import AccountSidebar from "../../components/AccountSidebar";
import MyListItems from "../Mylist/myListItems";
import { Button } from "@mui/material";
import Badge from "../../components/Badge";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";

const Orders = () => {
  const [isopenOrderdProduct, setIsOpenOrderdProduct] = useState(null);

  const isShowOrderdProduct = (index) => {
    if (isopenOrderdProduct === index) {
      setIsOpenOrderdProduct(null);
    } else {
      setIsOpenOrderdProduct(index);
    }
  };

  return (
    <section className="py-10 w-full">
      <div className="container flex items-start gap-5">
        <div className="col1 w-[20%]">
          <AccountSidebar />
        </div>

        <div className="col2 w-[80%]">
          <div className="shadow-md rounded-md bg-white">
            <div className="py-2 px-3  border-b border-[rgba(0,0,0,0.1)]">
              <h2>My Orders</h2>
              <p className="mt-0">
                There are <span className="font-bold text-primary"> 2 </span>{" "}
                Orders.
              </p>

              <div className="relative overflow-x-auto mt-5">
                <table className="min-w-[1200px] w-full text-sm text-left text-gray-700">
                  <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        &nbsp;
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Payment ID
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Phone Number
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Pincode
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Total Amount
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        User ID
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Order Status
                      </th>
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(0)}
                        >
                          {isopenOrderdProduct === 0 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">
                          ord_98d4f514sd54fsd5sda4f5as5d
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">pay_KX2Wp8ZRq3dNcB</span>
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        Mann Monpara
                      </td>
                      <td className="px-6 py-4 font-[500]">9876543210</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          402 Gokul Residency, Near Shanti Nagar Road, Sector 17
                          Vastrapur, Ahmedabad, Gujarat 380015, India.
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">411001</td>
                      <td className="px-6 py-4 font-[500]">₹1,299</td>
                      <td className="px-6 py-4 font-[500]">mann@example.com</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary"></span>
                        d8f1s4d9a5s7f2sd8a4f6s5
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="delivered" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        08-07-2025
                      </td>
                    </tr>

                    {isopenOrderdProduct === 0 && (
                      <tr>
                        <td className="pl-20" colSpan={6}>
                          {/*add table details here */}

                          <div className="relative overflow-x-auto">
                            <table className="min-w-[1200px] w-full text-sm text-left text-gray-700">
                              <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product ID
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Subtotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                <tr>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      ord_98d4f514sd54fsd5sda4f5as5d
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary">
                                      Teramo_large Door
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_2_big.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">2599</td>
                                  <td className="px-6 py-4 font-[500]">7200</td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      ord_98d4f514sd54fsd5sda4f5as5d
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary">
                                      Teramo_large Door
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_2_big.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">2599</td>
                                  <td className="px-6 py-4 font-[500]">7200</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                    <tr>
                      <td className="px-6 py-4 font-[500]">
                        <Button
                          className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                          onClick={() => isShowOrderdProduct(1)}
                        >
                          {isopenOrderdProduct === 1 ? (
                            <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          ) : (
                            <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                          )}
                        </Button>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">
                          ord_98d4f514sd54fsd5sda4f5as5d
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary">pay_KX2Wp8ZRq3dNcB</span>
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        Mann Monpara
                      </td>
                      <td className="px-6 py-4 font-[500]">9876543210</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="block w-[400px]">
                          402 Gokul Residency, Near Shanti Nagar Road, Sector 17
                          Vastrapur, Ahmedabad, Gujarat 380015, India.
                        </span>
                      </td>
                      <td className="px-6 py-4 font-[500]">411001</td>
                      <td className="px-6 py-4 font-[500]">₹1,299</td>
                      <td className="px-6 py-4 font-[500]">mann@example.com</td>
                      <td className="px-6 py-4 font-[500]">
                        <span className="text-primary"></span>
                        d8f1s4d9a5s7f2sd8a4f6s5
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        <Badge status="delivered" />
                      </td>
                      <td className="px-6 py-4 font-[500] whitespace-nowrap">
                        08-07-2025
                      </td>
                    </tr>

                    {isopenOrderdProduct === 1 && (
                      <tr>
                        <td className="pl-20" colSpan={6}>
                          {/*add table details here */}

                          <div className="relative overflow-x-auto">
                            <table className="min-w-[1200px] w-full text-sm text-left text-gray-700">
                              <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                                <tr>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product ID
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Product Title
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    image
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Quantity
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Price
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 whitespace-nowrap"
                                  >
                                    Subtotal
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                <tr>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      ord_98d4f514sd54fsd5sda4f5as5d
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary">
                                      Teramo_large Door
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_2_big.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">2599</td>
                                  <td className="px-6 py-4 font-[500]">7200</td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-gray-500">
                                      ord_98d4f514sd54fsd5sda4f5as5d
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500]">
                                    <span className="text-primary">
                                      Teramo_large Door
                                    </span>
                                  </td>
                                  <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                    <img
                                      src="https://cdn.ddecor.com/media/catalog/product/cache/07d87d9170de334b4397320786072f99/2/0/206201_2_big.jpg"
                                      className="w-[50px] h-[50px] object-cover rounded-md"
                                    />
                                  </td>
                                  <td className="px-6 py-4 font-[500]">2</td>
                                  <td className="px-6 py-4 font-[500]">2599</td>
                                  <td className="px-6 py-4 font-[500]">7200</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
