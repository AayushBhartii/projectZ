import React, { useState } from "react";
import Popup from "./Form_Popup";
import styles from "./OrderOnlineFieldComponent.module.css";


const planOptions = [
  { value: "trial", label: "Trial (1 Day)" },
  { value: "week5", label: "5 Days a Week" },
  { value: "week6", label: "6 Days a Week" },
  { value: "month", label: "Month Plan (Monday to Friday)" },
];

const images = [
  { src: "https://tiffinstash.com/cdn/shop/files/TPVEG_7372805c-5752-44d3-8823-0da5442fb3be_1024x1024@2x.png?v=1735521866" },
  { src: "https://tiffinstash.com/cdn/shop/files/FoodEXPremiumVegTiffinService_dc8c57af-1b52-4e76-ac5e-4e87facb8c0b_1024x1024@2x.png?v=1708080733" },
]

const mealTypeOptions = [
  { value: 'basicCombo', label: 'Basic Combo' },
  { value: 'basicPlusCombo', label: 'Basic Plus Combo' },
  { value: 'regularCombo', label: 'Regular Combo' },
  { value: 'premiumCombo', label: 'Premium Combo' },
  { value: 'premiumRiceCombo', label: 'Premium Rice Combo' },
  { value: 'premiumPlusCombo', label: 'Premium Plus Combo' },
  { value: 'deluxeCombo', label: 'Deluxe Combo' },
  { value: 'onlyCurries', label: 'Only Curries 1 Combo' },
];

const mealDetails = {
  basicCombo: {
    description: "Basic Combo: • 4 Roti • 1 Veg (12 Oz)/ • 3 Roti • 1 Non-Veg (12 Oz)",
    price: {
      trial: 100,
      week5: 425,
      week6: 500,
      month: 2000,
    },
  },
  basicPlusCombo: {
    description: "Basic Plus Combo: • 4 Roti • 1 Veg (12 Oz)/Non-Veg (12 Oz)",
    price: {
      trial: 120,
      week5: 480,
      week6: 560,
      month: 2200,
    },
  },
  regularCombo: {
    description: "Regular Combo: • 4 Roti • 1 Veg (12 Oz)/Non-Veg (12 Oz) • 1 Curry (12 Oz)",
    price: {
      trial: 150,
      week5: 637.5,
      week6: 750,
      month: 3000,
    },
  },
  premiumCombo: {
    description: "Premium Combo: • 6 Roti • 1 Veg (12 Oz)/Non-Veg (12 Oz) • 1 Curry (12 Oz)",
    price: {
      trial: 180,
      week5: 720,
      week6: 840,
      month: 3600,
    },
  },
  premiumRiceCombo: {
    description: "Premium Rice Combo: • 3 Roti • 1 Veg (12 Oz)/Non-Veg (12 Oz) • 1 Curry (12 Oz) • 1 Rice (12 Oz)",
    price: {
      trial: 200,
      week5: 875,
      week6: 1050,
      month: 4200,
    },
  },
  premiumPlusCombo: {
    description: "Premium Plus Combo: • 4 Roti • 1 Veg (12 Oz)/Non-Veg (12 Oz) • 1 Curry (12 Oz) • 1 Rice (12 Oz)",
    price: {
      trial: 220,
      week5: 1000,
      week6: 1200,
      month: 4800,
    },
  },
  deluxeCombo: {
    description: "Deluxe Combo: • 6 Roti • 1 Veg (12 Oz)/Non-Veg (12 Oz) • 1 Curry (12 Oz) • 1 Rice (12 Oz)",
    price: {
      trial: 250,
      week5: 1125,
      week6: 1350,
      month: 5400,
    },
  },
  onlyCurries: {
    description: "Only Curries 1 Combo: • 1 Veg (12 Oz)/Non-Veg (12 Oz) • 1 Curry (12 Oz)",
    price: {
      trial: 80,
      week5: 375,
      week6: 450,
      month: 1800,
    },
  },
};

function generateAdminNoteJSX(noteDetails) {
  const {
    cutOffTime,
    deliveryTime,
    flexiPlanDetails,
    deliveryBufferTime,
    extraItemPolicy,
    refundPolicy,
  } = noteDetails;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px", paddingTop: "5px" }}>

      <div className={styles.flex3}>
        <span style={{ fontSize: "14px" }} className={styles.mealTypecolor}>
          <strong>1. Order Cut-off Time:</strong>
        </span>
        <span style={{ fontSize: "12px" }}>
          Place orders before <strong>{cutOffTime}</strong> on the previous day.
        </span>
      </div>
      <div className={styles.flex3}>
        <span style={{ fontSize: "14px" }} className={styles.mealTypecolor}>
          <strong>2. Flexi Plans:</strong>
        </span>
        <span style={{ fontSize: "12px" }}>{flexiPlanDetails}</span>
      </div>
      <div className={styles.flex3}>
        <span style={{ fontSize: "14px" }} className={styles.mealTypecolor}>
          <strong>3. Delivery Timings:</strong>
        </span>
        <span style={{ fontSize: "12px" }}>
          Delivery may be affected by ±<strong>{deliveryBufferTime} minutes</strong> due to traffic, road closures, or weather conditions.
        </span>
      </div>
      <div className={styles.flex3}>
        <span style={{ fontSize: "14px" }} className={styles.mealTypecolor}>
          <strong>4. Extra Items:</strong>
        </span>
        <span style={{ fontSize: "12px" }}>{extraItemPolicy}</span>
      </div>
      <div className={styles.flex3}>
        <span style={{ fontSize: "14px" }} className={styles.mealTypecolor}>
          <strong>5. Refund Policy:</strong>
        </span>
        <span style={{ fontSize: "12px" }}>{refundPolicy}</span>
      </div>
      <div className={styles.flex3}>
        <span style={{ fontSize: "14px" }} className={styles.mealTypecolor}>
          <strong>6. Delivery Time:</strong>
        </span>
        <span style={{ fontSize: "12px" }}>
          <strong>{deliveryTime}</strong>
        </span>
      </div>
    </div>

  );
}

