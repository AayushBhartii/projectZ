import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./RestaurantRegistration.module.css";

const RestaurantRegistration = ({ onClose }) => {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]); // Track selected services as an array

  const handleCardSelect = (serviceType) => {
    // If the service is already selected, remove it from the array
    if (selectedServices.includes(serviceType)) {
      setSelectedServices(selectedServices.filter((service) => service !== serviceType));
    } else {
      // Otherwise, add it to the array
      setSelectedServices([...selectedServices, serviceType]);
    }
  };

  const handleRegisterClick = () => {
    // Navigate based on selected services
    if (selectedServices.includes("both")) {
      navigate("/Dining");
    } else if (selectedServices.includes("delivery")) {
      navigate("/register/delivery");
    } else if (selectedServices.includes("dining")) {
      navigate("/register/dining");
    } else if (selectedServices.includes("tiffin")) {
      navigate("/register/tiffin");
    }
  };

  const services = [
    {
      id: "both",
      title: "Both Food Delivery & Dining",
      description: "List your restaurant on both the delivery and dining sections.",
      imgSrc: "/Project Images/both.avif",
    },
    {
      id: "dining",
      title: "Dining Only",
      description: "List your restaurant in the dining section only.",
      imgSrc: "/Project Images/dining.avif",
    },
    {
      id: "tiffin",
      title: "Tiffin",
      description: "List your Tiffin in the delivery section only.",
      imgSrc: "/Project Images/food.avif",
    },
  ];

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          ×
        </button>
        <h1>Select the service you want to register.</h1>

        <div className={css.serviceContainer}>
          {services.map((service) => (
            <div
              key={service.id}
              className={`${css.serviceOption} ${
                selectedServices.includes(service.id) ? css.selected : ""
              }`}
              onClick={() => handleCardSelect(service.id)}
            >
              <div className={css.textContainer}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
              <img
                src={service.imgSrc}
                alt={service.title}
                className={css.serviceImage}
              />
            </div>
          ))}
        </div>

        <button
          className={css.btn}
          onClick={handleRegisterClick}
          disabled={selectedServices.length === 0} // Disable button if no services are selected
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantRegistration;