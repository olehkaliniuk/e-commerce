import React from "react";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import "./nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const activeLink = "linkactiv";
  const normalLink = "link";
  return (
    <div>
      <div className="free">
        <p>
          <div className="icon">
            <FaTruckMoving /> Crazy Sale 70% discount on all of our products
          </div>
        </p>
      </div>
      <div className="main-header">
        <div className="container">
          <div className="logo">
            <div>TechMarket</div>
          </div>
          <div className="search-box">
            <input
              type="text"
              value=""
              placeholder="Enter the product name"
              autoComplete="off"
            />
            <button>Search</button>
          </div>
          <div className="icon">
            <div className="account">
              <div className="user-icon">
                <NavLink className="link" to="/">
                  <AiOutlineUser />
                </NavLink>
              </div>
            </div>
            <NavLink className="link" to="/">
              <AiOutlineHeart />
            </NavLink>
            <NavLink className="link" to="/cart">
              <BsBagCheck />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container">
          <div className="nav">
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive ? activeLink : normalLink;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) => {
                    return isActive ? activeLink : normalLink;
                  }}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    return isActive ? activeLink : normalLink;
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) => {
                    return isActive ? activeLink : normalLink;
                  }}
                >
                  Support
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="auth">
          <CiLogin />
        </div>
      </div>
    </div>
  );
};
export default Nav;
