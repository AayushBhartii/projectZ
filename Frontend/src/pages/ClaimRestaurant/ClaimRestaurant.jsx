import React, { useState } from "react";
import css from "./ClaimRestaurant.module.css";
import Navber from "../../components/ClaimRestaurantComponents/ClaimPageNavber/Navber";
import InstanceCard from "../../components/ClaimRestaurantComponents/RestaurantInstance/InstanceCard";
import PhoneNoVerification from "../../components/ClaimRestaurantComponents/PhoneNoVerification/PhoneNoVerification";
import ShopCredentialVerification from "../../components/ClaimRestaurantComponents/ShopCredentialVerification/ShopCredentialVerification";
import AppendMsgHr from "../../utils/HorizontalRuler/AppendMsgHr";
import PageFooter from "../../components/ClaimRestaurantComponents/ShopCredentialVerification/PageFooter";
import { ToastContainer, toast } from "react-toastify";

const notify = (text = "I am a notification") => {
  toast(text, {
    position: "top-center",
  });
};

const ClaimRestaurant = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = () => {
    if (isVerified === true) {
      console.log("Owner data is submitted");
    } else {
      notify("You need to claim restaurant first");
    }
  };

  const handleVerification = () => {
    console.log("restaurant owner is verified");
    setIsVerified(true);
  };

  return (
    <div>
      <Navber />
      <div className={css.claimRestaurantPage}>
        <h1 className={css.heading}>Claim ownership of your restaurant</h1>
        <InstanceCard />
        <PhoneNoVerification
          handleVerification={handleVerification}
          notify={notify}
          notifyBox={<Notify />}
        />

        <AppendMsgHr text="Or you don'thave the access of above number(s)?" />
        <ShopCredentialVerification
          handleVerification={handleVerification}
          notify={notify}
          notifyBox={<Notify />}
        />
      </div>
      <PageFooter
        handleSubmit={handleSubmit}
        notify={notify}
        notifyBox={<Notify />}
      />
      <Notify />
    </div>
  );
};

export default ClaimRestaurant;

const Notify = () => {
  return (
    <div>
      {/* <button>Notify!</button> */}
      <ToastContainer
        hideProgressBar={true}
        transition:Bounce
        autoClose={3000}
        className={css.notify}
      />
    </div>
  );
};
