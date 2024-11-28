import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import css from "./RestaurantRegistration.module.css";

const RestaurantRegistration = ({ onClose }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleRegisterClick = (serviceType) => {
    // Redirect based on the selected service type
    if (serviceType === 'both') {
      navigate('/Dining');
    } else if (serviceType === 'delivery') {
      navigate('/register/delivery');
    } else if (serviceType === 'dining') {
      navigate('/register/dining');
    }
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          ×
        </button>
        <h1>Select the service you want to register.</h1>

        {/* Both Food Delivery & Dining */}
        <div className={css.serviceOption}>
          <div className={css.textContainer}>
            <h2>Both Food Delivery & Dining</h2>
            <p>List your restaurant on both the delivery and dining sections</p>
            <button
              className={css.btn}
              onClick={() => handleRegisterClick('both')}
            >
              Register Now
            </button>
          </div>
          <img
            src="/Project Images/both.avif"
            alt="Both Delivery and Dining"
            className={css.serviceImage}
          />
        </div>

        {/* Food Delivery Only */}
        <div className={css.serviceOption}>
          <div className={css.textContainer}>
            <h2>Food Delivery Only</h2>
            <p>List your restaurant in the delivery section only</p>
            <button
              className={css.btn}
              onClick={() => handleRegisterClick('delivery')}
            >
              Register Now
            </button>
          </div>
          <img
            src="/Project Images/food.avif"
            alt="Delivery Only"
            className={css.serviceImage}
          />
        </div>

        {/* Dining Only */}
        <div className={css.serviceOption}>
          <div className={css.textContainer}>
            <h2>Dining Only</h2>
            <p>List your restaurant in the dining section only</p>
            <button
              className={css.btn}
              onClick={() => handleRegisterClick('dining')}
            >
              Register Now
            </button>
          </div>
          <img
            src="/Project Images/dining.avif"
            alt="Dining Only"
            className={css.serviceImage}
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantRegistration;
