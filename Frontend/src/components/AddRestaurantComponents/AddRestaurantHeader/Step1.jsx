import React from "react";
import css from "./Dining.module.css";

const Step1 = ({ formData, handleChange }) => {
  return (
    <>
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
          <div className={css.flagWrapper}>
            <img
              src={`https://flagcdn.com/w40/${
                formData.countryCode === "+91"
                  ? "in"
                  : formData.countryCode === "+1"
                  ? "us"
                  : formData.countryCode === "+44"
                  ? "gb"
                  : "au"
              }.png`}
              alt="Country Flag"
              className={css.flag}
            />
            <select
              className={css.countrySelect}
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91 (India)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+61">+61 (Australia)</option>
            </select>
          </div>
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

      {/* Updated Checkbox Section */}
      <div className={css.formGroup}>
        <div className={css.checkboxContainer}>
          <input
            type="checkbox"
            id="referred"
            name="referred"
            checked={formData.referred}
            onChange={handleChange}
          />
          <label htmlFor="referred">Referred by someone?</label>
        </div>
      </div>
    </>
  );
};

export default Step1;