import React from "react";
import Modal from "./Modal";
import { useState } from "react";
import BuyPizza from "./BuyPizza";
import "./BuyPizza.css";

import "./styles.css";
function Buy() {
  const [modal, setModal] = useState(false);
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div id="buy">
      <div id="cart">
        <img id="buy_img" src="/images/shopping.png" onClick={toggleModal} />
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <div id="header_small">
                <h1 div className="title">
                  Cart
                </h1>
                <img
                  id="cancel"
                  src="images/cancel.png"
                  onClick={toggleModal}
                />
              </div>
              <BuyPizza
                image="/images/pizza3.png"
                name="Pepperoni"
                weight="430g"
                number="1"
                price="195"
              />
              <BuyPizza
                image="/images/pizza3.png"
                name="Diabola"
                weight="860g"
                number="2"
                price="440"
              />
              <BuyPizza
                image="/images/pizza1.png"
                name="Calzone al Forno"
                weight="430g"
                number="1"
                price="180"
              />
              <div id="amount">
                <h1 id="text">Amount</h1>
                <h1 id="money">UAH</h1>
              </div>
            </div>
          </div>
        )}
      </div>
      <div id="text-buy">
        <h3>0 UAH</h3>
      </div>
    </div>
  );
}

export default Buy;
