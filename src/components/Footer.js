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
          <ul>
            <h3>Features</h3>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </li>
        <li className="section section2">
          <ul>
            <h3>Resources</h3>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </li>
        <li className="section section3">
          <ul>
            <h3>Company</h3>
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
