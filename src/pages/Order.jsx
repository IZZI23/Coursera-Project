import React , {useState, useReducer} from "react";
import Navbar from "../components/Navbar";
import OrderForm from "../components/OrderForm";
import OrderMenu from "../components/OrderMenu";

function Order() {
  const [availableTimes, setAvailableTimes] = useState("17:00");

  // const initialState = 
  // const [state, dispatch]= useReducer(reducer,initialState)
  return (
    <>
      <Navbar />
      <OrderMenu />
      <OrderForm  availableTimes = {availableTimes} setAvailableTimes ={setAvailableTimes} />
    </>
  );
}

export default Order;
