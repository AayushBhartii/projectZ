import React, { useState } from "react";
import { Link } from "react-router-dom";

import AddRestaurantMobileNavbar from "../../Navbars/AddRestaurantMobileNavbar/AddRestaurantMobileNavbar";
import Navbar from "../../Navbars/NavigationBar/NavigationBar";
import RestaurantRegistration from "./RestaurantRegistration";

import css from "./AddRestaurantHeader.module.css";
import banner from "/banners/banner2.jpg";

const AddRestaurantHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleBanner = toggleMenu ? (
    <div className={css.banner}>
      <Navbar setToggleMenu={setToggleMenu} toogleMenu={toggleMenu} page="add-restaurant" />
      <div className={css.bannerInner}>
        <img src={banner} alt="banner" className={css.bannerImg} />
        <div className={css.bannerTxt}>
          <div className={css.title}>Register your restaurant on Zomato</div>
          <div className={css.tag}>for free and get more customers!</div>
          <div className={css.btns}>
            <button
              onClick={() => setShowRegistration(true)}
              className={css.btn}
            >
              Register your restaurant
            </button>
            <Link to="/" className={css.btn}>
              Restaurant already listed? Claim now
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <AddRestaurantMobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toggleMenu} />
  );

  return (
    <>
      {toggleBanner}
      {showRegistration && (
        <RestaurantRegistration onClose={() => setShowRegistration(false)} />
      )}
    </>
  );
};

export default AddRestaurantHeader;
