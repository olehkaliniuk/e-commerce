import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footercontainer">
        <div className="footerbox">
          <div className="kontakkt">
            <h4>Contact Us</h4>
            <div className="kk">+498212684150</div>
            <div className="kk">techmarket@info.com</div>
          </div>
          <div className="kontakkt">
            <h4>My Account</h4>
            <div className="kk">Dashboard</div>
            <div className="kk">My Orders</div>
            <div className="kk">My Reviews</div>
            <div className="kk">My Profile</div>
          </div>
          <div className="kontakkt">
            <h4>Our Services</h4>
            <div className="kk">About Us</div>
            <div className="kk">Return Policy</div>
            <div className="kk">FAQ</div>
            <div className="kk">Privacy & Policy</div>
          </div>
          <div className="kontakkt">
            <h4>Information</h4>
            <div className="kk">New Arrivals</div>
            <div className="kk">Specials</div>
            <div className="kk">Hot Deals</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
