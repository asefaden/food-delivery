import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPopup from "./Components/LoginPopup/LoginPopup.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Home from "./Pages/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
