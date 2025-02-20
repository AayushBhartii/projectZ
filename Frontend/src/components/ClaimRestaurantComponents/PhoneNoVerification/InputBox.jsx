import React, { useState } from "react";
import css from "./InputBox.module.css";

const InputBox = ({ phoneNumber, setPhoneNumber }) => {
  // const InputBox = () => {
  // const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className={css.inputBox}>
      <input
        type="text"
        placeholder="Enter your phone number"
        className={css.phoneNumber}
        name="phoneNumber"
        value={phoneNumber}
        maxLength={10}
        onChange={(e) => setPhoneNumber(e)}
        required
      />
      <p className={css.instruction}>
        We have sent an OTP to your phone number
      </p>
    </div>
  );
};

export default InputBox;