const noteDetails = {
  cutOffTime: "9:00 PM",
  deliveryTime: "9:00 AM to 3:00 PM",
  flexiPlanDetails: "For changes in current orders, skipping a delivery, pausing a plan, or canceling a plan, inform us before the cut-off time.",
  deliveryBufferTime: 45,
  extraItemPolicy: "Extra items can only be ordered with a meal plan and from the same seller.",
  refundPolicy: "A cancellation fee of $5 applies to trial orders and $10 applies to all other orders.",
};

const adminNoteJSX = generateAdminNoteJSX(noteDetails);


const formatDate = (date) => {
  if (!date) return "Invalid Date";
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

function TiffinServiceComponet() {
  const [plan, setPlan] = useState("trial");
  const [mealType, setMealType] = useState("basicCombo");
  const [startDate, setStartDate] = useState(new Date());
  const [ShowForm, setShowForm] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [MainImage, setMainImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const calculateEndDate = () => {
    if (!startDate) return undefined;

    const endDate = new Date(startDate);

    switch (plan) {
      case "trial":
        return endDate;


      case "week5":
        // 5 days a week for 1 week
        endDate.setDate(endDate.getDate() + (5 * 7) / 7);
        break;

      case "week6":
        // 6 days a week for 1 week
        endDate.setDate(endDate.getDate() + (6 * 7) / 7);
        break;

      case "month":
        // Entire month plan
        endDate.setMonth(endDate.getMonth() + 1);
        break;

      default:
        break;
    }

    return endDate;
  };

  const handleForm = () => {
    setShowForm(!ShowForm)
  }

  const calculatePrice = () => mealDetails[mealType].price[plan] * (quantity);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handlesetMainImage = (img) => setMainImage(img)

  const handleImageClick = (src) => {
    setSelectedImage(src); // Set the clicked image as the selected image
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal by clearing the selected image
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imageflex}>
          <img
            src={MainImage || `https://tiffinstash.com/cdn/shop/files/FoodEXPremiumVegTiffinService_dc8c57af-1b52-4e76-ac5e-4e87facb8c0b_1024x1024@2x.png?v=1708080733`}
            alt="Tiffin Service"
            className={styles.image}
            onClick={() => handleImageClick(MainImage)}
          />
          <div className={styles.galaryimgflex}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`Image${index + 1}`}
                className={styles.galaryimg}
                onClick={() => handlesetMainImage(img.src)}
              />
            ))}
          </div>
          {selectedImage && (
            <div className={styles.modal} onClick={closeModal}>
              <img src={selectedImage} alt="Selected" className={styles.modalImage} />
            </div>
          )}
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>Krupa Mess & Tiffins</h2>
          <div className={styles.totalPrice}>
            <span className={styles.redcolor}>${calculatePrice()}</span>
          </div>
          <div className={styles.groupDetails}>
            <div className={styles.selectGroup}>
              <label className={styles.label}>Select Plan <span className={styles.redcolor}>*</span></label>
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className={styles.select}
              >
                {planOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.selectGroup}>
              <label className={styles.label}>Meal Type <span className={styles.redcolor}>*</span></label>
              <select
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
                className={styles.select}
              >
                {mealTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.dateGroup}>
            <div>
              <label className={styles.label}>Start Date <span className={styles.redcolor}>*</span></label>
              <input
                type="date"
                value={startDate.toISOString().split("T")[0]}
                onChange={(e) => setStartDate(new Date(e.target.value))}
                className={styles.dateInput}
              />
            </div>
            <div>
              <label className={styles.label}>End Date:</label>
              <div className={styles.dateDisplay}>
                {formatDate(calculateEndDate())}
              </div>
            </div>
          </div>

          <div className={styles.mealDetails}>
            <label className={styles.label}>Meal Details:</label>
            <div className={styles.dateDisplay}>
              {mealDetails[mealType]?.description || "No meal details available"}
            </div>
          </div>
          <div className={styles.termsflex}>
            <span style={{ color: "#ef4354", }}>Terms & Conditions*</span>
            <div style={{ display: "flex", gap: "4px" }}>
              <input
                type="radio"
                name="Terms&Conditions"
                required
              />
              <span style={{ fontSize: "14px" }}>I agree</span>
            </div>

          </div>
          <div className={styles.flex}>
            <div className={styles.quantityContainer}>
              <button
                onClick={handleDecrement}
                className={`${styles.buttons} ${styles.decrementButton}`}
              >
                -
              </button>
              <span className={styles.quantityDisplay}>{quantity}</span>
              <button
                onClick={handleIncrement}
                className={`${styles.buttons} ${styles.incrementButton}`}
              >
                +
              </button>
            </div>
            <button onClick={handleForm} className={styles.button}>
              Book Tiffin
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mealDetails}>
        <h2 style={{}}>Our Menu</h2>
        {Object.entries(mealDetails).map(([mealType, mealInfo]) => (
          <div key={mealType} className={styles.flex2}>
            <strong className={styles.mealTypecolor}>{mealType.charAt(0).toUpperCase() + mealType.slice(1).replace(/([A-Z])/g, ' $1').trim()}:</strong>
            <p style={{ fontSize: "14px" }}>{mealInfo.description}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <span>Please read Offer & Terms:</span>
        <div>{adminNoteJSX}</div>
      </div>
      {ShowForm && <Popup onClose={handleForm} />}
    </div>
  );
}

export default TiffinServiceComponet;

