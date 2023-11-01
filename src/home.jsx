import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { BiHeadphone } from "react-icons/bi";
// import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import { BsEye } from "react-icons/bs";
import "./home.css";

import imgBg from "./img/iphone.png";

const Home = () => {
  return (
    <div>
      <div className="top-banner">
        <div className="cotainer">
          <div className="detail">
            <h2 className="detail-text">
              New <br /> iPhone 15
            </h2>
            <div className="detail-small-text">
              Order now and get a 70% discount
            </div>

            <Link className="link-shop" to="/product">
              Shop Now <BsArrowRight className="bsarrow" />
            </Link>
          </div>
          <div className="img-box">
            <img className="img-iph" src={imgBg} alt="m"></img>
          </div>
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
export default Home;
