import React, { useState } from "react";
import { FcAddImage } from "react-icons/fc";

const Step3 = ({ formData, handleChange, handleFileUpload }) => {
  const [businessType, setBusinessType] = useState("");

  const formGroupStyle = {
    marginBottom: "16px",
  };

  const labelStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: "8px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const radioGroupStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    marginBottom: "16px",
  };

  const radioLabelStyle = {
    fontSize: "14px",
    color: "black",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const errorStyle = {
    color: "#E74C3C",
    fontSize: "12px",
    marginTop: "4px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const fileUploadWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
  };

  const fileInstructionsStyle = {
    fontSize: "12px",
    color: "#95A5A6",
    marginTop: "5px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const selectInputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #BDC3C7",
    borderRadius: "5px",
    marginBottom: "16px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const textareaInputStyle = {
    width: "100%",
    height: "120px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #BDC3C7",
    borderRadius: "5px",
    resize: "vertical",
    marginBottom: "16px",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  };

  const fileInputRef = React.useRef(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const isCompleted = (field) => formData[field] || businessType;

  return (
    <div>
      {/* Business Type Selection */}
      <div style={formGroupStyle}>
        <label style={labelStyle}>What type of business do you own? *</label>
        <div style={radioGroupStyle}>
          <label
            style={{
              ...radioLabelStyle,
              color: isCompleted("businessType") ? "blue" : "#34495E",
            }}
          >
            <input
              type="radio"
              name="businessType"
              value="Restaurant"
              checked={businessType === "Restaurant"}
              onChange={(e) => setBusinessType(e.target.value)}
            />
            Restaurant
          </label>
          <label
            style={{
              ...radioLabelStyle,
              color: isCompleted("businessType") ? "blue" : "#34495E",
            }}
          >
            <input
              type="radio"
              name="businessType"
              value="Kitchen"
              checked={businessType === "Kitchen"}
              onChange={(e) => setBusinessType(e.target.value)}
            />
            Kitchen
          </label>
          <label
            style={{
              ...radioLabelStyle,
              color: isCompleted("businessType") ? "blue" : "#34495E",
            }}
          >
            <input
              type="radio"
              name="businessType"
              value="Restaurant"
              checked={businessType === "Restaurant"}
              onChange={(e) => setBusinessType(e.target.value)}
            />
            Live Event
          </label>
        </div>
        {!businessType && <span style={errorStyle}>Please select a business type.</span>}
      </div>

      {/* Form Content */}
      {businessType && (
        <>
          {businessType === "Restaurant" && (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="businessRegistration">
                  Upload Business Registration Certificate
                </label>
                <div style={fileUploadWrapperStyle}>
                  <input
                    type="file"
                    id="businessRegistration"
                    name="businessRegistrationFile"
                    onChange={handleFileUpload}
                    accept="image/jpeg, image/png, application/pdf"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  <FcAddImage
                    className="h-20 w-20 text-blue-500"
                    onClick={handleIconClick}
                  />
                  <p style={fileInstructionsStyle}>
                    Supported format: JPG, PNG, PDF.
                  </p>
                </div>
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="hygieneCertificate">
                  Upload Hygiene Certificate
                </label>
                <div style={fileUploadWrapperStyle}>
                  <input
                    type="file"
                    id="hygieneCertificate"
                    name="hygieneCertificateFile"
                    onChange={handleFileUpload}
                    accept="image/jpeg, image/png, application/pdf"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  <FcAddImage
                    className="h-20 w-20 text-blue-500"
                    onClick={handleIconClick}
                  />
                  <p style={fileInstructionsStyle}>
                    Supported format: JPG, PNG, PDF.
                  </p>
                </div>
              </div>
            </>
          )}

          {businessType === "Kitchen" && (
            <>
              <div style={formGroupStyle}>
                <label style={labelStyle}>Do you have a registered commercial kitchen? *</label>
                <div style={radioGroupStyle}>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="commercialKitchen"
                      value="Yes"
                      checked={formData.commercialKitchen === "Yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="commercialKitchen"
                      value="No"
                      checked={formData.commercialKitchen === "No"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="commercialKitchen"
                      value="In the process of getting one"
                      checked={formData.commercialKitchen === "In the process of getting one"}
                      onChange={handleChange}
                    />
                    In the process of getting one
                  </label>
                </div>
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle}>Do you have a Food Handler Certificate? *</label>
                <div style={radioGroupStyle}>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="foodHandlerCertificate"
                      value="Yes"
                      checked={formData.foodHandlerCertificate === "Yes"}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label style={radioLabelStyle}>
                    <input
                      type="radio"
                      name="foodHandlerCertificate"
                      value="No"
                      checked={formData.foodHandlerCertificate === "No"}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>

              <div style={formGroupStyle}>
                <label style={labelStyle} htmlFor="fileUpload">
                  Upload Food Handler Certificate
                </label>
                <div style={fileUploadWrapperStyle}>
                  <input
                    type="file"
                    id="fileUpload"
                    name="foodHandlerCertificateFile"
                    onChange={handleFileUpload}
                    accept="image/jpeg, image/png, application/pdf"
                    style={{ display: "none" }}
                    ref={fileInputRef}
                  />
                  <FcAddImage
                    className="h-20 w-20 text-blue-500"
                    onClick={handleIconClick}
                  />
                  <p style={fileInstructionsStyle}>
                    Supported format: JPG, PNG, PDF.
                  </p>
                </div>
              </div>
            </>
          )}

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="city">
              Which city do you operate from? *
            </label>
            <select
              id="city"
              name="operatingCity"
              value={formData.operatingCity}
              onChange={handleChange}
              required
              style={{
                ...selectInputStyle,
                borderColor: isCompleted("operatingCity") ? "blue" : "#BDC3C7",
              }}
            >
              <option value="">Please select</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle} htmlFor="businessDetails">
              Please tell us more about your business, products *
            </label>
            <textarea
              id="businessDetails"
              name="businessDetails"
              value={formData.businessDetails}
              onChange={handleChange}
              placeholder="Briefly describe your business goals, products, and offerings."
              required
              style={{
                ...textareaInputStyle,
                borderColor: isCompleted("businessDetails") ? "blue" : "#BDC3C7",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Step3;
