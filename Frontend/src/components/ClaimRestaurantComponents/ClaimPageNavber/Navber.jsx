import React from "react";
import css from "./Navber.module.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navber = () => {
  const username = "Rohan Mishra";

  const handleClick = () => console.log("I am clicked");

  return (
    <div className={css.navber}>
      <div className={css.textLogo}>
        <Link to={"/"} className={css.textLogoLink}>
          zomato
        </Link>
      </div>
      {/* user mini intro */}
      <div className={css.userOptionBox}>
        <img
          className={css.profilePicture}
          src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className={css.username}>{username}</div>
        <button className={css.moreBtn} onClick={handleClick}>
          <IoMdArrowDropdown />
        </button>
      </div>
    </div>
  );
};

export default Navber;
