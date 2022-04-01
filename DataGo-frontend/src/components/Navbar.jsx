import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Logo from "../style/logo.png";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="header">
        <img src={Logo} alt="logo" />
        <BsPersonCircle />
      </div>
      <div className="menu">
        <a href="/">Player List</a>
      </div>
    </div>
  );
};

export default Navbar;
