import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Category from "./pages/Category";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout/address" element={<Checkout />} />
            <Route path="/categories/:name" element={<Category />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
