import React from "react";

import { Link } from "react-router-dom";
import "./cart.css";
const Cart = ({ cart, setCart, Totalprice }) => {
  var discount = 1.3;

  const cupoon = (e) => {
    e.preventDefault();
    var coupon = document.getElementById("valuecupon").value;

    if ((coupon = "WR67H")) {
      discount = 2;
    }
    if ((coupon = "UHJPY")) {
      discount = 2;
    }
    if ((coupon = "LPMHN")) {
      discount = 2;
    }
    if ((coupon = "ET67H")) {
      discount = 2;
    }
  };

  const incqty = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty + 1 }
          : curElm;
      })
    );
  };

  const decqty = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exsit, qty: exsit.qty - 1 }
          : curElm;
      })
    );
  };

  // remove cart product
  const removeproduct = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };
  //totalprice
  Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0);
  return (
    <>
      <div className="cartcontainer">
        <h1>#Cart</h1>
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">
              Shop Now
            </Link>
          </div>
        )}

        <div className="contant">
          {cart.map((curElm) => {
            return (
              <div className="cartitem" key={curElm.id}>
                <div className="cartimgbox">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                </div>
                <div className="detail">
                  <div className="info">
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <h4>
                      Price: ${Math.round(curElm.Price / discount)}
                      {"   "}
                    </h4>
                    <div className="qty">
                      <button className="incqty" onClick={() => incqty(curElm)}>
                        +
                      </button>
                      <input
                        className="incqtyq"
                        type="text"
                        value={curElm.qty}
                      />
                      <button className="incqty" onClick={() => decqty(curElm)}>
                        -
                      </button>
                    </div>

                    <button
                      className="removebtn"
                      onClick={() => removeproduct(curElm)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          {cart.length > 0 && (
            <>
              <h3 className="totalprice">
                Total: ${Math.round(Totalprice / discount)}
              </h3>
              <h2>
                <button className="checkout">
                  <Link to="/shipbox" className="checklink">
                    Checkout
                  </Link>
                </button>
              </h2>
            </>
          )}
        </div>
        <div className="couponfiled">
          <form onSubmit={cupoon}>
            <div className="coupontitle">Coupons</div>
            <div className="coupontext">Enter your coupon code</div>
            <input
              id="valuecupon"
              className="coupon"
              placeholder="XXXXX"
            ></input>
            <div></div>
            <button type="submit" className="couponbtn">
              Add coupon
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
