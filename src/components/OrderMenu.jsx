import React from "react";
import restaurant from "../assets/restaurant.jpg";
function OrderMenu() {
  return (
    <section className="order">
      <div className="order__container">
        <div className="order__image">
          <img src={restaurant} alt="restaurant" />
        </div>
        <div className="order__text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            deserunt totam maxime veniam eaque quidem!
          </p>
        </div>
      </div>
    </section>
  );
}

export default OrderMenu;
