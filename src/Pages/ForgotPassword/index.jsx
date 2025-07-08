import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const ForgotPassword = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isPasswordShow2, setIsPasswordShow2] = useState(false);


    const context = useContext(MyContext);
    const history = useNavigate();



    

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-6 px-10">
          <h3 className="text-center text-[20px] text-[#000]">
            Forgot Password
          </h3>

          <form className="w-full mt-8">
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                id="password"
                label="New Password"
                variant="outlined"
                className="w-full"
                name="name"
              />
              <Button 
                className="!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] opacity-75"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === false ? (
                  <IoEye className="text-[20px]" />
                ) : (
                  <IoEyeOff className="text-[20px]" />
                )}
              </Button>
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow2 === false ? "password" : "text"}
                id="confirm_password"
                label="Confirm Password"
                variant="outlined"
                className="w-full"
                name="password"
              />
              
              <Button 
                className="!absolute !top-[10px] !right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full !text-[#000] opacity-75"
                onClick={() => setIsPasswordShow2(!isPasswordShow2)}
              >
                {isPasswordShow2 === false ? (
                  <IoEye className="text-[20px]" />
                ) : (
                  <IoEyeOff className="text-[20px]" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full mt-3">
              <Button className="btn-org btn-lg w-full">Change Password</Button>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
