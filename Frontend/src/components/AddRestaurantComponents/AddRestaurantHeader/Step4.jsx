import React, { useEffect, useState } from "react";
import Modal from "react-modal";

// Set the root element for accessibility
Modal.setAppElement("#root");

export default function Step4({ formData, handleChange }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      {/* Terms and Conditions Trigger */}
      <p style={styles.termsText} onClick={() => setModalIsOpen(true)}>
        Read and Accept Terms and Conditions
      </p>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <div style={styles.modalContent}>
          <h2 style={styles.modalTitle}>Terms and Conditions</h2>

          {/* Sectioned Terms */}
          <div style={styles.modalSection}>
            <h3>1. Partner Obligations</h3>
            <p>The Partner agrees to uphold responsibilities to maintain service quality.</p>
          </div>

          <div style={styles.modalSection}>
            <h3>2. Platform Obligations</h3>
            <p>The Platform provides technical support, payment processing, and marketing services.</p>
          </div>

          <div style={styles.modalSection}>
            <h3>3. Payment Terms</h3>
            <p>The Platform and Partner agree to a structured commission and payout schedule.</p>
          </div>

          <div style={styles.modalSection}>
            <h3>4. Termination Clauses</h3>
            <p>This Agreement remains valid unless terminated under specific conditions.</p>
          </div>

          <div style={styles.modalSection}>
            <h3>5. Agreement Acceptance</h3>
            <p>By signing electronically, the Partner agrees to these terms.</p>
          </div>

          {/* Checkbox for Agreement */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "15px" }}>
  {/* Checkbox */}
  <input
    type="checkbox"
    id="agreeCheckbox"
    checked={isChecked}
    onChange={() => setIsChecked(!isChecked)}
    style={{ 
      width: "18px", 
      height: "18px", 
      cursor: "pointer", 
      position: "relative", 
      top: "-3px"  // Adjust alignment slightly
    }}
  />
  
  {/* Label */}
  <label 
    htmlFor="agreeCheckbox" 
    style={{ fontSize: "14px", fontWeight: "bold", color: "#333", cursor: "pointer" }}
  >
    I agree to all Terms and Conditions.
  </label>





  {/* Accept Button */}
  <button
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: isChecked ? "#007bff" : "#ccc",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: isChecked ? "pointer" : "not-allowed",
      marginLeft: "auto", // Push button to the right
    }}
    onClick={() => setModalIsOpen(false)}
    disabled={!isChecked}
  >
    Accept
  </button>
</div>

        </div>
      </Modal>
    </div>
  );
}

/* Styles */
const styles = {
  container: {
    padding: "10px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  termsText: {
    textDecoration: "underline",
    color: "#007bff",
    cursor: "pointer",
    marginBottom: "15px",
    display: "inline-block",
    fontSize: "16px",
    fontWeight: "bold",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: "22px",
    marginBottom: "15px",
    fontWeight: "bold",
    color: "#333",
  },
  modalSection: {
    textAlign: "left",
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    justifyContent: "center",
    marginTop: "15px",
  },
  checkbox: {
    width: "18px",
    height: "18px",
    cursor: "pointer",
  },
  checkboxLabel: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    cursor: "pointer",
  },
  acceptButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#ccc", // Initially disabled
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "not-allowed",
    marginTop: "10px",
  },
};

/* Modal Custom Styles */
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    padding: "0",
    border: "none",
  },
};
