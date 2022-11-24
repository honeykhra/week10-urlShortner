import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div>
      <ul className="navbar">
        <div className="left-items">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#resources">Resources</a>
          </li>
        </div>
        <div className="right-items">
          <li>Login</li>
          <li className="active"> Sign Up</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
