import { useState, useEffect } from "react";
import { IoIosAdd, IoIosRemoveCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import css from "./Cart.module.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data from local storage and calculate total on component mount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    calculateTotal(cartData);
  }, []);

  // Calculate total price
  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  // Remove an item
  const handleRemove = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Update quantity
  const handleQuantityChange = (itemId, delta) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === itemId) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      })
      .filter(Boolean);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Checkout process
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }
    alert(`Order placed successfully! Total: ₹${totalPrice.toFixed(2)}`);
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className={css.cartContainer}>
      <h2 className={css.cartTitle}>Your Cart</h2>

      {cart.length === 0 ? (
        <p className={css.emptyCart}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={css.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={css.cartItem}>
                <div className={css.itemInfo}>
                  <img src={item.imgSrc} alt={item.ttl} className={css.itemImg} />
                  <div>
                    <h3>{item.ttl}</h3>
                    <p>Price: ₹{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className={css.itemActions}>
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className={css.counterBtn}
                  >
                    <IoIosRemoveCircleOutline />
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className={css.counterBtn}
                  >
                    <IoIosAdd />
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className={css.removeBtn}
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={css.billDetails}>
            <h3>Bill Details</h3>
            <p>Item Total: ₹{totalPrice.toFixed(2)}</p>
            <p>Delivery Fee (2.7 km): ₹35</p>
            <p>Platform Fee: ₹10</p>
            <p>GST & Charges: ₹{(totalPrice * 0.05).toFixed(2)}</p>
            <h3 className={css.totalPay}>Total: ₹{(totalPrice + 35 + 10 + totalPrice * 0.05).toFixed(2)}</h3>
          </div>

          <button className={css.checkoutBtn} onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
