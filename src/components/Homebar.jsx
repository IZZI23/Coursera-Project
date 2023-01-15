import React from "react";
import homepage from "../assets/homepage.jpg";
import YellowButton from "../fragmental comp/YellowButton";
import { Link } from "react-router-dom";

function Homebar() {
  return (
    <section className="homebar">
      <div className="homebar__container">
        <div className="homebar__title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <div className="homebar__image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            vero maiores amet eaque modi est odit laudantium alias? Sint in,
            magnam odio veritatis nihil dolore modi harum tenetur dignissimos
            esse!
          </p>
          <img src={homepage} alt="" />
        </div>
        <Link to={'/order'}>
          <YellowButton>Reserve a Table</YellowButton>
        </Link>
      </div>
    </section>
  );
}

export default Homebar;
