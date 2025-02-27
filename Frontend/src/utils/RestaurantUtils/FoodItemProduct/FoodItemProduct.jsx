import { useState } from "react";
import css from "./FoodItemProduct.module.css";
import infoIcon from "/icons/info.png";
import AddToCart from "../../../Modals/AddtoCartModal/AddtoCartModal";

 // Import modal

const FoodItemProduct = (props) => {
  let { imgSrc, ttl, votes, price, originalPrice, desc, dishInfo } = props.data;
  let dataset = props?.dataset;
  const [readMore, setReadMore] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  const handleAdd = () => {
    let cart = getCart();
    const existingItemIndex = cart.findIndex((item) => item.ttl === ttl);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += 1;
    } else {
      cart.push({ imgSrc, ttl, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setQuantity((prev) => prev + 1);
  };

  const handleRemove = () => {
    if (quantity > 1) {
      let cart = getCart();
      const existingItemIndex = cart.findIndex((item) => item.ttl === ttl);

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity -= 1;
        if (cart[existingItemIndex].quantity === 0) {
          cart.splice(existingItemIndex, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      let cart = getCart().filter((item) => item.ttl !== ttl);
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className={css.outerDiv} data-id={dataset} id={props.id}>
      <div className={css.innerDiv}>
        {/* Left Section - Text Details */}
        <div className={css.box}>
          <div className={css.titleContainer}>
            <div className={css.ttl}>{ttl}</div>
            <div className={css.tooltip}>
              <img src={infoIcon} className={css.infoIcon} alt="info" />
              <span className={css.tooltiptext}>{dishInfo}</span>
            </div>
          </div>
          <div className={css.ratings}>
            <span className={css.starRating}>
              ⭐ 4.1 <span className={css.voteCount}>({votes})</span>
            </span>
          </div>
          <div className={css.price}>
            {/* <span className={css.originalPrice}>₹{originalPrice}</span>{" "} */}
            <span className={css.discountedPrice}>₹{price}</span>
          </div>
          <div className={css.desc}>
            {readMore ? desc : desc.substring(0, 100)}
            {!readMore && desc.length > 100 && (
              <span className={css.readMore} onClick={() => setReadMore(true)}>
                ... read more
              </span>
            )}
          </div>
        </div>

        {/* Right Section - Image and Add Button */}
        <div className={css.imgContainer}>
          <img src={imgSrc} className={css.foodImg} alt="food item" />
          {quantity === 0 ? (
            <div className={css.addButton} onClick={handleAdd}>
              <span className={css.addText}>ADD</span>
           
            </div>
          ) : (
            <div>
              <div className={css.counter}>
                <button className={css.counterBtn} onClick={handleRemove}>-</button>
                <span className={css.counterValue}>{quantity}</span>
                <button className={css.counterBtn} onClick={handleAdd}>+</button>
              </div>
              <button className={css.addToCartBtn} onClick={() => setShowModal(true)}>
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* AddToCart Modal */}
      {showModal && <AddToCart onClose={() => setShowModal(false)} data={props.data} />}
    </div>
  );
};

export default FoodItemProduct;
