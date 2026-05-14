import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../Components/StoreContext/StoreContext";
const PlaceOrder = () => {
   const {getTotalCartAmount} = useContext(StoreContext);
return (
  <form className="place-order-form">
      <div className="place-order-left">
        <p className="place-order-title">Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder="Enter your First name" required />
          <input type="text" placeholder="Enter your last Name" required />
        </div>
        <input type="email" placeholder="Enter your email" required />
        <input type="text" placeholder="Enter Your Address" required />
        <div className="multi-field">
          <input type="text" placeholder="Enter your City" required />
          <input type="text" placeholder="Enter your State" required />
        </div>
        <div className="multi-field">
          <input type="text" placeholder="Enter your Zip Code" required />
          <input type="text" placeholder="Enter your Country" required />
        </div>
        <input type="text" placeholder="Enter your Phone Number" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()} Birr</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery fee</p>
            <p>{getTotalCartAmount() === 0 ? 0 : 2} Birr</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} Birr</p>
          </div>
          <button>PROCEED TO Payment</button>
        </div>
      </div>
  </form>
);
};

export default PlaceOrder;
