import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MyContext } from "../../App";

const Login = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const[fromFields, setFormsFields] =useState({
    email:'',
    password:''
  });


    const context = useContext(MyContext);
    const history = useNavigate();


  const forgotPassword =()=>{
    
      context.openAlertBox("success","OTP send");
      history("/verify");
      
  }
    

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-6 px-10">
          <h3 className="text-center text-[20px] text-[#000]">
            Login to your Account
          </h3>

          <form className="w-full mt-8">
            <div className="form-group w-full mb-5">
              <TextField
                type="email"
                id="email"
                label="E-mail Id *"
                variant="outlined"
                className="w-full"
                name="name"
              />
            </div>
            <div className="form-group w-full mb-5 relative">
              <TextField
                type={isPasswordShow === false ? "password" : "text"}
                id="password"
                label="Password *"
                variant="outlined"
                className="w-full"
                name="password"
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

            <a className="link cursor-pointer text-[14px] font-[600]"onClick={forgotPassword}>Forgot Password?</a>
            <div className="flex items-center w-full mt-3">
              <Button className="btn-org btn-lg w-full">Login</Button>
            </div>
            <p className="text-center">Not Registerded? <Link className="link text-[14px] font-[600] text-primary" to="/register">Sign Up</Link></p>


            <p className="text-center font-[500]">Or Continue with Social Account</p>
            <Button className="flex gap-3 w-full !bg-[#f1f1f1] btn-lg !text-[#000]"><FcGoogle className="text-[20px]"/>Login with Google</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
