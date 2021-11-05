import React, { useState } from "react";
import "./Modal.css";
import BuyPizza from "./BuyPizza";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "./state/action-creators/index";
export default function Modal() {
  const dispatch = useDispatch();
  const { loadPizza } = bindActionCreators(actionCreators, dispatch);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div id="header_small">
              <h1 div className="title">
                Cart
              </h1>
              <img id="cancel" src="images/cancel.png" onClick={toggleModal} />
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
          </div>
        </div>
      )}
    </>
  );
}
// function Modal({ setOpenModal }) {
//   const pizza = useSelector((state) => state.infoPizza);
//   console.log(pizza);
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//{
/* <div id="header_small">
  <h1 div className="title">
    Cart
  </h1>
  <img
    id="cancel"
    src="images/cancel.png"
    onClick={() => {
      setOpenModal(false);
    }}
  />
</div>; */
// }

//           <div id="amount">
//             <h1 id="text">Amount</h1>
//             <h1 id="money">UAH</h1>
//           </div>
//           <div id="button_block">
//             <button id="order_b">To order</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
