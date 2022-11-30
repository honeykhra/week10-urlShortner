import React, { useState } from "react";
import Menu from "./HamMenu";
import "./Hamburger.css";
import logo from "../images/logo.svg";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="burger-container">
      <img src={logo} alt="logo" className="logo" />
      <div className="hamburger" open={open} onClick={() => setOpen(!open)}>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
};

export default HamburgerMenu;
