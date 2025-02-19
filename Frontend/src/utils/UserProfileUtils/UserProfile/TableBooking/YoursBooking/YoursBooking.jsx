import { useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./YoursBooking.module.css";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";
import BookingsCard from "../../../../Cards/BookingsCard/BookingsCard";
 // Import modal component

import WhiteButton from "../../../../Buttons/WhiteButton/WhiteButton";
import RedButton from "../../../../Buttons/RedButton/RedButton";
import BookingDetails from "../../../../../pages/BookingDetails/BookingDetails";

const YoursBooking = ({ hashId }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const data = [
    {
      id: 1,
      title: "Paradise",
      address: "Dilshuk Nagar, Hyderabad",
      selectedDate: "12 Feb 2025",
      selectedGuests: "4",
      selectedMeal: "Dinner",
      selectedSlot: "8:00 PM",
      selectedOffer: "20% Off on Drinks",
    },
    {
      id: 2,
      title: "Max Night Club",
      address: "Kharadi, Pune",
      selectedDate: "15 Feb 2025",
      selectedGuests: "2",
      selectedMeal: "Lunch",
      selectedSlot: "1:00 PM",
      selectedOffer: "Free Dessert",
    },
  ];

  const openModal = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  return (
    <div className={css.outerDiv}>
      <div className={css.btns}>
        {/* <RedButton txt="Past" count="0" />
        <WhiteButton txt="Upcoming" count="0" /> */}
      </div>

      {data.length > 0 ? (
        <div className={css.bdy}>
          {data.map((val) => (
            <div
              key={val.id}
              className={css.bookingItem}
              onClick={() => openModal(val)} // Open modal on click
            >
              <BookingsCard title={val.title} address={val.address} />
            </div>
          ))}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}

      {/* Show BookingDetails modal if isModalOpen is true */}
      {isModalOpen && selectedBooking && (
        <div className={css.modalOverlay}>
          <div className={css.modalContent}>
            <BookingDetails {...selectedBooking} goBack={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default YoursBooking;
