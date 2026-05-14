import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Components/StoreContext/StoreContext";
const FoodItem = ({ id, name, price, image, description }) => {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
        {!cartItem[id] || cartItem[id] === 0 ? (
          <img
            onClick={() => addToCart(id)}
            className="add"
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              className="remove"
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addToCart(id)}
              className="add2"
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className="food-item-description">{description}</p>
      <p className="food-item-price">{price} Birr</p>
    </div>
  );
};

export default FoodItem;
