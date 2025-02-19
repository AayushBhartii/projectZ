import React from "react";
import css from "./OTPBox.module.css";
import { HStack, PinInput, PinInputField } from "@chakra-ui/react";

const OTPBox = ({ onCompleteOTP = () => {} }) => {
  return (
    <div className={css.templateOTPBox}>
      <HStack>
        <PinInput onComplete={(str) => onCompleteOTP(str)} placeholder=" ">
          <PinInputField width={"25%"} ms="4px" />
          <PinInputField width={"25%"} ms="4px" />
          <PinInputField width={"25%"} ms="4px" />
          <PinInputField width={"25%"} ms="4px" />
        </PinInput>
      </HStack>
    </div>
  );
};

export default OTPBox;
