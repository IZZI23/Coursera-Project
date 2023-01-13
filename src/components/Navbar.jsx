import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbBasket } from "react-icons/tb";
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <header>
      <RxHamburgerMenu className="header__icons" />
      <img src={logo} alt="logo" className="header__img"/>
      <TbBasket className="header__icons" />
      <nav className="navbar">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
