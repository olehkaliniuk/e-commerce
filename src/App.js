import React, { useState } from "react";
import Nav from "./nav";
import Rout from "./rout";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./footer";

function App() {
  //products open/ close
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  //add to cart
  const [cart, setCart] = useState([]);
  const addtocart = (product) => {
    const exsit = cart.find((x) => {
      return x.id === product.id;
    });
    if (exsit) {
      // alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      // alert("product is added to cart");
    }
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Rout
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
