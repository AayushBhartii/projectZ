import React, { useState } from "react";
import css from "./ShopCredentialVerification.module.css";
import PhoneNoInput from "./PhoneNoInput";
import AddImageIcon from "/icons/addImageIcon.png";
import FileUpload from "./FileUpload";
import BlueBtn from "../../../utils/Buttons/BlueBtn/BlueBtn";
import styles from "../PhoneNoVerification/PhoneNoVerification.module.css";
import OTPBox from "../PhoneNoVerification/OTPBox";

const ShopCredentialVerification = ({ notify, notifyBox }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [optSend, setOptSend] = useState(null);
  const [email, setEmail] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phoneContact, setPhoneContact] = useState({
    countryCode: "+91",
    phoneNumber: "",
  });

  const handleFileSelect = (files) => {
    const fileArray = Array.from(files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...fileArray]);
    console.log("Uploaded files:", fileArray);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneContact((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCountryCode = (code) => {
    setPhoneContact((prev) => ({ ...prev, countryCode: code }));
  };

  const handleSendOTP = () => {
    if (phoneContact.phoneNumber.trim().length === 10) {
      setOptSend("phoneNumber");
      console.log("Send OTP clicked");
    } else {
      notify("You need to enter 10 digits of your phone number");
    }
  };

  const handleCheckboxChange = (e) => {
    // console.log("Checkbox state:", e.target.checked);
  };

  const handleOTPComplete = (otp) => {
    // console.log("Complete OTP entered:", otp);
  };

  const handleEmailClick = () => {
    if (email.length === 0 && !email.includes("@")) {
      notify("You need to enter the valid email");
      return;
    } else {
      setOptSend("email");
    }
  };

  return (
    <div className={css.formContainer}>
      {notifyBox}
      <div className={css.title}>
        Claim your restaurant in 24hrs by uploading documents
      </div>
      <div className={css.subtitle}>
        Upload a document of proof such as a certificate of registration or an
        equivalent document
      </div>
      <div className={css.imageInputContainer}>
        <img src={AddImageIcon} alt="" className={css.inputImageIcon} />
        <FileUpload onFileSelect={handleFileSelect} />
      </div>
      {/* list the uploaded document */}
      {uploadedFiles.length > 0 && (
        <div className={css.uploadedFilesContainer}>
          {uploadedFiles.map((file, index) => (
            <div key={index} className={css.uploadedFile}>
              {file.name}
            </div>
          ))}
        </div>
      )}

      <div className={styles.emailInputContainer}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
          placeholder="Enter your registered email"
          required
        />
        <BlueBtn text="Send OTP" handleClick={handleEmailClick} />
      </div>

      {optSend && optSend === "email" && (
        <OTPBox onCompleteOTP={handleOTPComplete} />
      )}

      <PhoneNoInput
        setCountryCode={handleCountryCode}
        onPhoneNumberChange={handlePhoneNumberChange}
        handleSendOTP={handleSendOTP}
        phoneNumber={phoneContact.phoneNumber}
      />

      {optSend && optSend === "phoneNumber" && (
        <OTPBox onCompleteOTP={handleOTPComplete} />
      )}

      <input
        type="text"
        placeholder="Registered business name"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        className={css.businessNameInput}
      />

      <div className={css.checkboxContainer}>
        <div className={css.row1}>
          Please Confirm that you're authorized to manage the business
        </div>
        <div className={css.row2}>
          <input
            type="checkbox"
            id="authorization"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="authorization">
            Yes, I am the owner/manager of this business
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShopCredentialVerification;
