import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "./productdetail";
import {
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import "./products.css";

const Product = ({ detail, view, close, setClose, addtocart }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [product, setProduct] = useState(ProductDetail);
  const filterproduct = (product) => {
    const update = ProductDetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };
  const AllProducts = () => {
    setProduct(ProductDetail);
  };
  return (
    <div>
      {close ? (
        <div className="pddetaill">
          <div className="pdcontainer">
            <button className="closebtn" onClick={() => setClose(false)}>
              <AiOutlineClose />
            </button>
            {detail.map((curElm) => {
              return (
                <div className="pdbox">
                  <div className="pdimgbox">
                    <img src={curElm.Img} alt="m" />
                  </div>
                  <div className="pddetail">
                    <p>{curElm.Brand}</p>
                    <h4>{curElm.Title}</h4>
                    <h5 className="pppprice">
                      ${Math.round(curElm.Price / 1.3)}
                      {"   "}
                      <span className="ppppricenew">${curElm.Price}</span>
                    </h5>
                    <div className="pddescr">
                      <button
                        onClick={() => addtocart(curElm)}
                        className="addtocartbtn"
                      >
                        <Link
                          onClick={() => setClose(false)}
                          className="tocart"
                          to="/cart"
                        >
                          Add To Cart
                        </Link>
                      </button>
                      <div className="pddescrtitle">Specification:</div>
                      <div>
                        <h5>
                          Brand: <span className="deskk">{curElm.Brand}</span>
                        </h5>
                        <h5>
                          Color: <span className="deskk">{curElm.Color}</span>
                        </h5>
                        <h5>
                          Display:
                          <span className="deskk"> {curElm.Display}</span>
                        </h5>
                        <h5>
                          Processor:
                          <span className="deskk"> {curElm.Processor}</span>
                        </h5>
                        <h5>
                          Operating System:
                          <span className="deskk">
                            {curElm.OperatingSystem}
                          </span>
                        </h5>
                        <h5>
                          RAM: <span className="deskk">{curElm.RAM}</span>
                        </h5>
                        <h5>
                          Memory: <span className="deskk">{curElm.Memory}</span>
                        </h5>
                      </div>
                      <div className="pddescrtitle">Description:</div>
                      <h5>
                        <span className="deskk">{curElm.Description}</span>
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="products">
        <h3 className="title">#Products</h3>
        <div className="container">
          <div className="filter">
            <div className="categories"></div>
            <ul>
              <li onClick={() => AllProducts()} className="list">
                All
              </li>
              <li onClick={() => filterproduct("Iphone")} className="list">
                iPhone
              </li>
              <li onClick={() => filterproduct("iPad")} className="list">
                iPad
              </li>
              <li onClick={() => filterproduct("Mac")} className="list">
                Mac
              </li>
              <li onClick={() => filterproduct("iMac")} className="list">
                iMac
              </li>
              <li onClick={() => filterproduct("AirPods")} className="list">
                AirPods
              </li>
            </ul>
          </div>
          <div className="productbox">
            <div className="containerProduct">
              {product.map((curElm) => {
                return (
                  <div className="boxproduct" key={curElm.id}>
                    <div className="imgbox">
                      <img
                        src={curElm.Img}
                        alt="m"
                        onClick={() => {
                          view(curElm);
                          handleScrollToTop();
                        }}
                      ></img>
                    </div>
                    <div className="details">
                      <AiOutlineShoppingCart />
                      <BsEye />
                      <AiOutlineHeart />
                    </div>
                    <div className="pdetail">
                      <p>{curElm.Brand}</p>
                      <h3>{curElm.Title}</h3>
                      <h4>{curElm.Memory}</h4>
                      <h3 className="pppprice">
                        {Math.round(curElm.Price / 1.3)}
                        {"   "}
                        <span className="ppppricenew">${curElm.Price}</span>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
