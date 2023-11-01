import React from "react";
import "./paybox.css";
import { Link } from "react-router-dom";

const Paybox = () => {
  return (
    <div>
      <div className="paycontainer">
        <div className="paytitle">Enter Your Card Details</div>
        <form className="form">
          <div className="paytext">Card Number</div>
          <input
            name="cardn"
            className="payinput"
            placeholder="1234 5678 1234 5678"
          />
          <div className="paytext">Expiry Date</div>
          <input name="edata" className="payinput" placeholder="MMYY" />
          <div className="paytext">CVV</div>
          <input name="cvv" className="payinput" placeholder="123" />
          <div className="paytext">Cardholder Name</div>
          <input
            name="uname"
            className="payinput"
            type="text"
            placeholder="John Doe"
          />
          <div></div>
          <button className="paybtn">Pay</button>
          <div className="dfg">___</div>
          <Link to="/smsbox" className="paylinkk">
            Check the SMS code after payment
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Paybox;
