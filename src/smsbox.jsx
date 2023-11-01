import React from "react";

const SmsBox = () => {
  return (
    <div>
      <div className="paycontainer">
        <div className="paytitle">SMS Confirmation</div>
        <form>
          <div className="paytext">SMS-Code</div>
          <input className="payinput" type="text" />
          <div>___</div>

          <button className="paybtn">Save</button>
        </form>
      </div>
    </div>
  );
};

export default SmsBox;
