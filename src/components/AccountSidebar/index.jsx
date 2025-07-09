    import React from "react";
    import { MdCloudUpload } from "react-icons/md";
    import { FaCircleUser } from "react-icons/fa6";

    import { CgUserlane } from "react-icons/cg";
    import { BiSolidShoppingBags } from "react-icons/bi";
    import { LiaClipboardListSolid } from "react-icons/lia";
    import { FiLogOut } from "react-icons/fi";

    import { NavLink } from "react-router";
    import { Button } from "@mui/material";

    const AccountSidebar = () => {
    return (
        <div className="sticky top-[10px] card bg-white shadow-md rounded-md">
                <div className="w-full p-5 flex items-center justify-center flex-col">
                <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                    <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFChbM09OHueQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718257964816?e=1757548800&v=beta&t=dWBzwJ1PazozIoE8ZKFAllgfdg2FfIfIjEJXy76ca1w"
                    className="w-full h-full object-cover"
                    />
                    <div className="overlay w-full h-full absolute top-0 left-0 z-40 bg-[rgba(0,0,0,0.5)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
                    <MdCloudUpload className="text-white text-[25px] pointer-events-none " />
                    {/* Add z-50 and cursor-pointer here */}
                    <input
                        type="file"
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-50"
                    />
                    </div>
                </div>

                <h3>Mann Monpra</h3>
                <h6 className="text-[13px] font-[500]">
                    mannmonpara10101012@gmail.com
                </h6>
                </div>

                <ul className="list-none pb-5 bg-[#eef6fc] myAccountTabs">
                <li className="w-full">
                    <NavLink to="/my-account" exact={true} activeClassName="isActive">
                    <Button className="w-full !text-left !py-2 !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-5 !text-[18px]">
                        <CgUserlane className="text-[22px]" />
                        User Profile
                    </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                <NavLink to="/my-list" exact={true} activeClassName="isActive">
                    <Button className="w-full !text-left !py-2 !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-5 !text-[18px]">
                    <BiSolidShoppingBags className="text-[22px]" />
                    My List
                    </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                <NavLink to="/my-order" exact={true} activeClassName="isActive">
                    <Button className="w-full !text-left !py-2 !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-5 !text-[18px]">
                    <LiaClipboardListSolid className="text-[22px]" />
                    My Order
                    </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                <NavLink to="/" exact={true} activeClassName="isActive">
                    <Button className="w-full !text-left !py-2 !justify-start !px-5 !capitalize !text-[rgba(0,0,0,0.8)] rounded-none flex items-center gap-5 !text-[18px]">
                    <FiLogOut className="text-[22px]" />
                    Log out
                    </Button>
                    </NavLink>
                </li>
                </ul>
            </div>
    )
    };

    export default AccountSidebar;
