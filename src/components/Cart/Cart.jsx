import { useSelector, useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import ModalPopup from "../ModalPopup/ModalPopup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveItem,
  clearThali,
} from "../Thali/ThaliSlice";

const Cart = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const thali = useSelector((state) => state.counter.thali);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Remove = (index) => {
    dispatch(RemoveItem({ id: index }));
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
    <div className="m-5 sunil">
      <div className="mt-2 mb-2 d-flex justify-content-between">
        <h1 className="text-danger">Your Food</h1>
        <div>
          <Button className="btn btn-success" onClick={order}>
            Order Now <span className="text-warning"> ₹{sum}</span>
          </Button>
        </div>
      </div>
      <Row>
        {thali.map((ele, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-3  ">
            <div className="card">
              <img
                src={ele.image}
                className="card-img-top"
                alt="foodImage"
                width="100%"
                height="200px"
              />
              <div className="card-body">
                <h3 className="card-title">{ele.name}</h3>
                <div className="d-flex justify-content-around m-2">
                  <span>Price: ₹{ele.price}</span>
                  <span>TotalPrice: ₹{+ele.price * ele.quantity} </span>
                </div>
                <div className="d-flex justify-content-around mt-2 mb-2">
                  <p className="card-text">
                    <span>Quantity:</span>
                    <span>
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
                    </span>
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
          </Col>
        ))}

        {thali.length === 0 && (
          <div className="col-12">
            <h3>Add at least 1 Food Item to your Thali</h3>
          </div>
        )}
      </Row>

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
