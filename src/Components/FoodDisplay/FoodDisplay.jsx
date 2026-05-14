import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Components/StoreContext/StoreContext";
const FoodDisplay = ({category }) => {
  // Accessing food_list from the context
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          {
            console.log(category, item.category);
          }
          if (category === "all" || category === item.category) {
            return (
              <FoodItem 
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                description={item.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
