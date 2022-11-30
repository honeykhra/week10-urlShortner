import React, { useState } from "react";
import Menu from "./HamMenu";
import "./Hamburger.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
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
