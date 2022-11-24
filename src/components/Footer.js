import React from "react";
import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import pin from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";
import tw from "../images/icon-twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="sections">
        <li className="section section1">
          <h3>Features</h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </li>
        <li className="section section2">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </li>
        <li className="section section3">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </li>
      </div>
      <div className="socialIcons">
        <li>
          <img src={fb} alt="fb" />
        </li>
        <li>
          <img src={insta} alt="insta" />
        </li>
        <li>
          <img src={tw} alt="twitter" />
        </li>
        <li>
          <img src={pin} alt="pin" />
        </li>
      </div>
    </div>
  );
};

export default Footer;
