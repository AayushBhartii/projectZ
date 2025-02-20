import React from 'react';

export default function Step4({ formData, handleChange }) {
  return (
    <div style={styles.container}>
      {/* <h2 style={styles.heading}>Partner Agreement</h2> */}
      {/* <p style={styles.agreementIntro}>
        By accepting this Agreement electronically, the Partner agrees to be bound by the following terms and conditions.
      </p> */}

      <div style={styles.formSection}>
        <h3 style={styles.sectionHeading}>1. Partner Obligations</h3>
        <p style={styles.sectionText}>
          The Partner agrees to uphold the following responsibilities to maintain service quality and customer satisfaction.
        </p>
        <div style={styles.checkboxGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="foodQualitySafety"
              checked={formData.foodQualitySafety || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I agree to comply with North American food safety regulations (FDA, CFIA, and state/provincial health departments).</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="deliveryTimelines"
              checked={formData.deliveryTimelines || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I agree to adhere to preparation and delivery timelines.</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="pricingOrderFulfillment"
              checked={formData.pricingOrderFulfillment || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I agree to set accurate menu prices and fulfill all confirmed orders.</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="customerService"
              checked={formData.customerService || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I agree to handle customer complaints promptly and use the Platform's dispute resolution system.</span>
          </label>
        </div>
      </div>

      <div style={styles.formSection}>
        <h3 style={styles.sectionHeading}>2. Platform Obligations</h3>
        <p style={styles.sectionText}>
          The Platform provides technical support, payment processing, and marketing services.
        </p>
        <div style={styles.checkboxGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="technicalSupport"
              checked={formData.technicalSupport || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I acknowledge that the Platform will provide technical support for menu management and order processing.</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="paymentProcessing"
              checked={formData.paymentProcessing || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I acknowledge that the Platform will handle payment processing and disbursements.</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="marketingPromotions"
              checked={formData.marketingPromotions || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I acknowledge that the Platform will provide marketing and promotional support.</span>
          </label>
        </div>
      </div>

      <div style={styles.formSection}>
        <h3 style={styles.sectionHeading}>3. Payment Terms</h3>
        <p style={styles.sectionText}>
          The Platform and Partner agree to the following financial structure.
        </p>
        <div style={styles.checkboxGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="commissionStructure"
              checked={formData.commissionStructure || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I agree to the Platform's commission structure for delivery orders, dining reservations, and tiffin services.</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="payoutSchedule"
              checked={formData.payoutSchedule || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I agree to the Platform's payout schedule and refund policies.</span>
          </label>
        </div>
      </div>

      <div style={styles.formSection}>
        <h3 style={styles.sectionHeading}>4. Termination Clauses</h3>
        <p style={styles.sectionText}>
          This Agreement remains valid unless terminated by either party under the specified conditions.
        </p>
        <div style={styles.checkboxGroup}>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="terminationByPartner"
              checked={formData.terminationByPartner || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I understand that I can terminate this Agreement with written notice.</span>
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="terminationByPlatform"
              checked={formData.terminationByPlatform || false}
              onChange={handleChange}
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I understand that the Platform may terminate my account for non-compliance or misconduct.</span>
          </label>
        </div>
      </div>

      <div style={styles.formSection}>
        <h3 style={styles.sectionHeading}>5. Digital Signature & Agreement Acceptance</h3>
        <p style={styles.sectionText}>
          By signing electronically, the Partner agrees to the terms of this contract.
        </p>
        <div style={styles.inputGroup}>
          <label style={styles.inputLabel}>
            Business Name:
            <input
              type="text"
              name="businessName"
              value={formData.businessName || ''}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </label>
          <label style={styles.inputLabel}>
            Business Address:
            <input
              type="text"
              name="businessAddress"
              value={formData.businessAddress || ''}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </label>
          <label style={styles.inputLabel}>
            Authorized Representative:
            <input
              type="text"
              name="authorizedRepresentative"
              value={formData.authorizedRepresentative || ''}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </label>
          <label style={styles.inputLabel}>
            Contact Email:
            <input
              type="email"
              name="contactEmail"
              value={formData.contactEmail || ''}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </label>
          <label style={styles.inputLabel}>
            Contact Phone:
            <input
              type="tel"
              name="contactPhone"
              value={formData.contactPhone || ''}
              onChange={handleChange}
              required
              style={styles.inputField}
            />
          </label>
          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms || false}
              onChange={handleChange}
              required
              style={styles.checkboxInput}
            />
            <span style={styles.checkboxText}>I agree to the terms and conditions of this Partner Agreement.</span>
          </label>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '10px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  agreementIntro: {
    fontSize: '16px',
    marginBottom: '12px',
    textAlign: 'left',
    lineHeight: '1.5',
  },
  formSection: {
    marginBottom: '30px',
  },
  sectionHeading: {
    fontSize: '20px',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  sectionText: {
    fontSize: '14px',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  checkboxGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginTop: '8px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    cursor: 'pointer',
  },
  checkboxInput: {
    margin: '0',
  },
  checkboxText: {
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  inputLabel: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: '600',
    gap: '6px',
  },
  inputField: {
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};
