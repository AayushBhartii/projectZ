import React from "react";
import { SlCalender } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import styles from "./BookingDetails.module.css";

const BookingDetails = ({ selectedDate, selectedGuests, selectedMeal, selectedSlot, selectedOffer, goBack }) => {
  const handleConfirm = () => {
    alert("🎉 Booking Confirmed! See you at Max Night Club. ✅");
    goBack(); // Close modal after confirmation
  };

  return (
    <div className={styles.bookingDetailsContainer}>
      {/* Title */}
      <h2 className={styles.sectionTitle}>Review booking details</h2>

      {/* Booking Details Card */}
      <div className={styles.bookingCard}>
        <div className={styles.detailRow}>
          <SlCalender className={styles.icon} />
          <span>{selectedDate} at {selectedSlot}</span>
        </div>

        <div className={styles.detailRow}>
          <BsPeople className={styles.icon} />
          <span>{selectedGuests} Guests</span>
        </div>

        <div className={styles.detailRow}>
          <MdLocationOn className={styles.icon} />
          <span>Max Night Club</span>
          <p className={styles.subText}>Kharadi, Pune</p>
        </div>

        {selectedOffer && (
          <div className={`${styles.detailRow} ${styles.offerRow}`}>
            <FaTag className={styles.iconOffer} />
            <span className={styles.offerText}>{selectedOffer}</span>
            <p className={styles.subText}>Pay bill between 9:30 PM - 3:30 AM</p>
          </div>
        )}
      </div>

      {/* Booking Summary */}
      <h2 className={styles.sectionTitle}>Booking summary</h2>
      <div className={styles.bookingSummary}>
        <p className={styles.summaryRow}>
          <span>Cover charge</span>
          <span>₹25</span>
        </p>
        <p className={styles.summaryNote}>This amount will be adjusted in your final bill</p>
        <p className={styles.summaryRow}>
          <span>Sub total</span>
          <span>₹25</span>
        </p>
        <hr className={styles.divider} />
        <p className={`${styles.summaryRow} ${styles.totalRow}`}>
          <strong>To be paid</strong>
          <strong>₹25</strong>
        </p>
      </div>

      {/* Confirm Button */}
      <button className={styles.confirmButton} onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default BookingDetails;
