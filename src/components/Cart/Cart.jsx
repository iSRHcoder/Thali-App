import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import ModalPopup from "../ModalPopup/ModalPopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveItem,
  clearThali,
} from "../Thali/thaliSlice";

const Cart = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const thali = useSelector((state) => state.counter.thali);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Remove = (id) => {
    dispatch(RemoveItem({ id }));
  };

  const increaseQuantity = (index) => {
    dispatch(IncreaseQuantity(index));
  };

  const decreaseQuantity = (index) => {
    dispatch(DecreaseQuantity(index));
  };

  const order = () => {
    if (thali.length >= 1) {
      setIsModalShow(true);
    } else {
      window.alert("Please add at least 1 item to the cart");
    }
  };

  const modalClosehandler = () => {
    setIsModalShow(false);
  };

  const orderPlaceHandler = () => {
    dispatch(clearThali());
    setIsModalShow(false);
    navigate("/checkout");
  };

  let sum = 0;

  for (const item of thali) {
    sum += +item.price * item.quantity;
  }

  return (
    <div className="container m-5">
      <div className="d-flex justify-content-between mt-2 mb-2">
        <h1 className="text-danger">Your Food</h1>
        <div>
          <button className="btn btn-success" onClick={order}>
            Order Now <span className="text-warning"> ₹{sum}</span>
          </button>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {thali.map((ele, index) => (
          <div className="col mb-3" key={index}>
            <div className="card">
              <img
                src={ele.image}
                className="card-img-top"
                alt="foodImage"
                width="100%"
                height="200"
              />
              <div className="card-body">
                <h3 className="card-title">{ele.name}</h3>
                <div className="d-flex justify-content-between m-2">
                  <p>Price: ₹{ele.price}</p>
                  <p>TotalPrice: ₹{+ele.price * ele.quantity} </p>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p className="card-text">
                    Quantity:
                    <Button
                      className="ms-1"
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </Button>
                    <strong> 0{ele.quantity}</strong>
                    <Button
                      className="ms-1"
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </Button>
                  </p>
                  <Button
                    variant="warning"
                    style={{ height: "40px" }}
                    onClick={() => Remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {thali.length === 0 && (
        <div className="text-center mt-3">
          <h3>Add at least 1 Food Item to your Thali</h3>
        </div>
      )}

      <ModalPopup
        show={isModalShow}
        handleClose={modalClosehandler}
        handleAction={orderPlaceHandler}
        modalBody="Are you sure about to Order this?"
        actionLabel="Confirm"
        actionBtnVariant="success"
      />
    </div>
  );
};

export default Cart;
