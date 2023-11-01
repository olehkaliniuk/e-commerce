import React from "react";
import { BiHeadphone } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const Support = () => {
  return (
    <div>
      <div className="aboutcontainer">
        <h3 className="abouttiltle">#Support</h3>
        <div className="abouttext">
          <div className="abouttextbig">How to Contact Us: </div>
          To seek assistance, please compose an email to{" "}
          <span className="mail">support@techmarket.com. </span>
          In your email, make sure to include the following details: Subject:
          Provide a concise subject line describing your inquiry or concern.
          Full Name: Mention your full name as it appears on your TechMarket
          account. Order Number: If applicable, include your order number for
          faster assistance. Description: Provide a detailed description of your
          issue or question. The more information you provide, the quicker and
          more accurate our response will be. Reasons for Contacting Support:
          Our support team is here to assist you with a wide range of inquiries,
          including but not limited to: Order Assistance: Questions about
          placing orders, order status, tracking, and delivery. Product
          Information: Inquiries about product specifications, features,
          compatibility, and availability. Technical Support: Troubleshooting
          issues with products, installation, and usage. Returns and Refunds:
          Assistance with returns, replacements, refunds, and warranty claims.
          Account Help: Support related to account creation, login, and profile
          settings. General Inquiries: Any other questions or concerns you may
          have about TechMarket's services.
        </div>
      </div>
      <div className="about">
        <div className="containerabout">
          <div className="boxabout">
            <div className="iconabout">
              <FiTruck />
              <div className="detailabout">
                <h3>Free Shipping</h3>
                <p>Order above $1000</p>
              </div>
            </div>

            <div className="iconabout">
              <HiOutlineReceiptRefund />
              <div className="detailabout">
                <h3>Return & Refund</h3>
                <p>Money back Gaurenty</p>
              </div>
            </div>

            <div className="iconabout">
              <BsCurrencyDollar />
              <div className="detailabout">
                <h3>Member Discount</h3>
                <p>On every Order</p>
              </div>
            </div>

            <div className="iconabout">
              <BiHeadphone />
              <div className="detailabout">
                <h3>Customer Support</h3>
                <p>Every time call support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
