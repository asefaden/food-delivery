import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>
            Food Delivery is a leading food delivery service, bringing delicious
            meals from your favorite restaurants right to your doorstep.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/" target="_blank"><img src={assets.facebook_icon} alt="" /></a>
            <a href="https://www.instagram.com/" target="_blank"><img src={assets.instagram_icon} alt="" /></a>
            <a href="https://www.linkedin.com/" target="_blank"><img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>delivery</li>
            <li>privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+251-919133701</li>
            <li>assede1122@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {" "}
        copyright © 2026 Food Delivery. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
