import React from "react";
import { Link } from "react-router-dom";
import "./paybox.css";

const Shipbox = () => {
  return (
    <div>
      <div className="paycontainer">
        <div className="paytitle">Checkout</div>
        <form>
          <div className="paytext">E-Mail</div>
          <input className="payinput" type="text" />
          <div className="paytext">First Name / Last Name</div>
          <input className="payinput" type="text" />
          <div className="paytext">Street Address</div>
          <input className="payinput" type="text" placeholder="Adress Line 1" />
          <input
            className="payinput"
            type="text"
            placeholder="Adress Line 2(optional)"
          />
          <div className="paytext">City</div>
          <input className="payinput" type="text" />
          <div className="paytext">Postcode / ZIP</div>
          <input className="payinput" type="text" />
          <div className="paytext">Country</div>
          <input className="payinput" type="text" />
          <div></div>
          <button className="paybtn">
            <Link to="/paybox" className="paylink">
              Save
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipbox;
