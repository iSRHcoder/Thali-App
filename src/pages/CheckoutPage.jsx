import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CheckoutPage = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      navigate("/");
    }
  }, [timer, navigate]);
  const greetingStyle = {
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    color: "#3498db",
    marginTop: "20px",
  };
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "50px",
    border: "4px solid #3498db",
  };

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  const { isAuth } = useContext(AuthContext);
  return isAuth ? (
    <>
      <div style={containerStyle}>
        <h3>Your Thali order is placed successfully</h3>
        <h6>You will receive your order in 10-20 min</h6>
        <h2 style={greetingStyle}>HAPPY EATING</h2>
        <h3 style={greetingStyle}>ORDER AGAIN...!</h3>
      </div>
      <p>*you will be redirected to Home page after {timer} sec</p>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default CheckoutPage;
