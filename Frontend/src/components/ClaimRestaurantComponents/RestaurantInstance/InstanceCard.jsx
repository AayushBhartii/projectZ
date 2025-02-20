import React from "react";
import css from "./InstanceCard.module.css";
// import dinningImage from ;

const InstanceCard = () => {
  const obj = {
    restaurantName: "The New Cafe",
    restaurantAddress:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Verocupiditate quo nobis",
    restaurantImage: "/images/diningout.jpg",
  };
  return (
    <div className={css.instanceCard}>
      <img
        src={obj.restaurantImage}
        alt={obj.restaurantName}
        className={css.restaurantImage}
      />

      <div className={css.descriptionBox}>
        <div className={css.restaurantName}>{obj.restaurantName} </div>
        <div className={css.restaurantAddress}>{obj.restaurantAddress}</div>
      </div>
    </div>
  );
};

export default InstanceCard;
