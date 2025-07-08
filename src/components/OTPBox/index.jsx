import React, { useState } from "react";

const OTPBox = ({ length, onSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    const value = element.value;

    if (isNaN(value)) return; // Only allow numbers

    // Update OTP array
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Emit OTP when filled
    if (newOtp.every((val) => val !== "")) {
      onSubmit(newOtp.join(""));
    }

    // Auto focus next input
    if (value && index < length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div
      style={{ display: "flex", gap: "5px", justifyContent: "center" }}
      className="otpBox"
    >
      {otp.map((data, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-[45px] h-[45px] text-center text-[17px]"
        />
      ))}
    </div>
  );
};

export default OTPBox;
  