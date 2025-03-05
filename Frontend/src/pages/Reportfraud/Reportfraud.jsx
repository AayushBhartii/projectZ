import React, { useState,useEffect } from "react";
import styles from "./ReportFraud.module.css";
import ReportForm from "./ReportForm";
import Footer from "../../components/Footer/Footer";
// const ReportFraud = () => {
//   const [formData, setFormData] = useState({
//     category: "",
//     description: "",
//     orderId: "",
//     contact: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.category) newErrors.category = "Category is required.";
//     if (!formData.description) newErrors.description = "Description is required.";
//     if (!formData.orderId) newErrors.orderId = "Order ID is required.";
//     if (!formData.contact) newErrors.contact = "Contact information is required.";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length === 0) {
//       setSubmitted(true);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       category: "",
//       description: "",
//       orderId: "",
//       contact: "",
//     });
//     setSubmitted(false);
//     setErrors({});
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Report Fraud</h1>
//       <p className={styles.description}>
//         If you have experienced any fraudulent activity, please provide details below.
//         Your report will help us maintain a safe and trustworthy platform.
//       </p>
//       {submitted ? (
//         <div className={styles.successMessage}>
//           <h2>Thank you for reporting!</h2>
//           <p>We have received your report and will take appropriate action.</p>
//           <button className={styles.resetButton} onClick={handleReset}>
//             Report Another Issue
//           </button>
//         </div>
//       ) : (
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <div className={styles.formGroup}>
//             <label htmlFor="category">Category</label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className={`${styles.input} ${errors.category ? styles.errorBorder : ""}`}
//             >
//               <option value="">Select a category</option>
//               <option value="Order Issue">Order Issue</option>
//               <option value="Vendor Fraud">Vendor Fraud</option>
//               <option value="Payment Fraud">Payment Fraud</option>
//               <option value="Other">Other</option>
//             </select>
//             {errors.category && <p className={styles.error}>{errors.category}</p>}
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="description">Description</label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className={`${styles.textarea} ${errors.description ? styles.errorBorder : ""}`}
//               placeholder="Describe the issue in detail..."
//             ></textarea>
//             {errors.description && <p className={styles.error}>{errors.description}</p>}
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="orderId">Order ID</label>
//             <input
//               type="text"
//               id="orderId"
//               name="orderId"
//               value={formData.orderId}
//               onChange={handleChange}
//               className={`${styles.input} ${errors.orderId ? styles.errorBorder : ""}`}
//               placeholder="Enter Order ID"
//             />
//             {errors.orderId && <p className={styles.error}>{errors.orderId}</p>}
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="contact">Contact Information</label>
//             <input
//               type="text"
//               id="contact"
//               name="contact"
//               value={formData.contact}
//               onChange={handleChange}
//               className={`${styles.input} ${errors.contact ? styles.errorBorder : ""}`}
//               placeholder="Email or Phone"
//             />
//             {errors.contact && <p className={styles.error}>{errors.contact}</p>}
//           </div>
//           <button type="submit" className={styles.submitButton}>
//             Submit Report
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ReportFraud;


const Reportfraud = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      
      <div className={styles.reportHeader}>

          <div className={styles.herotitle}>
            <h2> Zomato </h2>
            <div className={styles.profile}>
                <img src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg" />
                <h2>Profile</h2>
            </div>
          </div>

          {/* report fraud header */}

          <div className={styles.herored}>
            <h2> Report a potential fraud </h2>
          </div>

          <div className={styles.back}>
            <h2>Back to home </h2>
          </div>

          <div className={styles.container}>
            
            {/* left <Content></Content> */}
            <div className={styles.leftContent}>
                
              <ReportForm />

            </div>

            <div className={styles.rightContent}>

                <div className={styles.disclamer}>
                <h2>Disclaimer</h2>
                <p> Please use this form only for reporting potential frauds. For order or other general queries contact us here. </p>
                </div>
               
            </div>

          </div>

      </div>

      <Footer/>

    </>
  )
}

export default Reportfraud