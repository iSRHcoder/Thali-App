import { useContext } from "react";
import Cart from "../components/Cart/cart";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      {isAuth && <Cart />}
      {!isAuth && <Navigate to={"/login-error"} />}
    </>
  );
};

export default CartPage;
