import React from "react";
import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import OrderMenu from "../components/OrderMenu";

function Order() {
  return (
    <>
      <Navbar />
      <OrderMenu />
      <OrderForm/>
    </>
  );
}

export default Order;
