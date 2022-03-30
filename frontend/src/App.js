import React, { useState, useEffect } from "react";

import Home from "./screens/Home";
import { CardContext } from "./context/CardContext";
import { Routes, Route } from "react-router-dom";
import BrandView from "./screens/dynamic/brands/BrandView";
import Login from "./screens/login/Login";
import Cart from "./components/OrderCart/Cart";



function App() {



  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])


  // useEffect(() => {
  //   setCart(localStorage.getItem('cart'))
  //   // localStorage.setItem("cart", JSON.stringify(cart))


  // }, [])


  return (
    <>
      <CardContext.Provider value={{ cart, setCart }}>
        <Cart />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/brands/:id" element={<BrandView />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </CardContext.Provider>
    </>
  );
}

export default App;
