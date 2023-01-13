import React from "react";
import GrayButton from "../fragmental comp/GrayButton";
import YellowButton from "../fragmental comp/YellowButton";

function HomeMenu() {
  return (
    <section className="menu">
      <div className="menu__container">
        <div className="menu__delivery">
          <h2>Order for Delivery!</h2>
          <div className="menu__carousel">
            <GrayButton>Lunch</GrayButton>
            <GrayButton>Mains</GrayButton>
            <GrayButton>Desserts</GrayButton>
            <GrayButton>Specials</GrayButton>
          </div>
        </div>
        <div className="menu__online">
          <h2>This Weeks Specials!</h2>
          <YellowButton>Online Menu</YellowButton>
        </div>
      </div>
    </section>
  );
}

export default HomeMenu;
