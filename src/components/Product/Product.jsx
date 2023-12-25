import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

/* eslint-disable react/prop-types */
const Product = ({ data, onAddToThali }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const { isAuth } = useContext(AuthContext);

  const handleAddToThali = () => {
    if (isAuth) {
      onAddToThali(data);
      setShowPopup(true);
      setButtonDisabled(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 1000);
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  };
  return (
    <div className="col-md-4 my-3">
      <div className="card">
        <img
          src={data.image}
          alt={data.name}
          className="card-img-top"
          style={{ maxHeight: "300px", minHeight: "300px" }}
        />
        <div className="card-body">
          <h3 className="card-title">{data.name}</h3>
          <p className="card-text">{data.description}</p>
          <div className="d-flex justify-content-around m-2">
            <strong>
              <p className="card-text">Category : {data.category}</p>
            </strong>
            <strong>
              <p className="card-text">Price : ₹{data.price}</p>
            </strong>
          </div>
          <button
            className="btn btn-success"
            onClick={handleAddToThali}
            disabled={isButtonDisabled}
          >
            Add to Thali
          </button>
          {showPopup && (
            <div className="text-success">Item added to Thali!</div>
          )}{" "}
          {isError && <div className="text-danger">Please LogIn first!</div>}
        </div>
      </div>
    </div>
  );
};

export default Product;
