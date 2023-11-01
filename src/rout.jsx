import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import Cart from "./cart";
import About from "./about";
import Support from "./support";
import Paybox from "./paybox";
import Shipbox from "./shipbox";
import SmsBox from "./smsbox";
const Rout = ({ detail, view, close, setClose, cart, setCart, addtocart }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <Product
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addtocart={addtocart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} addtocart={addtocart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/paybox" element={<Paybox />} />
        <Route path="/shipbox" element={<Shipbox />} />
        <Route path="/smsbox" element={<SmsBox />} />
      </Routes>
    </div>
  );
};
export default Rout;
