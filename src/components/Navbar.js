import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <a className="a" href="#home">
          <img src={logo} alt="logo" />
        </a>
        <div className="nav-links">
          <div className="left-items">
            <a className="a" href="#features">
              Features
            </a>
            <a className="a" href="#pricing">
              Pricing
            </a>
            <a className="a" href="#resources">
              Resources
            </a>
          </div>
          <div className="right-items">
            <a className="a" href="#login">
              Login
            </a>
            <a className="a active" href="#signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
