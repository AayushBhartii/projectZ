import React, { useState, useEffect } from "react";
import css from "./PhoneNoVerification.module.css";
import OTPBox from "./OTPBox";
import Dropdown from "./Dropdown";
import InputBox from "./InputBox";
import BlueBtn from "../../../utils/Buttons/BlueBtn/BlueBtn";

const PhoneNoVerification = ({ notify, notifyBox }) => {
  const [otpVisible, setOtpVisible] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [email, setEmail] = useState("");
  const [emailReq, setEmailReq] = useState(false);
  const [phoneContact, setPhoneContact] = useState({
    countryCode: "",
    phoneNumber: "+91",
  });

  useEffect(() => {
    if (otpVisible && resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [otpVisible, resendTimer]);

  const handleSendOTP = () => {
    if (phoneContact.phoneNumber.trim().length === 10) {
      setOtpVisible(true);
      setResendTimer(30);
      console.log("OTP sent to:", phoneContact.phoneNumber);
    } else {
      // alert("Please enter a valid 10-digit phone number.");
      notify("Please enter a valid 10-digit phone number.");
    }
  };

  const handleResendOTP = () => {
    if (resendTimer === 0) {
      setResendTimer(30);
      console.log("Resending OTP...");
    }
  };

  const handlePhoneNumber = (e) => {
    setPhoneContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCountryCode = (value) => {
    setPhoneContact((prev) => ({ ...prev, countryCode: value }));
    console.log(phoneContact.countryCode);
  };

  const handleClick = () => {
    if (email.length === 0 && !email.includes("@")) {
      notify("You need to enter the valid email");
      return;
    }
    setEmailReq(true);
    console.log("We get the email", email);
  };

  const handleOTPSubmit = (value) => console.log(value);

  return (
    <div className={css.container}>
      {notifyBox}
      <div className={css.title}>
        Claim your restaurant instantly by OTP verification
      </div>

      <div className={css.subTitle}>
        Verify through email Id registered with us. (or cotinue with number)
      </div>

      {/* email input */}
      <div className={css.emailInputContainer}>
        <input
          type="email"
          className={css.emailInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your registered email"
          required
        />
        <BlueBtn text="Verify" py="16px" px="32px" handleClick={handleClick} />
      </div>

      {emailReq && <OTPBox onCompleteOTP={handleOTPSubmit} />}

      <div className={`${css.subTitle} ${css.text}`}>
        Verify any 1 number(s) registered with us.
      </div>

      <div className={css.inputContainer}>
        <Dropdown setCountryCode={handleCountryCode} />
        <InputBox setPhoneNumber={handlePhoneNumber} />

        {!otpVisible ? (
          <button className={`  ${css.sendOtpButton}`} onClick={handleSendOTP}>
            Verify
          </button>
        ) : (
          <button
            className={`${css.resendButton} `}
            onClick={handleResendOTP}
            disabled={resendTimer > 0}
          >
            Resend OTP {resendTimer > 0 ? `(${resendTimer})` : ""}
          </button>
        )}
      </div>

      {otpVisible && <OTPBox onCompleteOTP={handleOTPSubmit} />}
    </div>
  );
};

export default PhoneNoVerification;
