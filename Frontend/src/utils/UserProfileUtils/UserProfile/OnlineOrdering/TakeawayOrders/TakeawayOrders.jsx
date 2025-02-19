import { useState } from "react";
import { useNavigate } from "react-router-dom";

import UserProfileNoData from "../../UserProfileNoData/UserProfileNoData";

import WhiteButton from "../../../../Buttons/WhiteButton/WhiteButton";
import RedButton from "../../../../Buttons/RedButton/RedButton";
import Cart from "../../../../../pages/Cart/Cart"; // Import Cart component
import OrderHistoryCard from "../../../../Cards/OrderHistoryCard/OrderHistoryCard";

const TakeawayOrders = ({ hashId }) => {
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false); // Toggle cart display

  const data = [
    {
      id: 1,
      restaurant: "Paradise Biryani",
      address: "Dilshuk Nagar, Hyderabad",
      orderDate: "12 Feb 2025",
      items: "Chicken Biryani, Coke",
      status: "Preparing",
    },
    {
      id: 2,
      restaurant: "Max Burger House",
      address: "Kharadi, Pune",
      orderDate: "15 Feb 2025",
      items: "Cheese Burger, Fries",
      status: "Delivered",
    },
  ];

  return (
    <div className={css.outerDiv}>
      <div className={css.btns}>
        <RedButton txt="Orders" count={data.length} />
        <WhiteButton txt="Cart" count="0" onClick={() => setShowCart(true)} />
      </div>

      {showCart ? (
        <Cart /> // Render Cart on the same page
      ) : data.length > 0 ? (
        <div className={css.bdy}>
          {data.map((order) => (
            <div key={order.id} className={css.orderItem} onClick={() => setShowCart(true)}>
              <OrderHistoryCard restaurant={order.restaurant} address={order.address} />
            </div>
          ))}
        </div>
      ) : (
        <UserProfileNoData hashId={hashId} />
      )}
    </div>
  );
};

export default TakeawayOrders;
