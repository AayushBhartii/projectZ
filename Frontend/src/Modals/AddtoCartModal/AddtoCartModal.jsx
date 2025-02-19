import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import css from "./AddToCart.module.css";

const AddToCartModal = ({ data, quantity, onClose, showNotification }) => {
  const { ttl, price: basePrice, originalPrice } = data;
  const [selectedOption, setSelectedOption] = useState("3 Chapati");
  const [addOns, setAddOns] = useState([]);
  const [totalPrice, setTotalPrice] = useState(basePrice * quantity);
  const navigate = useNavigate(); // Initialize navigation

  const addOnOptions = [
    { name: "Roasted Papad", price: 30 },
    { name: "Butter Chapati (1pc)", price: 28 },
    { name: "Chapati (1 Pcs)", price: 24 },
    { name: "Steam Rice (500ml)", price: 110 },
    { name: "Jeera Rice (500ml)", price: 150 },
  ];

  useEffect(() => {
    const addOnTotal = addOns.reduce((sum, addOn) => {
      const item = addOnOptions.find((opt) => opt.name === addOn);
      return item ? sum + item.price : sum;
    }, 0);
    setTotalPrice((basePrice + addOnTotal) * quantity);
  }, [addOns, quantity]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.ttl === ttl);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
      cart[existingItemIndex].totalPrice += totalPrice;
    } else {
      cart.push({ ...data, quantity, selectedOption, addOns, totalPrice });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show notification bar (same page)
    showNotification(ttl);

    // Close the modal
    onClose();
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>✖</button>
        <h2>{ttl}</h2>
        <h3>Customise as per your taste</h3>

        {/* Choice of Breads/Rice */}
        <div className={css.choiceSection}>
          <h4>Choice of Breads / Rice</h4>
          {["3 Chapati", "Jeera Rice"].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="choice"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>

        {/* Add-ons */}
        <div className={css.addOnSection}>
          <h4>Add Ons (optional)</h4>
          {addOnOptions.map((addon) => (
            <label key={addon.name}>
              <input
                type="checkbox"
                checked={addOns.includes(addon.name)}
                onChange={() =>
                  setAddOns((prev) =>
                    prev.includes(addon.name)
                      ? prev.filter((item) => item !== addon.name)
                      : [...prev, addon.name]
                  )
                }
              />
              {addon.name} + ₹{addon.price}
            </label>
          ))}
        </div>

        {/* Price and Quantity */}
        <div className={css.priceSection}>
          <span className={css.originalPrice}>₹{originalPrice * quantity}</span>
          <span className={css.discountedPrice}>₹{totalPrice}</span>
        </div>

        <button className={css.addToCartButton} onClick={handleAddToCart}>
          Add Item to Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCartModal;
