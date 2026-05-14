import React from "react";
import "./LoginPopup.css";
import { useState } from "react";
import { assets } from "../../assets/assets.js";
const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup" id="login-popup">
      <form className="login-form">
        <div className="login-form-header">
          <h2>{currentState}</h2>
          <img className="cross-icon"
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter your name" required />
          )}
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Sign In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" id="remember-me" required />
          <p>
            By continuing, I agree the terms and conditions of your privacy
            policy.
          </p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create Account{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click Here?</span>
          </p>
        ) : (
          <p>
            Already Have An Account{" "}
            <span onClick={() => setCurrentState("Login")}>Login Here!</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
