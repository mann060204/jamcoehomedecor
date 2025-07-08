import React, { useState } from "react";
import OTPBox from "../../components/OTPBox";
import { Button } from "@mui/material";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp); // Add actual API call here
  };

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-6 px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify.png" width="80" alt="Verify" />
          </div>

          <h3 className="text-center text-[20px] text-[#000] mt-4 mb-1">
            Verify OTP
          </h3>
          <p className="text-center text-sm mb-2">
            OTP sent to{" "}
            <span className="text-primary font-bold">xyz@gmail.com</span>
          </p>

          <form onSubmit={verifyOTP}>
            <div className="mt-2 flex flex-col items-center gap-3">
              <OTPBox length={6} onSubmit={handleOtpChange} />

              <div className="flex items-center justify-center px-3">
                <Button type="submit" className="w-full btn-org btn-lg">
                  Verify OTP
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
