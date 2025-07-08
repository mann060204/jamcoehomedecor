import React, { useState } from "react"
import { Link, Links } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaRegMinusSquare } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";


const CategoryCollapse = () => {
    const [submenuIndex, setsubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnersubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setsubmenuIndex(null);
    } else {
      setsubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnersubmenuIndex(null);
    } else {
      setInnersubmenuIndex(index);
    }
  };

  return (
    <>
        <div className="scroll">
        <ul className="w-full">
          {/* THIS IS DROPDOWN MENU FOR CategoryPanel 1 */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Curtain
              </Button>
            </Link>

            {submenuIndex === 0 ? (
              <FaRegMinusSquare
                className="absolute top-[9px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FiPlusSquare
                className="absolute top-[9px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Catalog
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 0 ? (
                    <FaRegMinusSquare
                      className="absolute top-[9px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="absolute top-[9px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Digital Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Texture Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Plain Curain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Sheer Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Cotton Curtain
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          {/* THIS IS DROPDOWN MENU FOR CategoryPanel 2 */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Blinds
              </Button>
            </Link>

            {submenuIndex === 1 ? (
              <FaRegMinusSquare
                className="absolute top-[9px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FiPlusSquare
                className="absolute top-[9px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Catalog
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 1 ? (
                    <FaRegMinusSquare
                      className="absolute top-[9px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="absolute top-[9px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu  w-full pl-3">
                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Digital Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Texture Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Plain Curain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Sheer Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Cotton Curtain
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          {/* THIS IS DROPDOWN MENU FOR CategoryPanel 3 */}
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Blinds
              </Button>
            </Link>

            {submenuIndex === 2 ? (
              <FaRegMinusSquare
                className="absolute top-[9px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FiPlusSquare
                className="absolute top-[9px] right-[15px] cursor-pointer "
                onClick={() => openSubmenu(2)}
              />
            )}

            {submenuIndex === 2 && (
              <ul className="submenu  w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Catalog
                    </Button>
                  </Link>

                  {innerSubmenuIndex === 2 ? (
                    <FaRegMinusSquare
                      className="absolute top-[9px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FiPlusSquare
                      className="absolute top-[9px] right-[15px] cursor-pointer "
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}

                  {innerSubmenuIndex === 2 && (
                    <ul className="inner_submenu  w-full pl-3">
                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Digital Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Texture Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1 ">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Plain Curain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Sheer Curtain
                        </Link>
                      </li>

                      <li className="list-none relative mb-1">
                        <Link
                          to="/"
                          className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                        >
                          Cotton Curtain
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  )
};

export default CategoryCollapse;
