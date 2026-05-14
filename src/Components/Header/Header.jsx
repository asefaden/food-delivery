import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>order your favorite food here!</h2>
        <p>
          Hungry? Order your favorite food here and satisfy your cravings
          without leaving your home! From crispy fries and juicy burgers to
          cheesy pizzas and refreshing salads, there’s something for everyone.
          Choose your meal, add it to your basket, and get ready for good
          flavors delivered right to your door. Food ordering is super easy and
          convenient—just a few clicks and your meal is on its way. No lines, no
          waiting, just deliciousness! Treat yourself today and let great taste
          come to you. What's your go-to dish when you order food?{" "}
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
