import React, { useState } from "react";
import css from "./Dining.module.css";

const Dining = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    phoneNumber: "",
    location: "",
    area: "",
    city: "",
    referred: false,
  });

  const [activeStep, setActiveStep] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Your information has been submitted successfully!");
  };

  return (
    <div className={css.diningContainer}>
      <div className={css.contentWrapper}>
        {/* Left Side */}
        <div className={css.registrationCard}>
          <h2>Complete your registration</h2>
          <ul>
            {["Restaurant information", "Menu and operational details", "Restaurant documents", "Partner contract"].map(
              (step, index) => (
                <li
                  key={index}
                  className={activeStep === index ? "active" : ""}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{step}</span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Side */}
        <div className={css.formWrapper}>
          <header className={css.header}>
            <h1>Partner with Zomato</h1>
            <p>Expand your reach with Zomato's delivery and dining services.</p>
          </header>

          <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.formGroup}>
              <label htmlFor="restaurantName">Restaurant Name</label>
              <input
                type="text"
                id="restaurantName"
                name="restaurantName"
                value={formData.restaurantName}
                onChange={handleChange}
                placeholder="Enter your restaurant name"
                required
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="ownerName">Owner's Full Name</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter the owner's name"
                required
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <div className={css.phoneWrapper}>
                <span className={css.countryCode}>+91</span>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className={css.formGroup}>
              <label htmlFor="location">Restaurant Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Search for area or street name"
                required
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="area">Area / Sector / Locality</label>
              <input
                type="text"
                id="area"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter your locality"
                required
              />
            </div>

            <div className={css.formGroup}>
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                required
              />
            </div>

            <div className={css.formGroup}>
              <label>
                <input
                  type="checkbox"
                  name="referred"
                  checked={formData.referred}
                  onChange={handleChange}
                />
                Referred by someone?
              </label>
            </div>

            <button type="submit" className={css.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dining;
