<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./OrderOnlineFieldComponent.module.css";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../../../../../helpers/CheckoutProvider";
import CalendarComponent from "./CalenderComponet";

function TiffinServiceComponent() {
  const { id } = useParams();
  const [tiffinData, setTiffinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [MainImage, setMainImage] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isCustomePlan, setisCustomePlan] = useState(false);
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [validationError, setValidationError] = useState("");

  const navigate = useNavigate();

  const {
    plan,
    setPlan,
    selectedPlan,
    setselectedPlan,
    selecetedMealType,
    setselecetedMealType,
    mealType,
    setMealType,
    planType,
    setPlanType,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    quantity,
    setQuantity,
    totalPrice,
    setTotalPrice,
    selectedDates,
    setSelectedDates,
    Taxes,
    setTaxes,
    Charges,
    setCharges,
    Offers,
    setOffers,
    TiffinName,
    setTiffinName,
    setAddress,
    Address
  } = useCheckout();

  const validateBooking = () => {
    if (planType === 'flexi-dates' && (!selectedDates || selectedDates.length === 0)) {
      setValidationError("Please select delivery dates for your flexi-dates plan");
      return false;
    }

    if (!policyAccepted) {
      setValidationError("Please accept our terms and policies to continue");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleBookTiffin = () => {
    if (validateBooking()) {
      navigate("/checkout");
    }
  };


  useEffect(() => {
    const fetchTiffinData = async () => {
      try {
        if (!id) {
          throw new Error('Tiffin ID is required');
        }

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/get-tiffin/${id}`);

        if (!response.data.tiffin) {
          throw new Error('Tiffin data not found in response');
        }

        setTiffinData(response.data.tiffin);

        if (response.data.tiffin.menu?.plans?.length > 0) {
          let allPlans = [...response.data.tiffin.menu.plans];

          // Add flexible date plans if isFlexibleDates is true
          if (response.data.tiffin.menu.isFlexibleDates) {
            allPlans.push(
              { _id: 'date-range', label: 'Custom Date Range' },
              { _id: 'flexi-dates', label: 'Flexible Dates' }
            );
            setisCustomePlan(true);
          }

          setPlan(allPlans);
          setselectedPlan(allPlans[0].label);
        }

        if (response.data.tiffin.menu?.mealTypes?.length > 0) {
          setMealType(response.data.tiffin.menu.mealTypes);
          setselecetedMealType(response.data.tiffin.menu.mealTypes[0].mealTypeId);
        }

        if (response.data.tiffin.images?.length > 0) {
          setMainImage(response.data.tiffin.images[0]);
        }

        if (response.data.tiffin.tax?.length > 0) {
          setTaxes(response.data.tiffin.tax.filter(tax => tax.isApplicable));
          // console.log("Taxes:", response.data.tiffin.tax.filter(tax=> tax.isApplicable));
        }

        if (response.data.tiffin.charges?.length > 0) {
          setCharges(response.data.tiffin.charges.filter(charge => charge.isApplicable));
          // console.log("Charges:", response.data.tiffin.charges.filter(charge=> charge.isApplicable));
        }

        if (response.data.tiffin.offers?.length > 0) {
          setOffers(response.data.tiffin.offers.filter(offer => offer.active));
          // console.log("Offers:", response.data.tiffin.offers.filter(offer => offer.active));
        }

        if (response.data.tiffin.kitchenName) {
          setTiffinName(response.data.tiffin.kitchenName);
        }

        if (response.data.tiffin.address) {
          setAddress(response.data.tiffin.address);
        }
      } catch (err) {
        console.error("Error fetching tiffin data:", err);
        setError(err.message || 'Error fetching tiffin data');
      } finally {
        setLoading(false);
      }
    };

    fetchTiffinData();
  }, [id]);

  if (!selectedDates) return setError("Please selecte dates for flexi-dates plan");


  const handlePlanChange = (e) => {
    const newPlan = e.target.value;
    setselectedPlan(newPlan);

    if (newPlan === 'Custom Date Range') {
      setPlanType('date-range');
      setEndDate(new Date());
      setShowCalendar(false);
    } else if (newPlan === 'Flexible Dates') {
      setPlanType('flexi-dates');
      setSelectedDates([]);
      setShowCalendar(true);
    } else {
      setPlanType('normal');
      setEndDate(null);
      setSelectedDates([]);
      setShowCalendar(false);
    }
  };

  const calculateEndDate = () => {
    if (planType === 'date-range') {
      return endDate;
    }

    if (planType === 'flexi-dates') {
      return selectedDates.length > 0 ? selectedDates[selectedDates.length - 1] : undefined;
    }

    if (!startDate || !selectedPlan) return undefined;

    const endDate = new Date(startDate);
    const days = parseInt(selectedPlan);
    if (!isNaN(days)) {
      endDate.setDate(endDate.getDate() + days);
    }
    return endDate;
  };


  const calculatePrice = () => {
    if (!tiffinData || !selectedPlan || !selecetedMealType) return;

    const selectedMealTypeObj = tiffinData.menu.mealTypes.find(
      (meal) => meal.mealTypeId === selecetedMealType
    );

    if (!selectedMealTypeObj || !selectedMealTypeObj.prices) return;

    let basePrice = 0;

    if (planType === 'normal') {
      const PlanPrice = tiffinData.menu.plans.find((plan) =>
        plan.label === selectedPlan
      );
      basePrice = selectedMealTypeObj.prices[PlanPrice._id];
    } else if (planType === 'date-range' && endDate) {
      const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      basePrice = selectedMealTypeObj.prices[tiffinData.menu.plans[0]._id] * days;
    } else if (planType === 'flexi-dates') {
      const days = selectedDates.length;
      basePrice = selectedMealTypeObj.prices[tiffinData.menu.plans[0]._id] * days;
    }

    setTotalPrice(basePrice * quantity);
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedPlan, selecetedMealType, quantity, tiffinData, endDate, selectedDates]);

  console.log(selectedPlan)

  useEffect(() => {
    if (!tiffinData || !selectedPlan || !selecetedMealType) return;
    let filteredMealTypes;
    if (selectedPlan === "Custom Date Range" || selectedPlan === "Flexible Dates") {
      filteredMealTypes = tiffinData.menu.mealTypes.map(mealType =>
        mealType)
      // console.log("Mealtype is:", filteredMealTypes)
    } else {
      filteredMealTypes = tiffinData.menu.mealTypes.filter(mealType =>
        mealType.specificPlans.includes(selectedPlan)
      );
    }
    const selectedMealTypeObj = tiffinData.menu.mealTypes.find(meal =>
      meal.mealTypeId === selecetedMealType
    );

    if (!selectedMealTypeObj) return;

    const specificPlanIds = selectedMealTypeObj.specificPlans;

    const filteredPlans = tiffinData.menu.plans.filter(plan =>
      specificPlanIds.includes(plan.label)
    );

    if (isCustomePlan) {
      filteredPlans.push(
        { _id: 'date-range', label: 'Custom Date Range' },
        { _id: 'flexi-dates', label: 'Flexible Dates' }
      )
    }

    if (filteredPlans.length > 0) {
      setPlan(filteredPlans);
    }

    if (filteredMealTypes.length > 0) {
      setMealType(filteredMealTypes);

    }
  }, [selectedPlan, selecetedMealType]);


  const generateAdminNote = () => {
    if (!tiffinData || !tiffinData.menu.instructions) return null;
    return (
      <div className={styles.flex2}>
        {tiffinData.menu.instructions.map((instruction, index) => (
          <div key={index}>
            <span className={styles.mealTypecolor}>
              <strong>{index + 1}. {instruction.title}:</strong>
            </span>
            <span style={{ fontSize: "12px" }}>{instruction.details}</span>
          </div>
        ))}
      </div>
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!tiffinData) return <div>No tiffin data found</div>;
>>>>>>> master

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.imageflex}>
          <img
<<<<<<< HEAD
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
=======
            src={MainImage || tiffinData.images[0] || 'https://tiffinstash.com/cdn/shop/files/TPVEG_7372805c-5752-44d3-8823-0da5442fb3be_1024x1024@2x.png?v=1735521866'}
            alt="Tiffin Service"
            className={styles.image}
            onClick={() => setSelectedImage(MainImage || tiffinData.images[0])}
          />
          <div className={styles.galaryimgflex}>
            {/* {tiffinData.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Tiffin Image ${index + 1}`}
                className={styles.galaryimg}
                onClick={() => setMainImage(img)}
              />
            ))} */}
            <img
              src={MainImage || tiffinData.images[0] || 'https://tiffinstash.com/cdn/shop/files/TPVEG_7372805c-5752-44d3-8823-0da5442fb3be_1024x1024@2x.png?v=1735521866'}
              alt="Tiffin Service"
              className={styles.galaryimg}
              onClick={() => setMainImage('https://tiffinstash.com/cdn/shop/files/TPVEG_7372805c-5752-44d3-8823-0da5442fb3be_1024x1024@2x.png?v=1735521866')}
            />
            <img
              src={MainImage || tiffinData.images[0] || 'https://tiffinstash.com/cdn/shop/files/SooperNon-VegPunjabiTiffinService_720x.png?v=1706013107'}
              alt="Tiffin Service"
              className={styles.galaryimg}
              onClick={() => setMainImage("https://tiffinstash.com/cdn/shop/files/SooperNon-VegPunjabiTiffinService_720x.png?v=1706013107")}
            />
          </div>
          {selectedImage && (
            <div className={styles.modal} onClick={() => setSelectedImage(null)}>
>>>>>>> master
              <img src={selectedImage} alt="Selected" className={styles.modalImage} />
            </div>
          )}
        </div>
<<<<<<< HEAD
        <div className={styles.details}>
          <h2 className={styles.title}>Krupa Mess & Tiffins</h2>
          <div className={styles.totalPrice}>
            <span className={styles.redcolor}>${calculatePrice()}</span>
          </div>
=======

        <div className={styles.details}>
          <h2 className={styles.title}>{tiffinData.kitchenName}</h2>
          <div className={styles.totalPrice}>
            <span className={styles.redcolor}>${totalPrice}</span>
          </div>

>>>>>>> master
          <div className={styles.groupDetails}>
            <div className={styles.selectGroup}>
              <label className={styles.label}>Select Plan <span className={styles.redcolor}>*</span></label>
              <select
<<<<<<< HEAD
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className={styles.select}
              >
                {planOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
=======
                value={selectedPlan}
                onChange={handlePlanChange}
                className={styles.select}
              >
                {plan.map((planOption) => (
                  <option key={planOption._id} value={planOption.label}>
                    {planOption.label} {planOption.label !== 'Custom Date Range' && planOption.label !== 'Flexible Dates' ? 'Day Plan' : ''}
>>>>>>> master
                  </option>
                ))}
              </select>
            </div>
<<<<<<< HEAD
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
=======

            <div className={styles.selectGroup}>
              <label className={styles.label}>Meal Type <span className={styles.redcolor}>*</span></label>
              <select
                value={selecetedMealType}
                onChange={(e) => setselecetedMealType(e.target.value)}
                className={styles.select}
              >
                {mealType.map((type) => (
                  <option key={type.mealTypeId} value={type.mealTypeId}>
                    {type.label}
>>>>>>> master
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.dateGroup}>
<<<<<<< HEAD
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

=======
            {planType === 'normal' && (
              <>
                <div>
                  <label className={styles.label}>Start Date <span className={styles.redcolor}>*</span></label>
                  <input
                    type="date"
                    value={startDate.toISOString().split("T")[0]}
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                    className={styles.dateInput}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className={styles.label}>End Date:</label>
                  <div className={styles.dateDisplay}>
                    {calculateEndDate()?.toLocaleDateString() || "Select a plan"}
                  </div>
                </div>
              </>
            )}

            {planType === 'date-range' && (
              <>
                <div>
                  <label className={styles.label}>Start Date <span className={styles.redcolor}>*</span></label>
                  <input
                    type="date"
                    value={startDate.toISOString().split("T")[0]}
                    onChange={(e) => setStartDate(new Date(e.target.value))}
                    className={styles.dateInput}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className={styles.label}>End Date <span className={styles.redcolor}>*</span></label>
                  <input
                    type="date"
                    value={endDate?.toISOString().split("T")[0] || ''}
                    onChange={(e) => setEndDate(new Date(e.target.value))}
                    className={styles.dateInput}
                    min={startDate.toISOString().split("T")[0]}
                  />
                </div>
              </>
            )}

            {planType === 'flexi-dates' && showCalendar && (
              <div className={styles.flexiDates}>
                <label className={styles.label}>Select Delivery Dates <span className={styles.redcolor}>*</span></label>
                <CalendarComponent selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
              </div>
            )}
          </div>
          <div className={styles.mealDetails1}>
            <label className={styles.label}>Meal Details:</label>
            <div className={styles.dateDisplay}>
              {tiffinData.menu.mealTypes.find(mt => mt.mealTypeId === selecetedMealType)?.description || "Select a meal type"}
            </div>
          </div>
          <div className={styles.policyContainer}>
            <label className={styles.policyLabel}>
              <input
                type="checkbox"
                checked={policyAccepted}
                onChange={(e) => setPolicyAccepted(e.target.checked)}
                className={styles.policyCheckbox}
              />
              I accept the terms and policies
            </label>
>>>>>>> master
          </div>
          <div className={styles.flex}>
            <div className={styles.quantityContainer}>
              <button
<<<<<<< HEAD
                onClick={handleDecrement}
=======
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
>>>>>>> master
                className={`${styles.buttons} ${styles.decrementButton}`}
              >
                -
              </button>
              <span className={styles.quantityDisplay}>{quantity}</span>
              <button
<<<<<<< HEAD
                onClick={handleIncrement}
=======
                onClick={() => setQuantity(prev => prev + 1)}
>>>>>>> master
                className={`${styles.buttons} ${styles.incrementButton}`}
              >
                +
              </button>
            </div>
<<<<<<< HEAD
            <button onClick={handleForm} className={styles.button}>
=======


            {/* Display validation error if any */}
            {validationError && (
              <div className={styles.errorMessage}>
                {validationError}
              </div>
            )}

            <button
              onClick={handleBookTiffin}
              className={`${styles.button} ${(!policyAccepted || (planType === 'flexi-dates' && selectedDates.length === 0)) ? styles.buttonDisabled : ''}`}
              disabled={!policyAccepted || (planType === 'flexi-dates' && selectedDates.length === 0)}
            >
>>>>>>> master
              Book Tiffin
            </button>
          </div>
        </div>
      </div>
<<<<<<< HEAD
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
=======

      <h2 className={styles.padding}>Our Menu</h2>
      <div className={styles.mealDetails}>
        {tiffinData.menu.mealTypes.map((mealType) => (
          <div key={mealType.mealTypeId} className={styles.flex2}>
            <div style={{ display: Flex, flexDirection: "row", gap: "5px" }}>
              <strong className={styles.mealTypecolor}>{mealType.label}:</strong>
              <span>(Applicable Plans ({mealType.specificPlans.join(", ")}) days plan)</span>
            </div>
            <p style={{ fontSize: "14px" }}>{mealType.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <span>Please read Offer & Terms:</span>
        {generateAdminNote()}
      </div>
>>>>>>> master
    </div>
  );
}

<<<<<<< HEAD
export default TiffinServiceComponet;

=======
export default TiffinServiceComponent;
>>>>>>> master
