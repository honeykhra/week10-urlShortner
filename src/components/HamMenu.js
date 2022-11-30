// Menu.js
import React from "react";

const Menu = ({ open, setOpen }) => {
  return (
    <div className={!open ? "styledmenu" : "styledmenu open"} open={open}>
      <a href="/">Features</a>
      <a href="/">Pricing</a>
      <a href="/">Resources</a>
      <span className="line"></span>
      <a href="/">Login</a>
      <a href="/">
        Sign up
      </a>
    </div>
  );
};
export default Menu;
