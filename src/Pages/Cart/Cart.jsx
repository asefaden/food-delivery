import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Components/StoreContext/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate=useNavigate();
  // Get items in cart
  return (
    <div className="cart" id="cart">
      <div className="cart-items">
        <div className="cart-items-header">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item) => {
            if (cartItem[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-header cart-items-item">
                <img src={item.image} alt="" className="cart-item-img" />
                  <p>{item.name}</p>
                  <p>{item.price} Birr</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)}
                     className="cross">X</p>
                </div>
                <hr />
                </div>
                
              );
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()} Birr</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery free</p>
            <p>{getTotalCartAmount()===0?0:2} Birr</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>{getTotalCartAmount()===0?0:getTotalCartAmount() + 2} Birr</p>
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
        </div>
              <div className="cart-promo-code">
        <div>
          <p>If you have a promo code, Enter It here</p>
          <div className="promo-code-input">
            <input type="text" placeholder="Enter your promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
