import React from "react";
import Home from "./Home";
import Order from "./Order";
import { Route,Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/order" element={<Order/>}/>
    </Routes>
  );
}

export default Pages;
