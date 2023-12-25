import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/MenuPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/CartPage";
import SupportPage from "../pages/SupportPage";
import ContactUsPage from "../pages/ContactUsPage";
import CheckoutPage from "../pages/CheckoutPage";
import LoginErrorPage from "../pages/LoginErrorPage";
import ErrorPage from "../pages/ErrorPage";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={route.SIGNUP} element={<SignupPage />} />
          <Route path={route.LOGIN} element={<LoginPage />} />
          <Route path={route.MENU} element={<Menu />} />
          <Route path={route.CART} element={<CartPage />} />
          <Route path={route.SUPPORT} element={<SupportPage />} />
          <Route path={route.CONTACT_US} element={<ContactUsPage />} />
          <Route path={route.CHECKOUT} element={<CheckoutPage />} />
          <Route path={route.LOGIN_ERROR} element={<LoginErrorPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
