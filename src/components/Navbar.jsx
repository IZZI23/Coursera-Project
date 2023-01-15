import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbBasket } from "react-icons/tb";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <RxHamburgerMenu className="header__icons" />
      <Link to={"/"}>
        <img src={logo} alt="logo" className="header__img" />
      </Link>
      <TbBasket className="header__icons" />
      <nav className="navbar">
        <ul>
          <NavLink className="link" to={"/"}>
            <li>Home</li>
          </NavLink>
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
