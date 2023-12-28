import { useContext } from "react";
import Cart from "../components/Cart/Cart";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const CartPage = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <>
      {isAuth && (
        <div className="m-auto">
          <Cart />
        </div>
      )}
      {!isAuth && <Navigate to={"/login-error"} />}
    </>
  );
};

export default CartPage;
