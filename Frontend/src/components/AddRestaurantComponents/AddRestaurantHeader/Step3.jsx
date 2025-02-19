import React,{useEffect} from "react";
import { FcAddImage } from "react-icons/fc";

const Step3 = ({ formData, handleChange, handleFileUpload }) => {
  const formGroupStyle = { marginBottom: "16px" };
  
  
  const labelStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#2C3E50",
    marginBottom: "8px",
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
  const handleIconClick = () => fileInputRef.current?.click();

  const documentTypes = [
    "Business Registration Certificate",
    "Hygiene Certificate",
    "Driver's License",
    "Passport",
    "State ID",
    "Military ID",
    "Government ID",
   
  ];
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <div>
      {documentTypes.map((doc, index) => (
        <div key={index} style={formGroupStyle}>
          <label style={labelStyle}>{doc}</label>
          <div style={fileUploadWrapperStyle}>
            <input
              type="file"
              onChange={handleFileUpload}
              accept="image/jpeg, image/png, application/pdf"
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            <FcAddImage className="h-20 w-20 text-blue-500" onClick={handleIconClick} />
            <p style={fileInstructionsStyle}>Supported format: JPG, PNG, PDF.</p>
          </div>
        </div>
      ))}
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
          style={textareaInputStyle}
        />
      </div>
     
    </div>
    
  );
};

export default Step3;
