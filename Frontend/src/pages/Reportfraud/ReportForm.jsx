import { useState,useEffect } from "react";
import "./ReportForm.css"

const ReportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reported_against: "",
    city: "",
    message: "",
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="report-form">
      <input
        className="inputBox"
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        className="inputBox"
        type="email"
        name="email"
        placeholder="Your email address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        className="inputBox"
        type="tel"
        name="phone"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        className="inputBox"
        type="text"
        name="reported_against"
        placeholder="Name of the person / organization against whom concern is being reported"
        value={formData.reported_against}
        onChange={handleChange}
        required
      />

      <input
        className="inputBox"
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <div className="para">
      <p> This reporting channel is used to provide an opportunity to report your concerns related to suspected fraud or suspected violation of the Code of Conduct (COC) of Zomato. </p>

      <p>Please note that you should not use this channel to report events / instances other than misconduct related to suspected fraud and suspected violation of COC. For any concern / complaint relating to your order, please reach out to our customer care team using the chat option.</p>

      <p> Zomato expects that reports made through this channel are made in good faith and are legitimate concerns that you believe should be investigated. All reports submitted will be given careful attention </p>
      </div>

      <button type="submit">Submit Report</button>
    </form>
  );
};

export default ReportForm;
