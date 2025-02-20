import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import { MdNoMeals } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./BookaTableComponent.module.css";
import BookingDetails from "../../../../../pages/BookingDetails/BookingDetails";

const BookaTableComponent = () => {
  // State to track if the user is in the booking form or details page
  const [showBookingDetails, setShowBookingDetails] = useState(false);

  // State variables for selections
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState("Today");
  const [selectedGuests, setSelectedGuests] = useState("1 guest");
  const [selectedMeal, setSelectedMeal] = useState("Lunch");
  const [selectedOffer, setSelectedOffer] = useState(null);

  // Dropdown states
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [isMealDropdownOpen, setIsMealDropdownOpen] = useState(false);

  // Slots and offers
  const slots = [
    { time: "2:00 PM", offers: ["10% off", "Free drink"] },
    { time: "2:30 PM", offers: ["15% off", "Free dessert"] },
    { time: "3:00 PM", offers: ["Buy 1 Get 1 Free", "Free appetizer"] },
    { time: "3:30 PM", offers: ["20% off", "Exclusive seating"] },
    { time: "4:00 PM", offers: ["Double loyalty points", "Gift voucher"] },
    { time: "4:30 PM", offers: ["Free smoothie", "Free delivery"] },
    { time: "5:00 PM", offers: ["Happy Hour Drinks", "Discount on premium items"] },
    { time: "5:30 PM", offers: ["30% off", "Free parking voucher"] },
    { time: "6:00 PM", offers: ["Early bird special", "Chef's surprise dessert"] },
    { time: "6:30 PM", offers: ["Free movie ticket with order", "20% cashback"] },
    { time: "7:00 PM", offers: ["Family combo offer", "Complimentary kids' meal"] },
    { time: "7:30 PM", offers: ["Exclusive live entertainment", "Dinner discount"] },
  ];
  

  const dates = ["Today", "Tomorrow", "Day after tomorrow"];
  const guests = ["1 guest", "2 guests", "3 guests", "4 guests"];
  const meals = ["Lunch", "Dinner", "Snacks"];

  // Handle slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot.time);
    setSelectedOffer(null);
  };

  // Handle dropdown selections
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDateDropdownOpen(false);
  };

  const handleGuestChange = (guest) => {
    setSelectedGuests(guest);
    setIsGuestDropdownOpen(false);
  };

  const handleMealChange = (meal) => {
    setSelectedMeal(meal);
    setIsMealDropdownOpen(false);
  };

  // Proceed to Booking Details (instead of navigating)
  const proceedToCart = () => {
    setShowBookingDetails(true);
  };

  // Go back to the booking form
  const goBackToBooking = () => {
    setShowBookingDetails(false);
  };

  return (
    <div className={styles.container}>
      {/* Show Booking Details Page */}
      {showBookingDetails ? (
        <div>
          {/* Back Button */}
          <button className={styles.backButton} onClick={goBackToBooking}>
            <FaArrowLeft className={styles.icon} /> Back to Booking
          </button>

          {/* Render Booking Details Component */}
          <BookingDetails
            selectedDate={selectedDate}
            selectedGuests={selectedGuests}
            selectedSlot={selectedSlot}
            selectedMeal={selectedMeal}
            selectedOffer={selectedOffer}
            goBack={goBackToBooking}
          />
        </div>
      ) : (
        // Show Booking Form Page
        <>
          <h2 className={styles.heading}>Select Your Booking Details</h2>

          {/* Booking Details Grid */}
          <div className={styles.detailsGrid}>
            {/* Date Selection */}
            <div className={styles.dropdown}>
              <button className={styles.dropdownButton} onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}>
                <SlCalender className={styles.icon} />
                <span>{selectedDate}</span>
                <span>▼</span>
              </button>
              {isDateDropdownOpen && (
                <div className={styles.dropdownOptions}>
                  {dates.map((date, index) => (
                    <div key={index} className={styles.dropdownOption} onClick={() => handleDateChange(date)}>
                      {date}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Guests Selection */}
            <div className={styles.dropdown}>
              <button className={styles.dropdownButton} onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}>
                <BsPeople className={styles.icon} />
                <span>{selectedGuests}</span>
                <span>▼</span>
              </button>
              {isGuestDropdownOpen && (
                <div className={styles.dropdownOptions}>
                  {guests.map((guest, index) => (
                    <div key={index} className={styles.dropdownOption} onClick={() => handleGuestChange(guest)}>
                      {guest}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Meal Selection */}
            <div className={styles.dropdown}>
              <button className={styles.dropdownButton} onClick={() => setIsMealDropdownOpen(!isMealDropdownOpen)}>
                <MdNoMeals className={styles.icon} />
                <span>{selectedMeal}</span>
                <span>▼</span>
              </button>
              {isMealDropdownOpen && (
                <div className={styles.dropdownOptions}>
                  {meals.map((meal, index) => (
                    <div key={index} className={styles.dropdownOption} onClick={() => handleMealChange(meal)}>
                      {meal}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Slot Selection */}
          <h3 className={styles.subheading}>Select a Time Slot</h3>
          <div className={styles.slotsGrid}>
            {slots.map((slot, index) => (
              <button
                key={index}
                className={`${styles.slotButton} ${selectedSlot === slot.time ? styles.selectedSlot : ""}`}
                onClick={() => handleSlotSelect(slot)}
              >
                {slot.time}
              </button>
            ))}
          </div>

          {/* Offer Selection */}
          {selectedSlot && (
            <div className={styles.offerCard}>
              <h3>Available Offers for {selectedSlot}</h3>
              <div className={styles.offerCardsContainer}>
                <div
                  className={`${styles.offerCardSingle} ${selectedOffer === null ? styles.selectedOffer : ""}`}
                  onClick={() => setSelectedOffer(null)}
                >
                  <p>No Offer</p>
                </div>

                {slots
                  .find((slot) => slot.time === selectedSlot)
                  ?.offers.map((offer, index) => (
                    <div
                      key={index}
                      className={`${styles.offerCardSingle} ${selectedOffer === offer ? styles.selectedOffer : ""}`}
                      onClick={() => setSelectedOffer(offer)}
                    >
                      <p>{offer}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Proceed Button */}
          <button
            className={`${styles.proceedButton} ${selectedSlot ? styles.proceedEnabled : styles.proceedDisabled}`}
            disabled={!selectedSlot}
            onClick={proceedToCart}
          >
            Proceed to Cart
          </button>
        </>
      )}
    </div>
  );
};

export default BookaTableComponent;
