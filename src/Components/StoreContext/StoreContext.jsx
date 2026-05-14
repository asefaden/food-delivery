import { createContext, useState } from "react";
// Importing food_list from assets
import { food_list } from "../../assets/assets";
const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  /*useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
*/
const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItem) {
      let itemInfo=food_list.find((food) => food._id === item);
      if(cartItem[item]) {
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  }
  // Initialize cartItem with food_list items
  const storeValue = {
    food_list,
    setCartItem,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={storeValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
export { StoreContext };
